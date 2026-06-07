# Mã Nguồn

## Hiện Có

- `remotion/` — composition video
- `tools/sync-context.ps1` — build snapshot vào `docs/agent/generated/`
- `tools/new-video-project.mjs` — bootstrap project mới

## Lệnh

- `npm run dev` — Remotion Studio
- `npm run render:<project>` — render draft
- `npm run still:<project>` — render still
- `npm run project:new -- --id=<id>` — tạo project

## Output

- Draft: `renders/drafts/<id>/`
- Final: `renders/finals/<id>/`

## Ranh Giới

- `src/remotion/` — code composition
- `projects/<id>/` — brief, script, storyboard, QA
- `public/media/<id>/` — Remotion runtime assets
- `renders/` — output only
