import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Presentation,PresentationFile} from '@oai/artifact-tool';

const here=path.dirname(fileURLToPath(import.meta.url));
const out=process.env.MATRIX_BUILD_DIR || path.resolve(here,'../../../.build/cross-matrix');
await fs.mkdir(out,{recursive:true});
const p=Presentation.create({slideSize:{width:1280,height:720}});
const paperURL='https://pure.psu.edu/en/publications/how-the-design-of-presentation-slides-affects-audience-comprehens/';
const craftURL='https://researcher.tw/articles/conference-talk-slide-craft/';
const ids=['research-handdrawn','research-scientific','research-magazine','teaching-handdrawn','teaching-scientific','teaching-magazine','pecha-handdrawn','pecha-scientific','pecha-magazine'];
const manifest=[];
for(const id of ids){
 const [context,style]=id.split('-');
 const font=style==='handdrawn'?'DFKai-SB':'Microsoft JhengHei';
 const ink=style==='scientific'?'#102D69':'#252528';
 const accent=style==='magazine'?'#ED1765':style==='scientific'?'#2463C7':'#496A87';
 const s=p.slides.add();
 s.images.add({blob:new Uint8Array(await fs.readFile(path.join(here,'backgrounds',id+'.png'))),contentType:'image/png',fit:'cover',position:{left:0,top:0,width:1280,height:720}});
 const texts=[];
 function t(value,x,y,w,h,size=32,color=ink,bold=false,align='left'){
  const el=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
  el.text=value;el.text.style={typeface:font,fontSize:size,color,bold,autoFit:'none',alignment:align};
  texts.push(value);
 }
 const cite='Garner & Alley (2013), IJEE 29(6), 1564–1579';
 if(context==='research'){
  if(style==='handdrawn'){
   t('研究顯示：主張—證據組理解較佳',55,42,1170,70,45,ink,true,'center');
   t('110 位工程學生的技術簡報比較研究',170,120,940,45,29,ink,false,'center');
   t('常見條列式',68,192,230,43,30,ink,false,'center');
   t('主張—證據式',369,192,242,43,30,ink,false,'center');
   t('內容理解較佳',727,240,450,58,39);
   t('錯誤概念較少',727,355,450,58,39);
   t('自評認知負荷較低',716,470,480,58,36);
   t('示意圖，非研究數值',100,569,530,34,23,'#555555',false,'center');
  } else if(style==='scientific'){
   t('研究顯示：主張—證據組理解較佳',34,31,1210,65,43,ink,true);
   t('110 位工程學生｜結果方向摘要',41,157,790,49,33,ink,true);
   const table=s.tables.add({rows:4,columns:2,left:42,top:232,width:796,height:328,columnWidths:[343,453],values:[['比較指標','主張—證據組'],['內容理解','較佳'],['錯誤概念','較少'],['自評認知負荷','較低']]});
   table.borders.assign({fill:'#B5C7E3',width:1,style:'solid'});
   for(let r=0;r<4;r++)for(let c=0;c<2;c++){
    const cell=table.getCell(r,c);cell.fill=r===0?'#102D69':(r%2?'#FFFFFF':'#F1F5FC');
    cell.text.style={typeface:font,fontSize:30,bold:r===0,color:r===0?'#FFFFFF':ink};
   }
   t('投影片結構比較',915,158,322,43,29,ink,true,'center');
   t('示意圖，非研究數值',907,586,335,35,22,'#405373',false,'center');
  } else {
   t('主張—證據組',45,129,575,77,57,ink,true);
   t('理解較佳',45,215,575,88,70,accent,true);
   t('110 位工程學生的比較研究',48,319,560,48,28);
   [['內容理解','較佳'],['錯誤概念','較少'],['自評認知負荷','較低']].forEach(([label,result],i)=>{
    const y=119+i*180;
    t(label,702,y,465,43,32,ink,true);
    t(result,706,y+50,440,68,52,accent,true);
   });

  }
  t('圖像為示意；結果限於該研究情境，本頁未呈現效果量。',35,648,1200,29,20,'#454545');
  t(cite,35,678,1200,29,19,'#454545');
 } else if(context==='teaching'){
  if(style==='handdrawn'){
   t('一頁一個主張，下面放證據',80,55,1120,82,49,ink,true,'center');
   const cx=[211,640,1065];
   ['寫主張','挑證據','刪雜訊'].forEach((label,i)=>t(label,cx[i]-130,191,260,52,37,ink,false,'center'));
   ['用一句話說明發現','用圖表或案例支持','移除不支持主張的內容'].forEach((label,i)=>t(label,cx[i]-195,557,390,48,27,ink,false,'center'));
   t('先讓標題說清楚，再讓圖像幫忙解釋',150,626,980,52,33,ink,false,'center');
  } else if(style==='scientific'){
   t('一頁一個主張，下面放證據',39,9,1200,58,42,ink,true);
   t('主題式標題',42,139,450,45,33,ink,true,'center');
   t('主張＋視覺證據',602,139,629,45,33,ink,true,'center');
   t('研究結果',107,249,255,38,27,ink,true,'center');
   t('用一句話說明主要發現',620,245,600,47,31,ink,true,'center');
   t('寫出主張 → 挑出證據 → 刪除雜訊',88,627,1100,62,39,'#FFFFFF',true,'center');
  } else {
   t('一頁',61,89,470,90,76,ink,true);
   t('一個主張',61,190,497,93,70,accent,true);
   const labels=[['01  寫主張','用一句話說明發現'],['02  挑證據','用圖表或案例支持'],['03  刪雜訊','移除不支持主張的內容']];
   labels.forEach(([head,body],i)=>{
    t(head,657,99+i*173,545,65,40,ink,true);
    t(body,658,166+i*173,540,54,29);
   });
   t('下面放證據',194,463,300,61,38,ink,true,'center');
   t('先讓標題說清楚，再讓圖像幫忙解釋',95,661,1100,41,29,ink,false,'center');
  }
 } else {
  if(style==='handdrawn')t('先讓聽眾看見重點',193,116,900,73,59,ink,true,'center');
  else if(style==='scientific')t('先讓聽眾看見重點',129,119,1050,93,62,ink,true,'center');
  else {
   t('先讓聽眾',62,145,630,104,68,ink,true);
   t('看見',62,276,535,129,94,ink,true);
   t('重點',62,422,535,142,112,accent,true);
  }
 }
 let narration;
 if(context==='research')narration='這項研究比較了一百一十位工程學生觀看不同投影片結構後的學習表現。主張—證據組在理解、錯誤概念與自評認知負荷上呈現較好的結果。這裡只摘要結果方向，不代表我們可以把效果量或結論推廣到所有研究場合。';
 else if(context==='teaching')narration='製作研究簡報可以先做三件事。第一，用一句話說清楚這一頁的主要發現。第二，找出能支持它的圖表、案例或原始證據。第三，刪掉不支援這個訊息的內容。圖像的作用是幫助理解，不是填滿空間。';
 else narration='聽眾第一次接觸你的研究，不知道哪裡最重要。先用一句話說清楚這頁的重點，再讓圖像把注意力帶到那裡。這二十秒，只留下你最希望他記住的一件事。';
 const note=[narration,`模式：${context}；風格：${style}。`,context==='pecha'?'20 秒講稿草案；未經真人計時試講。本頁是節奏樣張，不是完整 20×20 簡報。':'代表頁樣張，非完整報告。',context==='research'?paperURL:craftURL,'背景為內建 image_gen 生成，確切模型未公開；所有插畫均為示意，不作為研究數據。'].join('\n\n');
 s.speakerNotes.textFrame.setText(note);
 manifest.push({id,context,style,texts,narration,advance_seconds:context==='pecha'?20:null,source:context==='research'?paperURL:craftURL});
}
await(await PresentationFile.exportPptx(p)).save(path.join(out,'candidate.pptx'));
await fs.writeFile(path.join(out,'manifest.json'),JSON.stringify(manifest,null,2));
console.log('Built 9 slides with distinct composition; native table on slide 2.');
