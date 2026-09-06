import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Presentation, PresentationFile, FileBlob} from '@oai/artifact-tool';
const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output=path.join(repo,'.build');
await fs.mkdir(output,{recursive:true});
const presentation=Presentation.create({slideSize:{width:1280,height:720}});
const variants=[
 {id:'clinical-calm',color:'#173D43',accent:'#2A8C8B',muted:'#48686A'},
 {id:'friendly-clay',color:'#263D38',accent:'#667D52',muted:'#536359'},
 {id:'cinematic-dark',color:'#F5F4ED',accent:'#6ED8D0',muted:'#B5C6D4'}
];
const content={
 'zh-TW':{font:'Microsoft JhengHei',title:'研究分享的三個準備',steps:[['釐清對象','了解聽眾的背景與需求'],['選出重點','每頁只傳達一個核心訊息'],['用例子說明','把抽象概念連結到具體情境']]},
 'en':{font:'Arial',title:'Prepare a research talk',steps:[['Know your audience','Understand their background and needs'],['Choose the key points','Give each slide one central message'],['Use concrete examples','Connect abstract ideas to familiar situations']]}
};
const meta=[];
for(const lang of ['zh-TW','en']) for(const v of variants){
 const c=content[lang];const slide=presentation.slides.add();
 slide.images.add({blob:new Uint8Array(await fs.readFile(path.join(repo,'examples/backgrounds',v.id+'.png'))),contentType:'image/png',fit:'cover',position:{left:0,top:0,width:1280,height:720}});
 function txt(text,x,y,w,h,size,color,bold=false){
  const shape=slide.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
  shape.text=text;shape.text.style={typeface:c.font,fontSize:size,bold,color,autoFit:'none'};
 }
 txt(c.title,70,78,760,76,lang==='en'?47:48,v.color,true);
 c.steps.forEach(([title,body],i)=>{
  const y=223+i*121;
  txt(String(i+1).padStart(2,'0'),72,y,62,44,25,v.accent,true);
  txt(title,142,y-3,525,48,32,v.color,true);
  txt(body,142,y+46,530,43,lang==='en'?23:25,v.muted);
 });
 slide.speakerNotes.textFrame.setText(`Style comparison example: ${v.id}, ${lang}. Background generated with the built-in image_gen tool; exact model not exposed. All visible slide text is native editable text. See examples/prompts.json for the generation prompt. Educational demonstration copy, no research data.`);
 meta.push({id:v.id,lang});
}

const file=path.join(output,'style-samples.pptx');
await (await PresentationFile.exportPptx(presentation)).save(file);
const imported=await PresentationFile.importPptx(await FileBlob.load(file));
for(let i=0;i<meta.length;i++){
 const png=await imported.export({slide:imported.slides.items[i],format:'png',scale:1.25});
 await fs.writeFile(path.join(output,meta[i].id+'-'+meta[i].lang+'.png'),new Uint8Array(await png.arrayBuffer()));
}
console.log('Draft and previews written to .build; inspect before publishing.');
