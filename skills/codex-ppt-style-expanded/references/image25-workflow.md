# Image 2.5 提示詞與製作適配

查核日期：2026-09-11。這是提示詞與工作流程調整，不是訓練模型權重。官方模型頁標示 Flare 與 Sunburst 不支援 fine-tuning。

## 模型與工具分開記錄

| 用途 | 可指定 API 模型時的起點 |
|---|---|
| 日常背景、快速候選 | `gpt-image-2.5-flare` |
| 細節要求高、局部編修 | `gpt-image-2.5-sunburst` |

這是選擇起點，不是本專案測得的性能排名。使用者指定確切子型號時沿用；不要把 `gpt-image-2.5` 當成已驗證 API ID。內建工具若沒有模型欄位，不能靠提示詞指定模型，也不能從產品公告推定該次呼叫後端。記錄 `model_requested`、`model_actual`、`model_verified`；未公開就填 `unknown` 與 `false`。使用者要求必須驗證精確型號時，先取得支援的介面再執行，不默默替換。API 是可選路徑，不自動要求憑證或付費呼叫。

API 使用時將設定與提示詞分開。官方支援 `quality` 的 `auto/low/medium/high/xhigh/max`；16:9 可選 `2048x1152`。不要把這些參數傳給不支援它們的內建工具。先以既有品質設定比較，再一次只改一項；高品質標籤不保證每張都更好。

## 針對可編輯簡報的調整

1. 生圖前把正式文字留在 deck 資料中，提示詞只描述圖像敘事、媒材和文字安全區。
2. 用 [手繪配方](handdraw-styles.md) 的可見特徵描述風格；參考圖明確指定角色，不順帶複製原主體。
3. 已選風格後，重複線條、紙感與色彩角色，依頁面角色改構圖。把選定樣張用作風格錨點，不能保證像素不變。
4. 修改文字直接改原生文字；修改插畫才呼叫生圖，使用下列局部編修格式。

繁中局部編修：

> 修改：{只改哪個物件或區域}。保留：{主體身份、媒材、線條、配色及文字留白區}。其餘內容維持原樣，不新增標籤。參考圖是目前要修改的背景，不是另一個故事。

English local edit:

> Change: {one object or region}. Preserve: {subject identity, medium, linework, palette and text-safe area}. Keep the remaining content unchanged and add no labels. The input is the current background to edit.

## 驗證而非宣稱

保留舊背景作基準，以相同主題、參考、尺寸與品質，比較線條辨識、留白、繁中文字樣（僅目錄封面）、多頁一致性、局部修改是否波及其他區域。每張正式 PPT 另檢查原生文字與渲染。模型未核實的圖片可作風格參考，但不能列為 Flare／Sunburst 實測。舊案例保留原始模型標記，不回填為 2.5。

來源：[Image 2.5 提示詞指南](https://developers.openai.com/api/docs/guides/image-prompting)、[Flare](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare)、[Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst)。
