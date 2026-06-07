# Workspace Sản Xuất Nội Dung Công Nghệ

Workspace để lập kế hoạch, sản xuất, render và tracking nội dung công nghệ phục vụ mục tiêu thu hút khách hàng freelance.

## Cấu Trúc Chính

- `context/`: lớp context rút gọn, chỉ dùng để định tuyến agent vào đúng tài liệu.
- `docs/videos/`: pipeline làm video, checklist QA, lỗi cấm lặp lại, thư viện hiệu ứng và reference chuyên sâu.
- `docs/profile/`: context các profile/nền tảng, audit, quyết định đã chốt và checklist cập nhật.
- `docs/website/`: CV, portfolio, product-site, landing page và tài liệu website public.
- `docs/content/`: chiến lược nội dung, pillar, angle và hướng phát triển topic.
- `docs/operations/`: automation, VPS, data, tooling và vận hành hệ thống.
- `projects/`: source of truth theo từng video hoặc từng tập trong series.
- `assets/`: shared screenshots, ảnh tạo mới, profile assets, raw footage, voice-over, music và font.
- `public/media/`: media theo từng project được đưa trực tiếp vào Remotion qua `staticFile()`.
- `renders/drafts/`: draft video/still review.
- `renders/finals/`: bản publish-ready.
- `data/`: dữ liệu có cấu trúc cho content database.
- `src/remotion/`: code video Remotion.
- `src/tools/`: script scaffold, sync context và automation hỗ trợ.
- `sites/`: source code website/app độc lập nếu thực sự tồn tại.

## Quy Tắc Tổ Chức

- `projects/<project-id>/` là nguồn sự thật chính cho một video: `brief`, `script`, `storyboard`, `motion`, `qa`, `assets`, `publish`, `handoff`.
- `content/` chỉ dành cho planning cấp hệ thống và reusable material dùng chung nhiều project.
- `renders/` là output sinh ra, không phải nơi giữ quyết định hay tài liệu quy trình.
- `public/media/<project-id>/` là input runtime của Remotion.
- `assets/` là shared/archive asset, không phải mặc định cho media runtime theo project.
- Chỉ tạo `sites/<site-id>/` khi có source code thật. Không để folder chỉ chứa dependency cache.

## Luồng Đọc Nhanh

1. Mở `context/README.md` để hiểu cách định tuyến.
2. Nếu làm video, mở `docs/videos/pipeline.md`.
3. Nếu cần reference sâu khi làm video, mở `docs/videos/reference.md`.
4. Nếu làm profile, mở `docs/profile/README.md`.
5. Nếu làm CV/portfolio/website, mở `docs/website/README.md`.
6. Nếu làm automation hoặc hệ thống, mở file tương ứng trong `docs/operations/`.

## Flow Làm Video

1. Thêm hoặc chọn ý tưởng trong `data/content-index.json`.
2. Tạo project mới bằng scaffold:

```powershell
npm.cmd run project:new -- --id=demo-002-education-ai --preset=education --title="Web app giáo dục AI"
```

3. Điền bộ source of truth trong `projects/<project-id>/`:
   - `project.json`
   - `brief.md`
   - `coverage-map.md`
   - `capture-map.md`
   - `assets.md`
   - `storyboard.md`
   - `motion.md`
   - `qa.md`
   - `script.md`
   - `publish.md`
   - `handoff.md`
   - `notes/`
4. Gom asset vào folder project hoặc `assets/`.
5. Render still review vào `renders/drafts/<project-id>/stills/`.
6. Render draft video vào `renders/drafts/<project-id>/video/`.
7. Review từng scene theo `docs/videos/qa-checklist.md` và `docs/videos/never-again.md`.
8. Render final vào `renders/finals/<project-id>/video/`.
9. Ghi link publish và metrics vào `data/content-index.json`.
10. Chạy sync context:

```powershell
powershell -ExecutionPolicy Bypass -File src/tools/sync-context.ps1
```

## Hard QA Video

Trước khi xem một draft là đạt, luôn rà:

- [docs/videos/pipeline.md](/P:/contentsocial/docs/videos/pipeline.md)
- [docs/videos/qa-checklist.md](/P:/contentsocial/docs/videos/qa-checklist.md)
- [docs/videos/never-again.md](/P:/contentsocial/docs/videos/never-again.md)
- [docs/videos/red-flags.md](/P:/contentsocial/docs/videos/red-flags.md)
- [docs/videos/reference/canvas-readability-hard-rules.md](/P:/contentsocial/docs/videos/reference/canvas-readability-hard-rules.md)

## Scaffold Project

- Template gốc: `projects/_template/`
- Preset domain: `projects/_presets/`
- Script bootstrap: `src/tools/new-video-project.mjs`

Preset hiện có:

- `education`
- `ecommerce-scale`
- `fnb-ops`

`project.json` là source of truth machine-readable tối thiểu cho agent và tool.

## Lệnh Remotion

- `npm.cmd install` cài dependencies.
- `npm.cmd run project:new -- --id=<project-id> --preset=<preset>` tạo project mới từ scaffold.
- `npm.cmd run dev` mở Remotion Studio.
- `npm.cmd run still:<project>` render frame preview của project tương ứng vào `renders/drafts/<project-id>/stills/` nếu script đã được khai báo.
- `npm.cmd run render:<project>` render draft video của project tương ứng vào `renders/drafts/<project-id>/video/`.
- `npm.cmd test` chạy TypeScript check.

Composition hiện tại gồm `VanhienWalkthrough`, `EngpathResetWalkthrough`, và `AICodingComparison2026`. Dữ liệu từng video nằm trong `src/remotion/data/`; hiệu ứng và layout nằm trong `src/remotion/videos/` và các file CSS tương ứng.

## Tài Liệu Quan Trọng

- `AGENTS.md`: rule làm việc cho agent/contributor.
- `context/README.md`: điểm vào nhanh cho agent và creator.
- `docs/videos/pipeline.md`: pipeline bắt buộc khi làm video mới.
- `docs/videos/reference.md`: bản đồ tham chiếu khi cần xử lý case khó.
- `docs/profile/README.md`: bản đồ tài liệu profile/nền tảng.
- `docs/website/README.md`: bản đồ tài liệu CV/portfolio/website.
- `docs/content/strategy.md`: trụ cột nội dung và cấu trúc video mặc định.
- `docs/operations/content-management.md`: tracking và kế hoạch web app.
- `docs/operations/automation-roadmap.md`: lộ trình tự động hóa và tích hợp MCP/API.
- `docs/operations/social-system-architecture.md`: kiến trúc web, OAuth, connector, agent layer và hướng SaaS.
- `docs/operations/vps-operating-mode.md`: mode vận hành VPS-first cho app, runner và asset working folder.
