# Repository Guidelines

Content production workspace cho TikTok/Reels/Shorts thu hút khách freelance.

## Cấu Trúc

```
docs/           # Tất cả tài liệu
├── agent/      # Agent rules, routing, generated/
├── video/      # Pipeline, QA, reference
├── profile/    # Creator, platform, audits
├── web/        # CV, portfolio docs
├── ops/        # Automation, VPS
├── ideas/      # Backlog
├── research/   # Notes
├── reusable/   # Mock comments
└── strategy.md

data/           # JSON tracking
projects/       # Video projects (1 folder/video)
src/            # Remotion code + tools
assets/         # Shared media (profile/, screenshots/)
public/media/   # Remotion runtime assets
renders/        # Output (drafts/, finals/)
portfolio/      # Website source code
```

## Entry

1. `docs/agent/README.md`
2. `docs/agent/context-map.md`

## Task Routing

- Video: `docs/video/pipeline.md`
- Profile: `docs/profile/creator-context.md`
- Website: `docs/web/`
- Ops: `docs/ops/`

## Source of Truth

- Video project: `projects/<id>/`
- Creator/platform: `docs/profile/`
- Remotion media: `public/media/<id>/`
- Shared assets: `assets/`
- Renders: `renders/`
- Portfolio code: `portfolio/`

## Rules

- Viết tiếng Việt, giữ English cho tech terms
- Không commit secrets
- Follow `docs/video/pipeline.md` + `qa-checklist.md` + `never-again.md`
