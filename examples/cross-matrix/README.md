# 交叉範例 / Cross-style examples

共同主題：如何把研究講清楚。以下為九頁比較稿，不是完整研究報告或完整 PechaKucha。
Shared topic: communicating research clearly. This is a comparison deck, not a complete research talk or PechaKucha.

| 情境 | 手繪技術圖解 | 科學研究 | 創意雜誌 |
|---|---|---|---|
| 研究：證據摘要 | ![research handdrawn](previews/research-handdrawn.png) | ![research scientific](previews/research-scientific.png) | ![research magazine](previews/research-magazine.png) |
| 教學：三步驟解說 | ![teaching handdrawn](previews/teaching-handdrawn.png) | ![teaching scientific](previews/teaching-scientific.png) | ![teaching magazine](previews/teaching-magazine.png) |
| PechaKucha：20 秒樣張 | ![pecha handdrawn](previews/pecha-handdrawn.png) | ![pecha scientific](previews/pecha-scientific.png) | ![pecha magazine](previews/pecha-magazine.png) |

[下載 / Download PPTX](cross-matrix.pptx)

- 1–3：研究證據摘要 / Research evidence summary.
- 4–6：教學三步驟 / Three-step teaching explanation.
- 7–9：20 秒節奏樣張 / 20-second pacing samples; automatic advance enabled, click advance disabled on these slides.
- 原生文字可編輯，第二頁有原生表格，九頁皆有講者備註。/ Editable native text, a native table on slide 2, speaker notes on all slides.
- 講稿是草案，尚未真人計時試講。/ Narration drafts have not been rehearsed against a timer.

## Evidence / 研究來源

[Garner & Alley (2013)](https://pure.psu.edu/en/publications/how-the-design-of-presentation-slides-affects-audience-comprehens/) studied 110 engineering students. These samples summarize directional findings only: better comprehension, fewer misconceptions and lower self-reported cognitive load for the assertion–evidence group. No effect sizes are supplied or invented. Illustrations are conceptual, not measured data.

研究模式亦參考 / Presentation principles: [研究簡報文章](https://researcher.tw/articles/conference-talk-slide-craft/).
PechaKucha format: [official 20×20 description](https://www.pechakucha.com/about).

## Rebuild / 重建

`build-matrix.mjs` requires the Codex Artifact Tool Node package (`@oai/artifact-tool`). It is not a standalone generic Node installation. The script reads the included backgrounds and writes a candidate to `.build/cross-matrix` by default, or `MATRIX_BUILD_DIR` when supplied.

```bash
node examples/cross-matrix/build-matrix.mjs
python examples/cross-matrix/set-timing.py .build/cross-matrix/candidate.pptx .build/cross-matrix/timed.pptx
```

The timing helper requires `lxml`. Finalize, render and visually review the result through the presentation workflow before distribution. `manifest.json` records slide content; `prompts.json` records image prompts and upstream style references. Fonts: DFKai-SB and Microsoft JhengHei; substitutions may change layout.

背景由內建 image_gen 生成，確切型號未公開。/ Backgrounds use built-in image_gen; the exact model is not exposed.
