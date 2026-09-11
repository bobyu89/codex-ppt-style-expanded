# 手繪與手寫風格

使用者想要手繪、手寫、筆記或特定媒材時讀本文件。六種新配方以 `HW01–HW06` 或完整 ID 查詢；這是 SlideWeave 自有編號，不對應外部畫廊的 001–261。

| 編號 | 風格 ID | 可見差異 | 適合內容 |
|---|---|---|---|
| HW01 | graphite-research | 石墨深淺、細排線、冷白紙 | 研究方法、觀察與結構 |
| HW02 | colored-pencil-journal | 紙紋露底、色鉛筆疊色、邊緣小註記 | 學習紀錄、生活與反思 |
| HW03 | crayon-story | 蠟筆斷筆、粗線、簡化造型 | 入門教學、親子與故事 |
| HW04 | chalk-classroom | 深綠底、粉筆顆粒、少量亮色 | 投影教學、概念推導 |
| HW05 | fineliner-editorial | 留白、鋼筆排線、單一專色 | 專題介紹、人文與觀點 |
| HW06 | marker-sketchnote | 麥克筆粗細、局部螢光重點、概念節點 | 工作坊、重點整理 |

## 區分插畫與字體

手繪感可以來自插畫、原生手寫字體或兩者。沿用使用者已選方向；沒有指定時，先用手繪插畫搭配清楚的繁中字體，不把字形扭曲當成手寫感。想要手寫字時，檢查本機繁中字體與實際字形，可試 DFKai-SB；缺字則選已安裝的替代字體並渲染核對。不下載或分發未確認授權的字體。

標題、正文、引用及正式圖解標籤仍用 PPT 原生文字。目錄封面的文字可以在圖內，但須標為 `generated-cover-reference`。封面好看不代表正文已具可讀性，正式樣張仍依分層契約製作。

## 組合與參考圖

以「媒材＋線條＋配色＋構圖＋文字層級」定義方向。例如 HW01 保留石墨線條，可改用空間剖面或對照構圖；不要所有方向都套暖黃紙、水彩小物與左文右圖。每輪推薦三種，最多五種；風格庫可持續增加。

先使用具體可見特徵，不假定模型認得某個編號或作者名稱。已有選定樣張時，可傳入單張參考並說清楚作用：只參考筆觸與色調，主體與版型依新頁內容重排。多張圖分別標註「風格」「構圖」「必須保留的原始素材」，不要把整張畫廊當單頁參考。沒有合法可用的參考圖，就用自有配方文字，不虛構檔案路徑。

繁中提示詞骨架：

> 用途：16:9 簡報無字背景。內容：{本頁主體與動作}。媒材與線條：{配方特徵}。配色：{色彩角色}。構圖：{本頁圖文位置與留白}。參考圖用途：{若有，限定可採用的風格特徵}。文字：不生成標題、正文、引用或正式流程標籤，這些另以 PPT 原生文字加入。

English prompt structure:

> Purpose: a text-free 16:9 slide background. Subject and action: {page content}. Medium and linework: {visible traits}. Palette roles: {colors}. Composition: {image placement and text-safe space}. Reference role: {style traits only, if supplied}. Text: leave headings, body copy, citations and formal diagram labels out of the image; they will be native PowerPoint text.

Image 2.5 的模型選擇與局部修改見 [image25-workflow.md](image25-workflow.md)。

## 來源邊界

參考 [yang0/handraw-style](https://github.com/yang0/handraw-style) 的編號選圖與雙語提示詞概念。2026-09-11 檢查時未發現明示授權；本套件不收錄其圖片、作者索引、能力表或程式。以上配方與封面由本專案另行創作，未宣稱測得各風格在 Image 2.5 的名稱觸發能力。
