"""Build a native draw.io example and an independent SVG preview from one model."""
from pathlib import Path
import xml.etree.ElementTree as E

HERE=Path(__file__).resolve().parent
nodes=[('start','開始',40,190,120,70,'round'),('brief','釐清需求',230,190,180,70,'box'),('enough','資料足夠？',480,160,180,130,'decision'),('supplement','整理補充資料',460,430,220,70,'box'),('sample','製作風格樣張',740,190,220,70,'box'),('choose','確認方向',1040,190,180,70,'round')]
edges=[('start','brief','',[(160,225),(230,225)]),('brief','enough','',[(410,225),(480,225)]),('enough','sample','是',[(660,225),(740,225)]),('enough','supplement','否',[(570,290),(570,430)]),('supplement','brief','補充後',[(460,465),(320,465),(320,260)]),('sample','choose','',[(960,225),(1040,225)])]
mx=E.Element('mxfile',host='drawio',version='26.0.0')
page=E.SubElement(mx,'diagram',id='intake',name='需求到風格樣張')
model=E.SubElement(page,'mxGraphModel',page='1',pageWidth='1280',pageHeight='720',grid='1',gridSize='10')
root=E.SubElement(model,'root');E.SubElement(root,'mxCell',id='0');E.SubElement(root,'mxCell',id='1',parent='0')
for id,label,x,y,w,h,kind in nodes:
    shape='rhombus;' if kind=='decision' else 'rounded=1;' if kind=='round' else 'rounded=0;'
    cell=E.SubElement(root,'mxCell',id=id,value=label,vertex='1',parent='1',style=shape+'whiteSpace=wrap;html=1;fontFamily=Microsoft JhengHei;fontSize=24;fontColor=#173D43;fillColor=#E4F0EF;strokeColor=#2A8C8B;strokeWidth=2;')
    E.SubElement(cell,'mxGeometry',x=str(x),y=str(y),width=str(w),height=str(h),attrib={'as':'geometry'})
for i,(source,target,label,points) in enumerate(edges):
    cell=E.SubElement(root,'mxCell',id=f'edge-{i}',source=source,target=target,value=label,edge='1',parent='1',style='edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;endArrow=block;endFill=1;strokeColor=#2A8C8B;strokeWidth=2;fontFamily=Microsoft JhengHei;fontSize=20;')
    geo=E.SubElement(cell,'mxGeometry',relative='1',attrib={'as':'geometry'})
    if len(points)>2:
        arr=E.SubElement(geo,'Array',attrib={'as':'points'})
        for x,y in points[1:-1]:E.SubElement(arr,'mxPoint',x=str(x),y=str(y))
E.indent(mx);E.ElementTree(mx).write(HERE/'intake-flow.drawio',encoding='utf-8',xml_declaration=True)
svg=E.Element('svg',xmlns='http://www.w3.org/2000/svg',viewBox='0 0 1280 720',role='img',attrib={'aria-labelledby':'title desc'})
E.SubElement(svg,'title',id='title').text='從需求到風格樣張'
E.SubElement(svg,'desc',id='desc').text='開始、釐清需求、判斷資料是否足夠。足夠則製作風格樣張並確認方向；不足則整理補充資料後回到釐清需求。'
defs=E.SubElement(svg,'defs');marker=E.SubElement(defs,'marker',id='arrow',viewBox='0 0 10 10',refX='9',refY='5',markerWidth='8',markerHeight='8',orient='auto')
E.SubElement(marker,'path',d='M 0 0 L 10 5 L 0 10 z',fill='#2A8C8B')
E.SubElement(svg,'rect',width='1280',height='720',fill='#F6FAFA')
def text(label,x,y,size=24):
    E.SubElement(svg,'text',x=str(x),y=str(y),fill='#173D43',attrib={'font-family':'Microsoft JhengHei, Noto Sans CJK TC, sans-serif','font-size':str(size),'text-anchor':'middle'}).text=label
text('從需求到風格樣張',640,90,42)
for i,(source,target,label,points) in enumerate(edges):
    E.SubElement(svg,'polyline',points=' '.join(f'{x},{y}' for x,y in points),fill='none',stroke='#2A8C8B',attrib={'stroke-width':'3','marker-end':'url(#arrow)'})
    if label:
        x,y={'是':(700,207),'否':(594,360),'補充後':(387,446)}[label];text(label,x,y,20)
for id,label,x,y,w,h,kind in nodes:
    attrs=dict(fill='#E4F0EF',stroke='#2A8C8B');attrs['stroke-width']='2'
    if kind=='decision':E.SubElement(svg,'polygon',points=f'{x+w/2},{y} {x+w},{y+h/2} {x+w/2},{y+h} {x},{y+h/2}',**attrs)
    else:E.SubElement(svg,'rect',x=str(x),y=str(y),width=str(w),height=str(h),rx='28' if kind=='round' else '6',**attrs)
    text(label,x+w/2,y+h/2+8)
text('節點、文字、連線可於 draw.io 修改',640,610,26)
text('此 SVG 依相同資料製作，非 draw.io CLI 匯出',640,655,18)
E.ElementTree(svg).write(HERE/'intake-flow.svg',encoding='utf-8',xml_declaration=True)
print('Created intake-flow.drawio and independent intake-flow.svg')
