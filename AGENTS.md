# Repository Guidelines

Workspace phát triển CV, Portfolio công nghệ và chuẩn bị hồ sơ tuyển dụng tự do (Upwork) để thu hút khách hàng freelance.

## Cấu Trúc

```
docs/           # Tất cả tài liệu
├── agent/      # Agent rules, routing, current focus
├── profile/    # Bối cảnh creator, quyết định, upwork audit
└── web/        # CV, portfolio update rules, product audits

assets/         # Hình ảnh và ảnh đại diện chuyên nghiệp (profile/, screenshots/)
portfolio/      # Mã nguồn các website portfolio tĩnh
```

## Entry

1. `docs/agent/README.md`
2. `docs/agent/context-map.md`

## Task Routing

- Profile & Upwork: `docs/profile/creator-context.md`
- Website/CV: `docs/web/cv-update-rules.md`

## Source of Truth

- Creator/Upwork: `docs/profile/`
- Shared assets: `assets/`
- Portfolio code: `portfolio/`

## Rules

- Viết tiếng Việt, giữ English cho tech terms
- Không commit secrets
- Không nhúng liên kết mạng xã hội không liên quan (TikTok, YouTube giải trí, Facebook cá nhân) vào CV/Portfolio
