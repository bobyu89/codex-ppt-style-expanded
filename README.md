# 多風格可編輯 PPT

[繁體中文](README.md) · [English](README.en.md)

**先了解受眾與情境，再用實際樣張選風格。AI 圖像與原生文字共同構成投影片，文字可獨立修改。**

以 [codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) 的圖解、樣張與逐頁檢查流程為基礎，結合 [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) 的風格索引與提示詞。這是獨立衍生 Skill。

## 九張交叉範例

共同主題為「如何把研究講清楚」。同一情境的三張使用相同核心內容，但構圖、字體、圖像與文字的位置依風格重新設計。

| 情境 | 手繪技術圖解 | 科學研究 | 創意雜誌 |
|---|---|---|---|
| 研究：證據摘要 | ![research handdrawn](examples/cross-matrix/previews/research-handdrawn.png) | ![research scientific](examples/cross-matrix/previews/research-scientific.png) | ![research magazine](examples/cross-matrix/previews/research-magazine.png) |
| 教學：三步驟解說 | ![teaching handdrawn](examples/cross-matrix/previews/teaching-handdrawn.png) | ![teaching scientific](examples/cross-matrix/previews/teaching-scientific.png) | ![teaching magazine](examples/cross-matrix/previews/teaching-magazine.png) |
| PechaKucha：20 秒樣張 | ![pecha handdrawn](examples/cross-matrix/previews/pecha-handdrawn.png) | ![pecha scientific](examples/cross-matrix/previews/pecha-scientific.png) | ![pecha magazine](examples/cross-matrix/previews/pecha-magazine.png) |

[下載九頁可編輯 PPTX](examples/cross-matrix/cross-matrix.pptx) · [範例說明與重建方式](examples/cross-matrix/README.md) · [無字背景](examples/cross-matrix/backgrounds/) · [完整提示詞](examples/cross-matrix/prompts.json)

前三頁為研究證據摘要，中間三頁為教學解說，最後三頁為 PechaKucha 節奏樣張。最後三頁各設 20 秒自動換頁；九頁比較稿不是完整的 20×20 簡報。

## 使用流程

1. 了解主題、對象、先備知識、目的、時間、語言與來源。
2. 分別決定使用情境、講述節奏與視覺風格；研究簡報也能採用手繪或雜誌風格。
3. 每輪預設推薦三種、最多五種方向，以同一份內容製作實際樣張。
4. 選定方向後製作整份簡報，保留原生文字、必要的原生表格與講者備註。
5. 渲染並檢查可讀性、內容、來源、版面與時間設定。

研究模式參考[研究簡報文章](https://researcher.tw/articles/conference-talk-slide-craft/)，強調核心訊息、主張與證據、時間分配及附錄。範例研究結果來自 [Garner & Alley (2013)](https://pure.psu.edu/en/publications/how-the-design-of-presentation-slides-affects-audience-comprehens/)，只摘要結果方向，不捏造效果量；第二頁使用可編輯原生表格。完整 PechaKucha 依 [20 張 × 20 秒](https://www.pechakucha.com/about)製作，並需要試講。

## 安裝與使用

把以下提示詞交給 Codex：

```text
請從 https://github.com/bobyu89/codex-ppt-style-expanded
安裝 skills/codex-ppt-style-expanded。
保留既有同名 Skill 的備份，不要覆寫我的自訂風格。
```

也可下載 ZIP，把 `skills/codex-ppt-style-expanded` 複製至 Codex skills 目錄，或專案的 `.agents/skills/`。

```text
請使用 $codex-ppt-style-expanded，根據這份文件製作繁中研究簡報。
對象是剛入學的研究生，預計講 10 分鐘。
先用手繪技術圖解、科學研究、創意雜誌三種風格做樣張。
背景使用 Image 2，文字與證據表格保留可編輯。
等我選定風格後，再完成整份簡報。
```

```text
請使用 $codex-ppt-style-expanded，製作研究故事的 PechaKucha。
完整 20 頁，每頁 20 秒；先規劃故事與講稿，再比較三種風格。
```

## 風格拓展與工具

保留 12 種上游風格參考，另有 [12 種衍生配方](skills/codex-ppt-style-expanded/references/styles.json)及 22 個 Image 2 模板索引。這些是可組合的設計方向，並非 24 套完成的 PowerPoint 母片。目前主展示為上方三種原始風格的九張交叉範例。

- [風格拓展指南](skills/codex-ppt-style-expanded/references/style-expansion.md)
- [研究、教學與 PechaKucha 規則](skills/codex-ppt-style-expanded/references/presentation-modes.md)
- [基本組裝器與資料格式](skills/codex-ppt-style-expanded/references/production.md)
- [早期背景配色實驗](examples/README.md)

```bash
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --list
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --query "醫療 教學" --limit 5
```

## 可編輯範圍與限制

- PPT 標題、說明、引用可獨立修改；背景中的插畫仍是點陣圖。
- AI 圖像只作示意，不代替真實研究圖表與數據。
- 範例由內建 `image_gen` 生成背景；工具未公開確切型號，因此不標示為已驗證的 GPT Image 2 輸出。
- 已做 PPTX 結構、原生文字、表格、時間設定與逐頁渲染檢查；尚未做桌面 PowerPoint／Google Slides 相容性測試，講稿尚未真人計時試講。
- GitHub 圖片僅供預覽，編輯請下載 PPTX。

## 來源與授權

程式與文字採 [MIT License](LICENSE)。上游授權保留於 [licenses](skills/codex-ppt-style-expanded/licenses/)，版本與改寫範圍見 [SOURCES.md](skills/codex-ppt-style-expanded/SOURCES.md)。範例背景為新生成素材，未隨包分發上游案例圖片。
