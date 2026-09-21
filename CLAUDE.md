# Operating Guide — freelance-profile-ops

This workspace contains **Portfolio** and **Curriculum Vitae (CV)** showcases for Nguyễn Xuân Lĩnh (Xlinhx), backed by relative metadata pointing to production repositories on GitHub.

## Core Purpose
1. **Showcases:** Deliver high-fidelity Portfolio (`/`, `/studio/`) and CV (`/cv/`).
2. **Docs:** Store ONLY relative project metadata and GitHub pointers. Source code truth lives on GitHub (`https://github.com/Xlinhx`).

## Quick Start
- Check GitHub CLI authentication:
  ```bash
  gh auth status
  ```
- Run local server (Port 3000):
  ```bash
  npm run dev      # or: node tooling/serve.mjs
  ```
- Build for Cloudflare Pages (`dist/`):
  ```bash
  npm run build    # or: node tooling/build.mjs
  ```
- Deploy to Cloudflare Pages via CLI:
  ```bash
  npm run deploy
  ```
- URLs:
  - Craft Studio (Primary): `http://localhost:3000/` (or `/studio/`)
  - CV Gateway: `http://localhost:3000/cv/`
  - Shared Assets: `http://localhost:3000/shared/icons/react.svg`

## Repository Architecture
1. `docs/`: Relative project metadata (`projects-metadata.md`) and creator info (`creator-profile.md`).
2. `brand-system/`: Design guidelines, official logo marks (`marks/`), and designer mockups (`references/`).
3. `frontend-apps/`:
   - `shared/`: Single source of truth for all data (`projects-catalog.js`), icons (`shared/icons/`), identity, and project media.
   - `concept-craft-studio/`: Daylight studio portfolio (modular CSS & JS).
   - `concept-curriculum-vitae/`: Print/PDF A4 CV and interactive CV web.
4. `tooling/`: Build and development tools (`serve.mjs`, `build.mjs`).

## Non-Negotiable AI Rules
- **Relative Metadata Only:** Never bloat `docs/` with duplicated source code or business strategy. Ground truth source code lives on GitHub (`Xlinhx/<repo>`).
- **No Duplicate Data:** Always maintain showcase project data at `frontend-apps/shared/data/projects-catalog.js`.
- **Anti-God File:** Keep CSS and JS modular (submodules under `styles/` and `modules/`).
- **Zero Ghosting:** 100% vector typography (Be Vietnam Pro) over clean 3D scene canvas.
- **Zero Emoji:** 100% SVG vector icons.
- **Upwork Rate:** Fixed at $16/hr.
