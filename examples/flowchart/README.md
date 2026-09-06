# 需求流程範例 / Intake flow example

![從需求到風格樣張](intake-flow.svg)

[下載可編輯 draw.io 原始檔](intake-flow.drawio) · [重建程式](build-example.py)

節點、文字與箭頭可在 draw.io／diagrams.net 修改。SVG 是從相同節點資料獨立製作的預覽，不是 draw.io CLI 的匯出，也不是 PowerPoint 原生形狀。此例描述簡報設計流程，不是臨床決策指引。

Nodes, text and edges are editable in draw.io. The SVG is an independent preview built from the same model; it is not a draw.io CLI export or native PowerPoint shapes. This example is a presentation-design workflow, not clinical guidance.

```bash
python examples/flowchart/build-example.py
python skills/codex-ppt-style-expanded/vendor/drawio-skill/scripts/validate.py examples/flowchart/intake-flow.drawio --score
```
