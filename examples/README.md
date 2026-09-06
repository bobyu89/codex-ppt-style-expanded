# 範例 / Examples

[繁體中文首頁](../README.md) · [English overview](../README.en.md)

`style-samples.pptx` contains six slides: clinical clarity, soft 3D clay and cinematic dark, first in Traditional Chinese and then in English. Each slide has one generated background and ten native text objects. All three styles use equivalent content and the same comparison layout.

範例共有六頁，前三頁繁中、後三頁英文。每頁是一張 AI 背景搭配十個原生文字物件。三種風格採相同內容及比較版型，方便查看配色與圖像材質差異。

- [Editable PPTX / 可編輯簡報](style-samples.pptx)
- [Rendered previews / 實際渲染預覽](previews/)
- [Text-free generated backgrounds / 無字生成背景](backgrounds/)
- [Prompts and backend record / 提示詞及後端紀錄](prompts.json)
- [Artifact Tool authoring source / 原始製作程式](build-examples.mjs)
- [Portable basic-assembler input / 基本組裝器資料](deck.json)

## Rebuild

In a Codex environment with `@oai/artifact-tool` available to Node.js:

```bash
node examples/build-examples.mjs
```

This writes a draft PPTX and six PNGs into `.build/`; it does not overwrite the published example. Use Microsoft JhengHei and Arial for the original typography, or replace them with installed fonts that support the target language. The published PPTX was separately finalized, imported and rendered for inspection.

For the basic Python assembler:

```bash
python -m pip install -r requirements.txt
python skills/codex-ppt-style-expanded/scripts/assemble_editable.py examples/deck.json .build/basic-samples.pptx
```

This alternative preserves independent text and image objects but uses a different layout engine; exact spacing may differ. Render and inspect the result before using it.

背景由內建 `image_gen` 生成，模型名稱未由工具公開。程式只加入原生文字，沒有把文字燒進背景。展示圖從正式 PPTX 重新匯入後渲染，不是另外製作的示意合成圖。背景與講述內容皆為本專案示範素材，沒有研究數據或真實個案。
