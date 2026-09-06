# 多風格可編輯 PPT

[繁體中文](README.md) · [English](README.en.md)

**先了解受眾，再比較風格。AI 生成背景，文字保留為可獨立修改的 PowerPoint 物件。**

這是一個供 Codex 使用的獨立衍生 Skill：以 [codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) 的大綱、樣張與逐頁檢查流程為基礎，結合 [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) 的風格索引和提示詞模板。

## 實際範例

以下三頁使用相同內容，展示不同背景、配色和字體層級。圖片是**可編輯 PPTX 的渲染預覽**，文字沒有畫進 AI 背景。

### 臨床清晰

適合醫療提案、專業教育與研究分享。淺色留白、青綠點綴、玻璃材質。

![臨床清晰風格：研究分享的三個準備](examples/previews/clinical-calm-zh-TW.png)

### 柔和 3D

適合入門教學與概念說明。暖米色、鼠尾草綠、黏土質感。

![柔和 3D 風格：研究分享的三個準備](examples/previews/friendly-clay-zh-TW.png)

### 深色電影敘事

適合演講、願景與產品發表。深藍黑背景、青色光線、克制的高對比。

![深色電影敘事風格：研究分享的三個準備](examples/previews/cinematic-dark-zh-TW.png)

[下載六頁可編輯範例 PPTX（繁中＋英文）](examples/style-samples.pptx) · [查看無字背景](examples/backgrounds/) · [查看完整生圖提示詞](examples/prompts.json)

範例背景由 Codex 內建 `image_gen` 工具生成；該工具未公開確切模型名稱，因此不把這批圖片標示為已驗證的 GPT Image 2 輸出。Skill 支援 Image 2 的工作流程；需要精確模型時應使用可核實型號的後端。

## 能做什麼

- 依受眾、先備知識、目的、時間與內容密度規劃簡報。
- 保留 12 種上游 PPT 風格，新增 12 種簡報配方，連接 22 個 Image 2 模板索引。
- 每輪預設推薦三種、最多五種方向，用相同內容製作樣張比較。
- 確認樣張後，再製作整份簡報；已明確授權自選時可以直接完成。
- 將標題、內文、引用與頁碼保留為原生文字。背景可獨立替換。
- 保存設計規格、背景、提示詞與重建資料，方便後續修改及新增風格。

24 個方向代表 12 種原始參考＋12 種衍生配方，部分美學相近；目前展示三種實際範例，並非 24 套已完成的 PowerPoint 母片。

## 安裝

把以下提示詞交給 Codex：

```text
請從 https://github.com/bobyu89/codex-ppt-style-expanded
安裝 skills/codex-ppt-style-expanded 這個 Skill。
保留既有同名 Skill 的備份，不要覆寫我的自訂風格。
```

或下載本專案 ZIP，將 `skills/codex-ppt-style-expanded` 整個資料夾複製到你的 Codex skills 目錄。若只供單一專案使用，可放在該專案的 `.agents/skills/`。在新任務中呼叫 `$codex-ppt-style-expanded`。

## 開始使用

```text
請使用 $codex-ppt-style-expanded，根據這份文件製作 10 頁繁中簡報。
對象是剛入學的研究生，用於 15 分鐘教學。
先推薦三種風格，以同一份內容製作樣張讓我選。
背景用 Image 2，文字保留可編輯；等我選定後再完成整份。
```

```text
請使用 $codex-ppt-style-expanded，比較臨床清晰、柔和 3D、深色電影敘事。
主題是研究分享，所有候選使用相同內容。
我希望保留 A 的配色，也能討論加入 B 的插畫。
```

流程：**理解需求 → 規劃內容 → 收斂至五種以內 → 製作實際樣張 → 確認設計 → 逐頁製作與檢查**。

## 新增的 12 種配方

| ID | 風格 | 適合用途 |
|---|---|---|
| `clinical-calm` | 臨床清晰 | 醫療、專業教育 |
| `academic-editorial` | 學術期刊編輯 | 研究、論文、口試 |
| `friendly-clay` | 柔和黏土 3D | 入門教學、概念解說 |
| `japanese-paper` | 日系和紙 | 人文、品牌、溫暖敘事 |
| `premium-brand` | 精品典雅 | 正式提案、品牌形象 |
| `futuristic-light` | 明亮未來科技 | AI、平台、工程 |
| `cinematic-dark` | 深色電影敘事 | 演講、願景、發表 |
| `nature-science` | 自然科普 | 生態、環境、教育 |
| `ink-humanities` | 水墨人文 | 文化、歷史、藝術 |
| `architectural-space` | 建築空間 | 空間、城市、設計 |
| `documentary-photo` | 紀實攝影 | 公益、案例、社會議題 |
| `bold-poster` | 大字海報 | 活動、演講、核心訊息 |

配方在 [styles.json](skills/codex-ppt-style-expanded/references/styles.json)。可以新增自己的配色、材質、版型、受眾、`template_id` 與背景提示詞；詳見 [風格拓展指南](skills/codex-ppt-style-expanded/references/style-expansion.md)。

## 本機工具

風格搜尋只需要 Python：

```bash
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --list
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --query "醫療 教學" --limit 5
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --show friendly-clay
```

基本 PPTX 組裝器需要 `python-pptx`：

```bash
python -m pip install -r requirements.txt
python skills/codex-ppt-style-expanded/scripts/assemble_editable.py deck.json deck.pptx
```

支援文字、矩形、圖片與備註，資料格式見 [製作說明](skills/codex-ppt-style-expanded/references/production.md)。它不是完整圖表或自動排版引擎。範例 PPTX 使用 Codex 的 Artifact Tool 製作，原始碼和可攜內容資料在 [examples](examples/README.md)。

## 可編輯範圍與限制

- 原生文字可以修改；AI 背景內的物件仍是點陣圖。
- 圖表、表格與證據應使用原生物件或原始素材，不讓生圖模型捏造數據。
- 生圖需有可用工具；正式交付前需渲染 PPTX，檢查字型、溢出與對比。
- 範例已通過結構檢查、原生文字核對與逐頁渲染檢視；未在桌面 PowerPoint 或 Google Slides 中做跨應用測試。
- GitHub 圖片預覽不能直接編輯，請下載 PPTX。

## 來源與授權

感謝 [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) 與 [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2)。本專案是獨立衍生作品，並非上游官方版本。

本專案程式與文字採 [MIT License](LICENSE)。上游原始授權保留在 [licenses](skills/codex-ppt-style-expanded/licenses/)，版本與改寫範圍見 [SOURCES.md](skills/codex-ppt-style-expanded/SOURCES.md)。本專案生成的範例背景不屬於上游案例圖庫；未隨包分發上游案例圖片。
