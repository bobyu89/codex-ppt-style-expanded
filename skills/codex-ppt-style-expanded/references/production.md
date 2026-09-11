# 製作與驗收

## 環境與後端
先檢查內建生圖能力。API 模式只有在使用者指定或內建不可用時才考慮；憑證由安全環境配置，不写入套件、提示詞、輸出或對話。模型可指定時沿用使用者指定型號；Image 2.5 依 [image25-workflow.md](image25-workflow.md) 選擇 Flare／Sunburst，不可核實時記錄 unknown；不得用檔名或提示詞當模型證據。

圖片生成模型負責背景；PPT 原生引擎負責文字與資料元件。禁止先生成包含所有文案的整頁圖再蓋文字，這會留下重複內容且無法正常編輯。整頁圖片模式只在使用者明確選擇時啟用，以單張圖片置滿頁並標明不可獨立編輯。

## 最小可重建資料
使用 `python scripts/assemble_editable.py deck.json deck.pptx`。需要 `python-pptx`；使用環境現有套件，缺少時才在專案虛擬環境安裝。JSON 路徑相對於 JSON 所在資料夾。座標以頁面比例 0–1 表示，顏色六位 HEX。物件依陣列順序從後往前堆疊。

```json
{
  "width": 13.333333,
  "height": 7.5,
  "slides": [{
    "background": "backgrounds/slide_01.png",
    "background_color": "F7F5EF",
    "notes": "本頁講稿。",
    "elements": [
      {"type":"text", "text":"居家照護的三個重點", "box":[0.06,0.06,0.88,0.13], "size":36, "color":"183C36", "bold":true, "font":"Microsoft JhengHei"},
      {"type":"text", "text":"觀察日常變化\n記錄照護需求\n與專業團隊討論", "box":[0.06,0.27,0.52,0.55], "size":25, "color":"183C36"}
    ]
  }]
}
```

支援 type=text、rect、image。rect 使用 fill，可選 line；image 使用 path，圖片適配採等比例置中完整顯示。背景必須與頁面比例接近，比例不符拒絕組裝以免變形。文字支援 size、font、color、bold、align=left/center/right。

此腳本提供基礎組裝，不是完整排版系統：它檢查座標範圍、檔案存在與圖片比例，不會自動判定文字是否溢出。圖表/表格可用 python-pptx 或環境的簡報工具另寫原生元件並保存建置原始碼；不要宣稱本腳本已支援全部圖表。

## 設計記錄
`design-spec.json` 記錄 audience、purpose、selected_style、palette、fonts、layout_rules、reference_sources、approved_sample、backend_requested、backend_actual、model_verified，以及使用者的混搭/調整決定。逐頁記錄 source_refs、background_prompt、background_path、原生元素和 notes。生成工作狀態用 pending/generated/checked/needs_fix，出錯保留原因。

## 驗收
1. 用 python-pptx 或 OOXML 讀回 PPTX，逐頁核對原生文字與原始文案，核對頁數及備註。
2. 用 PowerPoint、LibreOffice 或環境可用簡報 renderer 將成品轉成逐頁圖，實際檢視所有頁面。渲染工具缺失時準確報告未驗證項目。
3. 檢查繁中字型、文字裁切、對比、重疊、圖像扭曲、標題層級和跨頁一致性。背景內不應留有標籤或假資料。
4. 對一張代表頁增加一行文字並重渲染，確認可正常編輯且版面容納；測試副本不取代正式內容。過長內容應改版或拆頁。
5. 交付 PPTX、背景、完整預覽與重建來源。說明背景仍是點陣圖，圖內物件不等同原生可編輯形狀。
