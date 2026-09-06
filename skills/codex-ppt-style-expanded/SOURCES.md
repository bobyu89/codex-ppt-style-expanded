# 來源與改寫範圍

來源快照取得日期：2026-09-06。這是獨立衍生 Skill，不是兩個上游作者的官方版本。

| Source | Commit | Included |
|---|---|---|
| https://github.com/ningzimu/codex-ppt-skill | f2ed80372f65bb05fe62dd07979b239a17ac065d | references/ 選用 11 種原始風格；內容、大綱、樣張與 QA 的流程改寫 |
| https://github.com/freestylefly/awesome-gpt-image-2 | b477278bb2a36d4c59655eb0daa4ce48e8dbc4c4 | data/style-library.json 與 docs/templates.md |

MIT 原始授權全文保留於 licenses/。案例圖片未隨包分發；如要使用案例素材，仍須查閱其具體來源與使用條件。

本版新增：繁中主流程、16 種簡報配方、離線檢索、最多五種同內容樣張比較、無字背景與原生文字分層、基本 PPTX 組裝器及重建格式。

改寫差異：原版以整頁圖片為產物；本版以可編輯文字為預設。原版的全圖片與禁止文字疊加規則不沿用；多代理不列為製作必要條件。完整案例網站與 API 供應商程式未包含在本套件。

新增交叉樣張：研究、教學、PechaKucha 三情境 × 手繪技術圖解、科學研究、創意雜誌三風格。簡報模式參考 https://researcher.tw/articles/conference-talk-slide-craft/ 與 https://www.pechakucha.com/about；研究樣張資料來源為 Garner & Alley (2013), https://pure.psu.edu/en/publications/how-the-design-of-presentation-slides-affects-audience-comprehens/ 。上述文章與論文以摘要及引用使用，未複製全文。

目前套件選用 11 種上游風格與 16 種延伸配方。目錄的 27 張繁中封面為內建 image_gen 新生成的點陣參考圖，確切模型未公開；不是可編輯 PPT 渲染圖。新風格只參考以下公開展示的美學方向，未下載或分發其模板與圖片：

- 包浩斯幾何：https://slidesgo.com/theme/bauhaus
- 孟菲斯活力：https://slidesgo.com/theme/orange-memphis
- 工程藍圖：https://www.slidescarnival.com/template/valentine-free-presentation-template/234
- 新粗獷主義：https://slidesgo.com/brutalist

## 流程圖與訪談整合（2026-09-06）

| Source | Commit | Included / adaptation |
|---|---|---|
| https://github.com/Agents365-ai/drawio-skill | 65f5fa0505f43d8af104d00c6087cb02c8c0e2f3 | skills/drawio-skill 原檔置於 vendor/drawio-skill；MIT LICENSE 隨附，新增主流程整合規則 |
| https://github.com/NyxTides/ppt-image-first | 87a300a559a2a55097fab337241218c6557bfa23 | 參考 references/conversation_framework.md 與 templates/spec_lock_reference.md，改寫為 references/conversation-intake.md；Apache-2.0 全文在 licenses/ppt-image-first-APACHE-2.0.txt |

訪談修改內容：繁體中文、沿用已知答案、合併重複欄位、最多五種樣張、原生文字優先、流程圖問題，以及依既有授權繼續工作的規則。未沿用上游全頁圖片、禁止文字框、固定確認關卡、HTML 介面或多候選選圖程式。這是本專案修改版，不代表上游作者認可。

draw.io 原始工具完整內含，但未自動設定 MCP、連線服務或安裝桌面依賴。已驗證此整合的環境偵測及基本流程 XML 驗證；未聲稱全部上游功能均在本環境測試。SVG 範例由本專案程式依節點資料建立，非原生 draw.io 匯出。
