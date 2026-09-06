# Multi-style Editable PPT

[繁體中文](README.md) · [English](README.en.md)

**Understand the audience, compare real samples, then build the deck. AI illustrations and native editable text form an integrated slide.**

An independent skill derived from [codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill), extended with the style index and prompt templates from [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2).

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

Includes 12 upstream references, [12 additional recipes](skills/codex-ppt-style-expanded/references/styles.json), and 22 Image 2 template entries. These are design directions, not 24 finished PowerPoint masters. The main gallery shows nine examples using three upstream styles.

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
