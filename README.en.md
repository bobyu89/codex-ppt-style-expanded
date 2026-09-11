# SlideWeave

**Shape the story. Find the style. Keep the text editable.**

[繁體中文](README.md) · [English](README.en.md) · [Download editable examples](examples/cross-matrix/cross-matrix.pptx) · [Explore styles](#all-36-built-in-styles)

SlideWeave is a presentation skill for Codex. Start with a topic, documents or rough notes. Clarify the audience, develop the narrative and compare real samples, then build a PowerPoint with AI imagery and native editable text.

**36 styles · Editable text · draw.io diagrams · Research and teaching · PechaKucha**

![Handdrawn teaching sample](examples/cross-matrix/previews/teaching-handdrawn.png)

This is a render of an editable PowerPoint slide. The heading and captions are native text; the illustration is a separate background. The Chinese name, 圖敘簡報, reflects storytelling through visuals.

## Get started

**Install** by asking Codex:

```text
Install skills/codex-ppt-style-expanded from
https://github.com/bobyu89/codex-ppt-style-expanded.
Back up an existing installation and preserve my custom content.
```

**Then bring your topic or material:**

```text
Use $codex-ppt-style-expanded.
Create a 10-minute talk for new graduate students about how my research improves clinical work.
First propose the key message and structure, then compare three styles with actual samples.
Keep text editable and provide a .drawio source for the research workflow.
```

SlideWeave is the new display name. The invocation remains `$codex-ppt-style-expanded`; the repository URL and installation path remain compatible. You can also copy the skill folder from the repository ZIP into your Codex skills directory or a project's `.agents/skills/`.

## From material to presentation

| Stage | What you get |
|---|---|
| Understand the brief | Purpose, audience, duration, material and institutional context; known answers are reused |
| Develop the content | A central message, sections and representative content, with uncertainties marked |
| Compare visual samples | Three directions by default, at most five per round; compositions suited to each style |
| Build and review | AI backgrounds, native text and diagrams, checked for grounding and readability |
| Deliver and revise | PPTX, assets, prompts and rebuilding material; .drawio sources when diagrams are included |

Natural feedback works: “Keep A's handdrawn feel, but make the text more formal,” or “Use B's body slides with C's cover.”

## Adapt the talk to its setting

| Setting | Content emphasis |
|---|---|
| Research | Claims, evidence, sources and limitations; proposals do not invent results |
| Teaching | One concept at a time, with steps, comparisons and examples |
| PechaKucha | 20 slides × 20 seconds, totaling 6:40, with narration and rehearsal |
| Proposals and work updates | The problem, options and next action |

Context, pacing and style combine independently—for example, a handdrawn research story in PechaKucha format. [Presentation modes](skills/codex-ppt-style-expanded/references/presentation-modes.md)

<a id="all-27-built-in-styles"></a>

<a id="all-33-built-in-styles"></a>

## All 36 built-in styles

Compare all style covers below. Each entry includes its intended use, specification and exact ID.

These Traditional Chinese covers are **raster style references**, not 36 editable PowerPoint masters. Actual decks use backgrounds rebuilt for their content with native text added separately. Another 22 image-prompt templates support the workflow and are not counted as deck styles.

### Hand-drawn collection · 9 directions

Use our codes HW01–HW09 or the full ID. Covers below are newly generated raster references; they are not editable PPT renders or verified Image 2.5 benchmarks.

| | |
|---|---|
| **HW01 · Graphite research notebook**<br>![石墨研究筆記](examples/style-catalog/covers-zh-TW/graphite-research.png)<br>Research methods and observation<br>`graphite-research` | **HW02 · Colored-pencil journal**<br>![色鉛筆手帳](examples/style-catalog/covers-zh-TW/colored-pencil-journal.png)<br>Learning journals and reflection<br>`colored-pencil-journal` |
| **HW03 · Wax-crayon story**<br>![蠟筆故事](examples/style-catalog/covers-zh-TW/crayon-story.png)<br>Beginner teaching and stories<br>`crayon-story` | **HW04 · Chalk classroom**<br>![粉筆黑板](examples/style-catalog/covers-zh-TW/chalk-classroom.png)<br>Projected teaching and concepts<br>`chalk-classroom` |
| **HW05 · Fineliner editorial**<br>![鋼筆編輯插畫](examples/style-catalog/covers-zh-TW/fineliner-editorial.png)<br>Editorial topics and introductions<br>`fineliner-editorial` | **HW06 · Marker sketchnote**<br>![麥克筆視覺筆記](examples/style-catalog/covers-zh-TW/marker-sketchnote.png)<br>Workshops and synthesis<br>`marker-sketchnote` |
| **HW07 · Duotone risograph**<br>![雙色孔版印刷](examples/style-catalog/covers-zh-TW/risograph-duotone.png)<br>Cultural events and creative pitches<br>`risograph-duotone` | **HW08 · Hand-cut paper collage**<br>![手工剪紙拼貼](examples/style-catalog/covers-zh-TW/cut-paper-collage.png)<br>Storytelling, community and humanities<br>`cut-paper-collage` |
| **HW09 · Minimalist single-panel cartoon**<br>![極簡單格漫畫](examples/style-catalog/covers-zh-TW/single-panel-cartoon.png)<br>Talk openings, viewpoints and reflection<br>`single-panel-cartoon` |  |

Typography is a separate option: choose handwritten native headings with clear body text for any HW style. Example: “Use HW08 with editable handwritten headings and clear Traditional Chinese body text.”

[Hand-drawn guide](skills/codex-ppt-style-expanded/references/handdraw-styles.md) · [Image 2.5 workflow](skills/codex-ppt-style-expanded/references/image25-workflow.md)

### Geometric and bold · 4 styles

| | |
|---|---|
| **Bauhaus geometric**<br>![包浩斯幾何](examples/style-catalog/covers-zh-TW/bauhaus-geometric.png)<br>Design, innovation and concepts<br>`bauhaus-geometric` · [Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>[Inspiration](https://slidesgo.com/theme/bauhaus) | **Playful Memphis**<br>![孟菲斯活力](examples/style-catalog/covers-zh-TW/memphis-playful.png)<br>Workshops, education and events<br>`memphis-playful` · [Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>[Inspiration](https://slidesgo.com/theme/orange-memphis) |
| **Technical blueprint**<br>![工程藍圖](examples/style-catalog/covers-zh-TW/technical-blueprint.png)<br>Engineering, systems and technical planning<br>`technical-blueprint` · [Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>[Inspiration](https://www.slidescarnival.com/template/valentine-free-presentation-template/234) | **Neo-brutalist**<br>![新粗獷主義](examples/style-catalog/covers-zh-TW/neo-brutalist.png)<br>Product launches, creative pitches and opinion talks<br>`neo-brutalist` · [Spec](skills/codex-ppt-style-expanded/references/styles.json)<br>[Inspiration](https://slidesgo.com/brutalist) |


### Original directions · 11 styles

| | |
|---|---|
| **Clean professional**<br>![清爽專業](examples/style-catalog/covers-zh-TW/clean-professional.png)<br>Business reports and proposals<br>`ppt:清爽专业风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/清爽专业风.md) | **Creative magazine**<br>![創意雜誌](examples/style-catalog/covers-zh-TW/creative-magazine.png)<br>Creative talks and brand stories<br>`ppt:创意杂志风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/创意杂志风.md) |
| **E-ink magazine**<br>![電子墨水雜誌](examples/style-catalog/covers-zh-TW/e-ink-magazine.png)<br>Monochrome reading and editorial talks<br>`ppt:电子墨水杂志风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/电子墨水杂志风.md) | **Data dashboard**<br>![數據儀表板](examples/style-catalog/covers-zh-TW/data-dashboard.png)<br>Metrics, operations and comparisons<br>`ppt:数据仪表盘风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/数据仪表盘风.md) |
| **Retro flat illustration**<br>![復古扁平插畫](examples/style-catalog/covers-zh-TW/retro-flat-illustration.png)<br>Science communication and concepts<br>`ppt:复古扁平插画风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/复古扁平插画风.md) | **Handdrawn technical**<br>![手繪技術圖解](examples/style-catalog/covers-zh-TW/handdrawn-technical.png)<br>Technical concepts, processes and teaching<br>`ppt:手绘技术解释风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/手绘技术解释风.md) |
| **Handdrawn whiteboard**<br>![手繪白板](examples/style-catalog/covers-zh-TW/handdrawn-whiteboard.png)<br>Workshops, brainstorming and steps<br>`ppt:手绘白板风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/手绘白板风.md) | **Warm handmade**<br>![溫暖手工](examples/style-catalog/covers-zh-TW/warm-handmade.png)<br>Humanities, education and warm stories<br>`ppt:温暖手工风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/温暖手工风.md) |
| **Scientific defense**<br>![科學研究](examples/style-catalog/covers-zh-TW/scientific-defense.png)<br>Thesis defense and research talks<br>`ppt:科研答辩风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/科研答辩风.md) | **Consulting style**<br>![麥肯錫顧問風](examples/style-catalog/covers-zh-TW/mckinsey-style.png)<br>Strategy, decisions and business analysis<br>`ppt:麦肯锡风格` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/麦肯锡风格.md) |
| **Teaching courseware**<br>![教學課件](examples/style-catalog/covers-zh-TW/teaching-courseware.png)<br>Classes, training and structured lessons<br>`ppt:教学课件风` · [Spec](skills/codex-ppt-style-expanded/references/upstream-ppt/教学课件风.md) |  |


### Additional directions · 12 styles

| | |
|---|---|
| **Clinical calm**<br>![臨床清晰](examples/style-catalog/covers-zh-TW/clinical-calm.png)<br>Medical and professional education<br>`clinical-calm` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) | **Academic editorial**<br>![學術期刊編輯](examples/style-catalog/covers-zh-TW/academic-editorial.png)<br>Research and journal-style explanations<br>`academic-editorial` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) |
| **Friendly clay 3D**<br>![柔和黏土 3D](examples/style-catalog/covers-zh-TW/friendly-clay.png)<br>Introductory teaching and concepts<br>`friendly-clay` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) | **Japanese paper**<br>![日系和紙](examples/style-catalog/covers-zh-TW/japanese-paper.png)<br>Humanities and gentle narratives<br>`japanese-paper` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) |
| **Premium brand**<br>![精品典雅](examples/style-catalog/covers-zh-TW/premium-brand.png)<br>Brand and premium proposals<br>`premium-brand` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) | **Futuristic light**<br>![明亮未來科技](examples/style-catalog/covers-zh-TW/futuristic-light.png)<br>AI, engineering and platforms<br>`futuristic-light` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) |
| **Cinematic dark**<br>![深色電影敘事](examples/style-catalog/covers-zh-TW/cinematic-dark.png)<br>Keynotes and launches<br>`cinematic-dark` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) | **Nature science**<br>![自然科普](examples/style-catalog/covers-zh-TW/nature-science.png)<br>Ecology and science education<br>`nature-science` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) |
| **Ink humanities**<br>![水墨人文](examples/style-catalog/covers-zh-TW/ink-humanities.png)<br>Culture, history and art<br>`ink-humanities` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) | **Architectural space**<br>![建築空間](examples/style-catalog/covers-zh-TW/architectural-space.png)<br>Architecture and spatial design<br>`architectural-space` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) |
| **Documentary photography**<br>![紀實攝影](examples/style-catalog/covers-zh-TW/documentary-photo.png)<br>Social issues and illustrative cases<br>`documentary-photo` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) | **Bold poster**<br>![大字海報](examples/style-catalog/covers-zh-TW/bold-poster.png)<br>Events and key messages<br>`bold-poster` · [Spec](skills/codex-ppt-style-expanded/references/styles.json) |



[Full style index](skills/codex-ppt-style-expanded/references/style-catalog.json) · [Covers and prompts](examples/style-catalog/covers-zh-TW/) · [Extend the library](skills/codex-ppt-style-expanded/references/style-expansion.md)

## Image 2.5 workflow

The skill now separates style traits, reference roles and local-edit constraints. For APIs that expose model selection, Flare is a starting point for fast candidates and Sunburst for demanding edits. This is prompting adaptation, not weight fine-tuning. Built-in generation without returned model metadata remains marked unknown. [Model guide and official sources](skills/codex-ppt-style-expanded/references/image25-workflow.md).

## Nine cross-style examples

The shared topic is communicating research clearly. These are renders from the same editable deck, crossing three contexts with three styles.

| Context | Handdrawn | Scientific | Magazine |
|---|---|---|---|
| Research evidence | ![research handdrawn](examples/cross-matrix/previews/research-handdrawn.png) | ![research scientific](examples/cross-matrix/previews/research-scientific.png) | ![research magazine](examples/cross-matrix/previews/research-magazine.png) |
| Teaching | ![teaching handdrawn](examples/cross-matrix/previews/teaching-handdrawn.png) | ![teaching scientific](examples/cross-matrix/previews/teaching-scientific.png) | ![teaching magazine](examples/cross-matrix/previews/teaching-magazine.png) |
| 20-second talk sample | ![pecha handdrawn](examples/cross-matrix/previews/pecha-handdrawn.png) | ![pecha scientific](examples/cross-matrix/previews/pecha-scientific.png) | ![pecha magazine](examples/cross-matrix/previews/pecha-magazine.png) |

[Download the nine-slide PPTX](examples/cross-matrix/cross-matrix.pptx) · [Content, sources and rebuilding](examples/cross-matrix/README.md)

The research examples include a native evidence table. The final three slides each have a 20-second automatic advance; this comparison deck is not a complete PechaKucha.

## Built-in diagrams and conversation-first intake

Create research workflows, decisions, architecture and swimlanes with the bundled draw.io tools, keeping editable `.drawio` sources. Intake starts with the occasion and content before visual preferences, without a long initial questionnaire.

<details>
<summary>See the diagram example and workflow</summary>

![Intake to style samples](examples/flowchart/intake-flow.svg)

[Example and editable source](examples/flowchart/README.md) · [Diagram rules](skills/codex-ppt-style-expanded/references/flowcharts.md) · [Intake guide](skills/codex-ppt-style-expanded/references/conversation-intake.md)

The SVG is an independent preview from the same node model. Core XML/IR tools use Python; native draw.io image exports require its CLI. No desktop application or MCP registration is installed automatically.

</details>

## What stays editable?

| Deliverable | Editing scope |
|---|---|
| Native PPT text and tables | Edit directly in PowerPoint |
| AI backgrounds and catalog covers | Replaceable raster images; their individual objects are not editable |
| .drawio source | Edit nodes, labels and arrows in draw.io |
| Diagram image inside PPT | Edit through the source; request native shapes and connectors for PowerPoint-level editing |

Example backgrounds use built-in `image_gen`, whose exact model is not exposed; they are not claimed as verified GPT Image 2 output. Existing PPT examples passed structural and rendered-slide review, but not desktop PowerPoint/Google Slides compatibility testing or live timed rehearsal. The draw.io example passed structural validation, without native CLI rendering.

<details>
<summary>Development and advanced tools</summary>

```bash
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --list
python -X utf8 skills/codex-ppt-style-expanded/scripts/search_styles.py --show technical-blueprint
python skills/codex-ppt-style-expanded/vendor/drawio-skill/scripts/diagramctl.py doctor
```

[Basic assembler and format](skills/codex-ppt-style-expanded/references/production.md) · [Earlier examples](examples/README.md)

</details>

## Sources and licensing

SlideWeave is an independent derivative project that draws on:

| Project | Contribution |
|---|---|
| [codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | Visual directions, outlines, samples and slide review |
| [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | Style indexing and image-prompt resources |
| [drawio-skill](https://github.com/Agents365-ai/drawio-skill) | Editable diagram tools and references |
| [ppt-image-first](https://github.com/NyxTides/ppt-image-first) | Intake, content grounding and visual-feedback ideas |

Talk planning also draws on [conference-slide guidance](https://researcher.tw/articles/conference-talk-slide-craft/) and [PechaKucha](https://www.pechakucha.com/about).

Original material uses [MIT](LICENSE); bundled draw.io files retain MIT, and the adapted intake guide retains Apache-2.0 attribution and licensing. [Versions and adaptations](skills/codex-ppt-style-expanded/SOURCES.md) · [License files](skills/codex-ppt-style-expanded/licenses/)

Hand-drawn expansion references the numbered-discovery concept of [yang0/handraw-style](https://github.com/yang0/handraw-style). No explicit license was found when checked; its images, index, prompts and scripts are not redistributed. Our nine recipes and covers are independently authored.
