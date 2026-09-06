# 內建可編輯流程圖

本套件內含 Agents365-ai/drawio-skill 的固定版本，位於 `vendor/drawio-skill/`；安裝本 Skill 即包含這些檔案，不必另裝另一個 Skill。未自動註冊 MCP、安裝 draw.io 桌面程式或改動使用者設定。

## 何時使用

用於研究流程、收案篩選、操作步驟、系統架構、判斷分支或跨角色泳道圖。先抽取來源中的節點、連線、條件與責任角色，標示推論。AI 背景只作裝飾，流程節點與分支標籤不能烘焙在背景裡。

先讀 `vendor/drawio-skill/references/diagram-types.md` 與 `xml-authoring.md`。複雜圖再依其 SKILL.md 路由到 IR、自動配置或其他參考。本主 Skill 的可編輯性與既有授權優先；上游範例的輸出位置與確認步驟依本次任務調整。

## 製作與更新

1. 記錄流程邊界、起訖、每個判斷的結果、例外與返回路徑；不把時間先後誤畫成因果。
2. 建立 `.drawio`：使用穩定節點 ID、原生文字、形狀與連線。判斷用菱形，分支直接標明條件。小圖可 XML 編寫；大型圖使用上游 IR／配置工具。
3. 配色沿用已選的 27 種風格之一，但保持節點與箭頭清晰、足夠對比；手繪等裝飾不能破壞流程語義。
4. 驗證結構，再匯出並目視檢查截字、交叉線、箭頭方向與分支標籤。只有結構驗證時不得宣稱視覺已驗證。
5. 局部修改保留未改節點的位置及樣式。來源驅動的大圖可用 `diagramctl.py sync`；移除節點須遵循使用者實際修改要求。

以下命令從本 Skill 目錄執行，或改用腳本的絕對路徑：

```bash
python vendor/drawio-skill/scripts/diagramctl.py doctor
python vendor/drawio-skill/scripts/validate.py diagram.drawio --score
python vendor/drawio-skill/scripts/diagramctl.py build model.json --from ir -o diagram.drawio
```

`doctor` 不加 `--probe` 時不啟動 GUI。XML／IR 與結構驗證只需 Python；原生 PNG／SVG／PDF 匯出需要 draw.io CLI；Graphviz 為自動配置的可選依賴。Mermaid 轉原生 draw.io 需符合上游說明的 draw.io 版本，不能當成無依賴功能。

## 放進 PPT 的兩種層級

- **draw.io 可編輯**：交付 `.drawio`，將 SVG／PNG 視覺匯出置入 PPT；PPT 中是圖片，節點需回 draw.io 改。
- **PowerPoint 內可編輯**：以相同節點資料在目前簡報工具中建立原生形狀、文字框及連接線，同時保留 `.drawio`。逐一核對節點、文字、方向與判斷條件，不保證任意複雜圖能無損轉換。

若使用者要求 PPT 內修改流程，優先第二種。上游 `drawio2pptx.py` 是先匯出 PNG 再放入 PPT，**不是原生節點轉換器**，不得宣稱它產生可獨立編輯的流程節點。

缺少 draw.io CLI 時仍可生成與驗證 `.drawio`，交付明確標示驗證程度的原始檔；不要偷偷上傳私有內容到線上服務。可依使用者需求提供本機原生圖解預覽，並說明是否由 draw.io 實際匯出。

交付記錄包含原始檔、資料來源、節點與條件摘要、預覽來源、驗證結果、PPT 中的可編輯層級。
