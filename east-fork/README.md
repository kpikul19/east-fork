# East Fork Glaze Chooser

An interactive glaze visualizer built for [East Fork Pottery](https://www.eastfork.com). Select a glaze for each plate in a stacked set and see the combination rendered in real time.

**[Live demo →](https://glazechooser.netlify.app/)**

---

## What it does

East Fork sells pottery in 39 hand-named glazes — Harvest Moon, Night Swim, Char, and so on. Their site shows each glaze individually, but doesn't let you preview what a mixed set would look like together. This tool fills that gap: pick a glaze for the bottom, middle, and top plate, and see the stacked result instantly.

## Built with

- **React 18** — component state drives image selection
- **react-select** — custom-styled dropdown with East Fork's own brand fonts and arrow asset
- **CSS** — responsive layout (mobile-first, tablet breakpoint at 760px), entrance animation on the navbar, and a crossfade transition on glaze swaps


## Running locally

```bash
cd east-fork
npm install
npm start
```

---

*All pottery images and product information belong to [East Fork](https://www.eastfork.com). This is an unofficial fan project.*

*Built by [Kaitlin Pikul](https://www.kaitlinpikul.com)*