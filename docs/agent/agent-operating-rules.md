# Agent Operating Rules

## Trước Khi Làm Việc

- đọc `context/README.md`
- đọc `context/context-map.md`
- nếu task liên quan video, đọc `docs/videos/pipeline.md`
- nếu task liên quan dựng, sửa, render hoặc review video, đọc `docs/videos/qa-checklist.md` và `docs/videos/never-again.md`
- nếu task đang làm video EngPath, đọc `projects/engpath-ai-walkthrough/notes/review-2026-04-30.md`
- nếu là case mới hoặc domain lạ, đọc thêm `docs/videos/reference/case-mapping-framework.md`
- nếu task liên quan profile/nền tảng, đọc `docs/profile/README.md`
- nếu task liên quan CV/portfolio/website public, đọc `docs/website/README.md`
- nếu task liên quan automation/VPS/data/tooling, đọc file liên quan trong `docs/operations/`

## Cách Hiểu Repo

- `context/` là entry point ngắn, không phải nơi chứa workflow dài.
- `docs/videos/` là nơi chứa pipeline video, checklist, lỗi cấm lặp lại và reference motion.
- `docs/profile/` là nơi chứa context profile, platform role, audit và checklist cập nhật.
- `docs/website/` là nơi chứa CV, portfolio, product-site và website public.
- `docs/content/` là nơi chứa chiến lược nội dung tổng thể.
- `docs/operations/` là nơi chứa automation, VPS, data và vận hành hệ thống.
- `projects/` là source of truth theo từng video.
- `src/` là nơi chứa Remotion code, scripts và automation.

## Điều Agent Không Được Tự Giả Định

- không tự đổi bản chất sản phẩm
- không tự đổi audience hoặc buyer lens
- không tự dùng CTA bán dịch vụ nếu clip đang bán sản phẩm cho end-user
- không tự lộ URL, dữ liệu thật, tên khách hoặc KPI nhạy cảm
- không tự tạo fake social proof hoặc fake buyer-intent
- không bỏ qua lỗi review đã ghi trong `docs/videos/never-again.md`

## Điều Agent Nên Làm Mặc Định

- khóa `story spine`, `layout palette`, `motion family`, `aesthetic pack`, `proof style` trước khi dựng
- nếu gặp case chưa có preset, map nó theo `domain / buyer lens / hero proof / interaction type / visual pressure` trước
- kiểm tra project đã có đủ `brief.md`, `coverage-map.md`, `capture-map.md`, `assets.md`, `storyboard.md`, `motion.md`, `qa.md`, `script.md`, `publish.md`, `handoff.md` chưa
- nếu thiếu file source of truth thì tạo từ template trước
- luôn chạy still review ở hook, scene giữa, scene phức tạp nhất, scene kết
- luôn review full video sau render, xem từng scene và đoạn cuối của từng scene
- luôn chạy pass `never again` dựa trên `docs/videos/never-again.md` và `docs/videos/red-flags.md`
- với video dọc, luôn kiểm tra caption TikTok/Reels/Shorts có thể che hook hoặc CTA không

## Quy Tắc Handoff Giữa Nhiều Agent

Mỗi agent khi bàn giao phải ghi trong `handoff.md`:

- đã khóa gì
- đang nghi ngờ gì
- cần agent sau làm gì
- file nào là source of truth
- scene nào rủi ro nhất

## Quy Tắc Hỏi User

Chỉ hỏi khi thiếu:

- buyer
- pain business
- feature hero
- legal/privacy constraints
- aesthetic hard constraint

Các lựa chọn vi mô như easing, glow, shadow, layout con trong cùng palette thì agent tự quyết.
