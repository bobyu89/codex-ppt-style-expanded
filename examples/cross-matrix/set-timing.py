"""Set 20-second transitions on the three explicitly identified sample slides."""
import argparse
import zipfile
from pathlib import Path
from lxml import etree

NS='http://schemas.openxmlformats.org/presentationml/2006/main'
def set_timing(source, output):
    if source.resolve()==output.resolve():
        raise ValueError('Use a separate output file')
    with zipfile.ZipFile(source) as z:
        payload={info.filename:(info,z.read(info.filename)) for info in z.infolist()}
    for number in (7,8,9):
        name=f'ppt/slides/slide{number}.xml'
        info,data=payload[name]
        root=etree.fromstring(data)
        transition=root.find(f'{{{NS}}}transition')
        if transition is None:
            transition=etree.Element(f'{{{NS}}}transition')
            # CT_Slide: cSld, clrMapOvr?, transition?, timing?, extLst?
            index=1+(root.find(f'{{{NS}}}clrMapOvr') is not None)
            root.insert(index,transition)
        transition.set('advClick','0')
        transition.set('advTm','20000')
        payload[name]=(info,etree.tostring(root,xml_declaration=True,encoding='UTF-8',standalone=True))
    name='ppt/presProps.xml'
    if name in payload:
        info,data=payload[name];root=etree.fromstring(data)
        show=root.find(f'{{{NS}}}showPr')
        if show is None:
            show=etree.Element(f'{{{NS}}}showPr')
            index=1 if root.find(f'{{{NS}}}htmlPubPr') is not None else 0
            root.insert(index,show)
        show.set('useTimings','1')
        payload[name]=(info,etree.tostring(root,xml_declaration=True,encoding='UTF-8',standalone=True))
    output.parent.mkdir(parents=True,exist_ok=True)
    with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED) as z:
        for info,data in payload.values(): z.writestr(info,data)

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('source',type=Path);p.add_argument('output',type=Path)
    a=p.parse_args();set_timing(a.source,a.output)
