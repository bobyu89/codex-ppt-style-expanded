# Multi-style Editable PPT

[繁體中文](README.md) · [English](README.en.md)

**Understand the audience, compare real samples, then build the deck. AI illustrations and native editable text form an integrated slide.**

An independent skill derived from [codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill), extended with the style index and prompt templates from [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2).

## All 24 built-in styles

Browse the images, then give Codex a style name or the exact ID shown below. These are 12 upstream references plus 12 derived recipes. The additional 22 image-prompt templates are supporting resources, not additional PPT styles.

### 12 original styles

The following images are the upstream author's original visual references, linked from a pinned [codex-ppt-skill version](https://github.com/ningzimu/codex-ppt-skill/tree/f2ed80372f65bb05fe62dd07979b239a17ac065d). They illustrate style only; they are not this project's editable PPT renders. Reference text is retained in its original language.

| | |
|---|---|
| **Clean professional**<br>![Clean professional](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/clean-professional.png)<br>Business reports and proposals<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/清爽专业风.md)<br>`ppt:清爽专业风` | **Creative magazine**<br>![Creative magazine](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/creative-magazine.png)<br>Creative talks and brand stories<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/创意杂志风.md)<br>`ppt:创意杂志风` |
| **E-ink magazine**<br>![E-ink magazine](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/e-ink-magazine.png)<br>Monochrome reading and editorial talks<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/电子墨水杂志风.md)<br>`ppt:电子墨水杂志风` | **Data dashboard**<br>![Data dashboard](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/data-dashboard.png)<br>Metrics, operations and comparisons<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/数据仪表盘风.md)<br>`ppt:数据仪表盘风` |
| **Retro flat illustration**<br>![Retro flat illustration](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/retro-flat-illustration.png)<br>Science communication and concepts<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/复古扁平插画风.md)<br>`ppt:复古扁平插画风` | **Handdrawn technical**<br>![Handdrawn technical](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/handdrawn-technical.png)<br>Technical concepts, processes and teaching<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/手绘技术解释风.md)<br>`ppt:手绘技术解释风` |
| **Handdrawn whiteboard**<br>![Handdrawn whiteboard](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/handdrawn-whiteboard.png)<br>Workshops, brainstorming and steps<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/手绘白板风.md)<br>`ppt:手绘白板风` | **Warm handmade**<br>![Warm handmade](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/warm-handmade.png)<br>Humanities, education and warm stories<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/温暖手工风.md)<br>`ppt:温暖手工风` |
| **Scientific defense**<br>![Scientific defense](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/scientific-defense.png)<br>Thesis defense and research talks<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/科研答辩风.md)<br>`ppt:科研答辩风` | **Consulting style**<br>![Consulting style](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/mckinsey-style.png)<br>Strategy, decisions and business analysis<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/麦肯锡风格.md)<br>`ppt:麦肯锡风格` |
| **Party/government red**<br>![Party/government red](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/party-government-red.png)<br>Formal policy and institutional reports<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/党政红风格.md)<br>`ppt:党政红风格` | **Teaching courseware**<br>![Teaching courseware](https://raw.githubusercontent.com/ningzimu/codex-ppt-skill/f2ed80372f65bb05fe62dd07979b239a17ac065d/assets/style-previews/teaching-courseware.png)<br>Classes, training and structured lessons<br>Upstream reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/教学课件风.md)<br>`ppt:教学课件风` |

### 12 extended styles

Three images below are existing editable PPT renders; nine are newly generated visual references showing materials, palette and composition. Visual references are not finished slides or editable PowerPoint masters. Documentary-style imagery is illustrative, not evidence of real events.

| | |
|---|---|
| **Clinical calm**<br>![Clinical calm](examples/previews/clinical-calm-zh-TW.png)<br>Medical and professional education<br>Editable PPT preview · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`clinical-calm` | **Academic editorial**<br>![Academic editorial](examples/style-catalog/generated/academic-editorial.png)<br>Research and journal-style explanations<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`academic-editorial` |
| **Friendly clay 3D**<br>![Friendly clay 3D](examples/previews/friendly-clay-zh-TW.png)<br>Introductory teaching and concepts<br>Editable PPT preview · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`friendly-clay` | **Japanese paper**<br>![Japanese paper](examples/style-catalog/generated/japanese-paper.png)<br>Humanities and gentle narratives<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`japanese-paper` |
| **Premium brand**<br>![Premium brand](examples/style-catalog/generated/premium-brand.png)<br>Brand and premium proposals<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`premium-brand` | **Futuristic light**<br>![Futuristic light](examples/style-catalog/generated/futuristic-light.png)<br>AI, engineering and platforms<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`futuristic-light` |
| **Cinematic dark**<br>![Cinematic dark](examples/previews/cinematic-dark-zh-TW.png)<br>Keynotes and launches<br>Editable PPT preview · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`cinematic-dark` | **Nature science**<br>![Nature science](examples/style-catalog/generated/nature-science.png)<br>Ecology and science education<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`nature-science` |
| **Ink humanities**<br>![Ink humanities](examples/style-catalog/generated/ink-humanities.png)<br>Culture, history and art<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`ink-humanities` | **Architectural space**<br>![Architectural space](examples/style-catalog/generated/architectural-space.png)<br>Architecture and spatial design<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`architectural-space` |
| **Documentary photography**<br>![Documentary photography](examples/style-catalog/generated/documentary-photo.png)<br>Social issues and illustrative cases<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`documentary-photo` | **Bold poster**<br>![Bold poster](examples/style-catalog/generated/bold-poster.png)<br>Events and key messages<br>AI visual reference · [規格 / Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>`bold-poster` |

[Generation prompts](examples/style-catalog/prompts.json) · [Machine-readable style catalog](skills/codex-ppt-style-expanded/references/style-catalog.json) · [Editable examples for the three earlier recipes](examples/style-samples.pptx)

```text
Use $codex-ppt-style-expanded. Compare ppt:手绘技术解释风,
academic-editorial and ink-humanities for the same content.
Create editable samples first, then let me choose a direction.
```

## Nine cross-style examples

The shared topic is “Communicating research clearly.” Each context uses the same core content across three styles, with distinct compositions and typography. Slide content is in Traditional Chinese.

| Context | Handdrawn technical | Scientific defense | Creative magazine |
|---|---|---|---|
| Research: evidence summary | ![research handdrawn](examples/cross-matrix/previews/research-handdrawn.png) | ![research scientific](examples/cross-matrix/previews/research-scientific.png) | ![research magazine](examples/cross-matrix/previews/research-magazine.png) |
| Teaching: three steps | ![teaching handdrawn](examples/cross-matrix/previews/teaching-handdrawn.png) | ![teaching scientific](examples/cross-matrix/previews/teaching-scientific.png) | ![teaching magazine](examples/cross-matrix/previews/teaching-magazine.png) |
| PechaKucha: 20-second sample | ![pecha handdrawn](examples/cross-matrix/previews/pecha-handdrawn.png) | ![pecha scientific](examples/cross-matrix/previews/pecha-scientific.png) | ![pecha magazine](examples/cross-matrix/previews/pecha-magazine.png) |

[Download the editable nine-slide PPTX](examples/cross-matrix/cross-matrix.pptx) · [Example notes and rebuilding](examples/cross-matrix/README.md) · [Text-free backgrounds](examples/cross-matrix/backgrounds/) · [Generation prompts](examples/cross-matrix/prompts.json)

Slides 1–3 summarize research evidence; slides 4–6 explain a teaching concept; slides 7–9 demonstrate PechaKucha pacing with 20-second automatic advances. This comparison deck is not a complete 20×20 presentation.

## Workflow

1. Establish topic, audience, prior knowledge, purpose, duration, language and sources.
2. Choose context, pacing and visual style separately. A research talk can use handdrawn or editorial visuals.
3. Recommend three directions by default, never more than five per round; compare actual slides using the same content.
4. After selection, build the deck with native text, evidence tables where needed, and speaker notes.
5. Render and review readability, factual support, layout and timing.

Research mode draws on [these conference-talk principles](https://researcher.tw/articles/conference-talk-slide-craft/): a central message, assertions supported by evidence, time allocation and backup slides. The research examples summarize [Garner & Alley (2013)](https://pure.psu.edu/en/publications/how-the-design-of-presentation-slides-affects-audience-comprehens/) without inventing effect sizes. Slide 2 contains a native editable table. A complete PechaKucha uses [20 slides × 20 seconds](https://www.pechakucha.com/about) and needs rehearsal.

## Install and use

Ask Codex:

```text
Install skills/codex-ppt-style-expanded from
https://github.com/bobyu89/codex-ppt-style-expanded.
Back up any existing skill with the same name and preserve my custom styles.
```

Alternatively, copy `skills/codex-ppt-style-expanded` into your Codex skills directory or the project's `.agents/skills/` directory.

```text
Use $codex-ppt-style-expanded to create a 10-minute research talk
for new graduate students from the attached material.
Compare handdrawn technical, scientific defense and creative magazine styles.
Use Image 2 for backgrounds, keeping text and evidence tables editable.
Wait for my style selection before completing the deck.
```

```text
Use $codex-ppt-style-expanded for a research-story PechaKucha:
20 slides, 20 seconds each. Plan the story and narration first,
then compare three visual styles.
```

## Style expansion and tools

Includes 12 upstream references, [12 additional recipes](skills/codex-ppt-style-expanded/references/styles.json), and 22 Image 2 template entries. These are design directions, not 24 finished PowerPoint masters. The catalog above covers all 24 styles; the nine-slide comparison demonstrates three of them in practice.

- [Style expansion guide](skills/codex-ppt-style-expanded/references/style-expansion.md)
- [Research, teaching and PechaKucha rules](skills/codex-ppt-style-expanded/references/presentation-modes.md)
- [Basic assembler and data format](skills/codex-ppt-style-expanded/references/production.md)
- [Earlier background and palette experiments](examples/README.md)

```bash
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --list
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --query "medical teaching" --limit 5
```

## Editability and limitations

- Titles, explanations and citations are native editable text. Background illustrations remain raster images.
- AI visuals illustrate concepts; they do not replace measured evidence.
- Backgrounds were generated with the built-in `image_gen` tool, which does not expose its exact model. These examples are not claimed as verified GPT Image 2 outputs.
- PPTX structure, native text, table, timing and rendered slides were reviewed. Desktop PowerPoint/Google Slides compatibility and live timed rehearsal have not been tested.
- GitHub images are previews; download the PPTX to edit.

## Attribution and license

Code and text use the [MIT License](LICENSE). Upstream licenses are preserved in [licenses](skills/codex-ppt-style-expanded/licenses/); see [SOURCES.md](skills/codex-ppt-style-expanded/SOURCES.md) for versions and adaptations. Example backgrounds are newly generated; upstream gallery images are not bundled.
