# Audit Sản Phẩm: initforge

Ngày audit: 2026-04-18 Asia/Saigon.

Nguồn:

- GitHub profile: https://github.com/initforge
- CV portfolio: https://initforge-cv.pages.dev/
- Bản lưu local của CV: `assets/reference/initforge-cv/`

## Định Vị Public Hiện Tại

Luận điểm mạnh nhất hiện tại không còn là "có nhiều mini project", mà là "đã tự build, deploy và vận hành hệ thống production thật".

- Bio GitHub: Fullstack Developer tập trung vào React/Next.js, Node.js/NestJS, PostgreSQL, Docker và hệ thống chạy production.
- Headline CV: Fullstack Developer tại Đà Nẵng, Việt Nam.
- Proof chính: hai hệ thống production live, cộng thêm các project AI/admin nhỏ hơn.
- Định vị nên dùng: "Mình build web app chạy thật trong production, từ database đến deployment."

## Bằng Chứng Production Live

- `hienchina.com`: nền tảng quản lý nhập sỉ/lẻ, xử lý đơn hàng và thanh toán thật.
  - Bằng chứng mạnh: Next.js frontend, NestJS API, PostgreSQL, Prisma, Docker Compose, Nginx, GitHub Actions.
  - Góc nội dung: "Tách monolith lỗi deploy thành frontend/backend rõ ràng để hệ thống bán hàng chạy ổn định hơn."
- `conhonannhonbinhdinh.vn`: nền tảng real-time có thanh toán thật.
  - Bằng chứng mạnh: CV ghi 150-200+ concurrent users, GitHub README ghi peak 500+ concurrent connections, PayOS, PostgreSQL, Redis, WebSocket/SSE, row-level locking, idempotent webhook.
  - Góc nội dung: "Làm sao để không bán vượt số lượng khi nhiều người đặt cùng lúc."

## Bằng Chứng Mini Project Public

- `mini-ielts.score`: chấm IELTS bằng AI/Gemini API.
- `mini-reconcile`: OCR và đối soát giao dịch tự động.
- `mini-truck-cms`: product catalog CMS cho 500+ SKU, watermarking, proxy cache, PLpgSQL.
- `mini-student-management-AI`: quản lý học sinh có tính năng AI.
- Các project từng quan sát: `van-hien-ai-edu`, `mini-checkin`, `tourist-grade`, `recommendation-system`, `mini-math-ai-score`.

## Tín Hiệu Năng Lực

- Frontend: React, Vite, Next.js, TypeScript, Tailwind CSS, Zustand.
- Backend/data: Node.js, Express, NestJS, PostgreSQL, Prisma, Redis.
- DevOps: Docker, Docker Compose, Nginx, GitHub Actions, Cloudflare, VPS deployment.
- AI: Gemini API, OCR, multimodal grading, chatbot, recommendation system.
- Business workflow: giáo dục, ecommerce/catalog, đơn hàng, thanh toán, báo cáo, điểm danh, booking, đối soát.

## Góc Nội Dung Mạnh

- AI cho giáo dục: chấm bài, phản hồi, học đa phương thức, quản lý học sinh.
- Hệ thống nội bộ cho business: quản lý đơn, admin dashboard, catalog CMS, báo cáo.
- Câu chuyện reliability: lỗi deploy, race condition, duplicate payment webhook, job rollback.
- Giảm việc thủ công: OCR đối soát, xuất PDF/Excel, dashboard từ dữ liệu rời rạc.
- Tín nhiệm production: "không chỉ demo, mà có auth, database, deploy, log, admin workflow và xử lý lỗi thật."

## Gap Cần Xác Nhận

- Repo private nào được phép show bằng screenshot hoặc demo đã che dữ liệu?
- Hệ thống live nào được phép dùng trong content public mà không lộ dữ liệu khách hàng/business?
- Offer ưu tiên giai đoạn đầu là gì: AI giáo dục, dashboard business, internal tool ecommerce, hay automation/OCR?
- Project nào có demo public, project nào chỉ dùng làm private proof?
- TikTok nên giữ persona "Chủ Nô AI" hay chuyển gần hơn về "InitForge / Linh Developer" để tăng độ tin với khách hàng?
