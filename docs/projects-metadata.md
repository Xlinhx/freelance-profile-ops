# GitHub Projects & Metadata Registry

> **SỔ BỘ TRA CỨU DỰ ÁN & BẢN ĐỒ GITHUB REPOS (RELATIVE METADATA)**
> Tài liệu này chỉ lưu trữ **metadata tương đối** của các dự án để phục vụ bảo trì và phát triển Portfolio & CV.
> Chi tiết mã nguồn, commit history, cấu trúc và đặc tả kỹ thuật đầy đủ được lưu trực tiếp tại các repository thật trên GitHub.

---

## 1. Quy Trình Vận Hành Dành Cho AI / Developer

1. **Kiểm tra xác thực GitHub CLI trước khi làm việc:**
   ```bash
   gh auth status
   ```
   - **Nếu ĐÃ đăng nhập:** Tiếp tục công việc.
   - **Nếu CHƯA đăng nhập:** Phải dừng lại và thông báo ngay cho tác giả:
     > *"Vui lòng chạy `gh auth login` trên terminal để xác thực quyền truy cập GitHub CLI."*

2. **Cách tra cứu & đối chiếu mã nguồn khi cần maintain / develop:**
   - Xem thông tin repo hoặc README:
     ```bash
     gh repo view Xlinhx/<repo-name>
     ```
   - Kiểm tra mã nguồn, commit hoặc releases qua GitHub API:
     ```bash
     gh api repos/Xlinhx/<repo-name>
     gh api repos/Xlinhx/<repo-name>/commits
     ```
   - Clone tạm vào thư mục làm việc khi cần kiểm tra source code sâu:
     ```bash
     gh repo clone Xlinhx/<repo-name>
     ```

---

## 2. Bảng Ánh Xạ Metadata Tương Đối (Projects Index)

### A. 7 Dự Án Trọng Tâm Trên Portfolio (Active Showcases)
*Toàn bộ 7 dự án này đã có đầy đủ ảnh chụp thực tế full màn hình laptop (1440×900) & responsive mobile (390×844) định dạng .webp, tech stack chuẩn chỉ và mô tả chi tiết tại Portfolio.*

| # | Tên Dự Án | GitHub Repo | Phạm Vi | Tech Stack Cốt Lõi | Tóm Tắt Vai Trò / Điểm Nhấn |
| :-: | :--- | :--- | :-: | :--- | :--- |
| **01** | **FabSolution (Zalo AI Ecommerce)** | [`Xlinhx/zaloai-ecommerce`](https://github.com/Xlinhx/zaloai-ecommerce) | Private | React, TypeScript, Node.js, Redis, Docker, Cloudflare | Workspace AI gom hộp tin Zalo, quản lý đơn hàng, thực đơn, kịch bản chăm sóc khách tự động. |
| **02** | **Dealer Wholesale Portal** | [`Xlinhx/dealer-portal`](https://github.com/Xlinhx/dealer-portal) | Private | Next.js, TypeScript, NestJS, PostgreSQL, Docker | Cổng quản trị phân phối B2B, xử lý đơn hàng sỉ, giỏ hàng đại lý, kho hàng, đối soát công nợ. |
| **03** | **Nostime Boutique** | [`Xlinhx/nostime-watch-boutique`](https://github.com/Xlinhx/nostime-watch-boutique) | Private | Next.js, Tailwind CSS, TypeScript, PostgreSQL, Docker | Showcase và nền tảng phân phối đồng hồ cao cấp: quản trị sổ cái độc bản, tra cứu đơn hàng và storefront boutique sang trọng. |
| **04** | **Cổ Nhơn Folk Game** | [`Xlinhx/co-nhon-folk-game`](https://github.com/Xlinhx/co-nhon-folk-game) | Private | React, TypeScript, Node.js, Redis, PostgreSQL, PayOS, Docker | Web game dân gian real-time, tải 300–500 CCU, thanh toán tự động, chống duplicate webhook. |
| **05** | **EngPath English Learning** | [`Xlinhx/engpath-english-learning`](https://github.com/Xlinhx/engpath-english-learning) | Private | React, TypeScript, Hono, Cloudflare | Nền tảng học tiếng Anh THPT cá nhân hóa, AI chấm bài và theo dõi tiến độ học sinh. |
| **06** | **Sử Ký Classroom Game** | [`Xlinhx/su-ky-history-classroom`](https://github.com/Xlinhx/su-ky-history-classroom) | Private | React, Three.js, Cloudflare | Nền tảng lớp học tương tác môn Lịch sử dạng game room, AI sinh câu hỏi và tổng hợp kết quả. |
| **07** | **Văn Hiến Literature Learning** | [`Xlinhx/van-hoc-ai-learning`](https://github.com/Xlinhx/van-hoc-ai-learning) | Private | React, TypeScript, Cloudflare | Trợ lý học tập và gợi ý phân tích tác phẩm văn học thông qua hỏi đáp và nhập vai nhân vật AI. |

---

### B. Các Repository Dự Án Khác Trên GitHub (Kho Lưu Trữ / Công Cụ / Nghiên Cứu)
*Các dự án này phục vụ tra cứu mã nguồn, học thuật, hoặc không thuộc trọng tâm hiển thị công khai trên Portfolio.*

| # | Tên Dự Án | GitHub Repo | Phạm Vi | Tech Stack Cốt Lõi | Ghi Chú |
| :-: | :--- | :--- | :-: | :--- | :--- |
| **08** | **Sinotruk Parts Catalog** | [`Xlinhx/sinotruk-parts-catalog`](https://github.com/Xlinhx/sinotruk-parts-catalog) | Public | Next.js, PostgreSQL, Sharp, Docker | Catalog phụ tùng xe tải HOWO/SINOTRUK. |
| **09** | **Payment Reconciliation Ops** | [`Xlinhx/payment-reconciliation-ops`](https://github.com/Xlinhx/payment-reconciliation-ops) | Public | Python, FastAPI, Gemini OCR, Firebase | Đối soát hóa đơn và sao kê ngân hàng qua OCR. |
| **10** | **Anish TOEIC Lab** | [`Xlinhx/anish-toeic-lab`](https://github.com/Xlinhx/anish-toeic-lab) | Public | Gemini API, React, TypeScript | Chấm điểm IELTS/TOEIC tự động bằng AI. |
| **11** | **POS Operations** | [`Xlinhx/pos-ops`](https://github.com/Xlinhx/pos-ops) | Private | React, Node.js, SQLite/PostgreSQL | Quản lý điểm bán hàng nhẹ gọn cho F&B/bán lẻ. |
| **12** | **Agent Rules** | [`Xlinhx/agent-rules`](https://github.com/Xlinhx/agent-rules) | Public | Markdown, Agent Configs | Bộ quy chuẩn và cấu hình vận hành AI Agents. |

