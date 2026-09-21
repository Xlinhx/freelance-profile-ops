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

| # | Tên Dự Án | GitHub Repo | Phạm Vi | Tech Stack Cốt Lõi | Tóm Tắt Vai Trò / Điểm Nhấn |
| :-: | :--- | :--- | :-: | :--- | :--- |
| **01** | **Cờ Nhơn Folk Game** | [`Xlinhx/co-nhon-folk-game`](https://github.com/Xlinhx/co-nhon-folk-game) | Private | React, Node.js, Redis, PostgreSQL, PayOS | Web game dân gian real-time, tải 300–500 CCU, thanh toán tự động, chống duplicate webhook. |
| **02** | **Dealer Wholesale Portal** | [`Xlinhx/dealer-portal`](https://github.com/Xlinhx/dealer-portal) | Private | Next.js, NestJS, PostgreSQL, Prisma, Docker | Cổng quản trị phân phối B2B, xử lý đơn hàng sỉ, tồn kho đa chi nhánh, đối soát công nợ. |
| **03** | **Sinotruk Parts Catalog** | [`Xlinhx/sinotruk-parts-catalog`](https://github.com/Xlinhx/sinotruk-parts-catalog) | Public | Next.js, PostgreSQL, PLpgSQL, Tailwind | Catalog CMS hơn 500 SKU phụ tùng xe tải, cơ chế proxy cache ảnh và watermark tự động. |
| **04** | **Payment Reconciliation Ops** | [`Xlinhx/payment-reconciliation-ops`](https://github.com/Xlinhx/payment-reconciliation-ops) | Public | Python, FastAPI, OCR, Pandas | Công cụ tự động đối soát giao dịch ngân hàng & chứng từ kế toán qua AI OCR. |
| **05** | **Anish TOEIC Lab** | [`Xlinhx/anish-toeic-lab`](https://github.com/Xlinhx/anish-toeic-lab) | Public | Gemini API, React, TypeScript | Ứng dụng luyện thi và chấm điểm IELTS/TOEIC tự động bằng mô hình AI đa phương thức. |
| **06** | **Sử Ký Classroom** | [`Xlinhx/su-ky-history-classroom`](https://github.com/Xlinhx/su-ky-history-classroom) | Private | React, Supabase, Tailwind, Framer Motion | Nền tảng lớp học tương tác môn Lịch sử với giao diện dòng thời gian trực quan. |
| **07** | **Engpath Learning** | [`Xlinhx/engpath-english-learning`](https://github.com/Xlinhx/engpath-english-learning) | Private | Next.js, TypeScript, PostgreSQL | Nền tảng học từ vựng và ngữ pháp tiếng Anh theo lộ trình cá nhân hoá. |
| **08** | **Văn Học AI Learning** | [`Xlinhx/van-hoc-ai-learning`](https://github.com/Xlinhx/van-hoc-ai-learning) | Private | React, Node.js, Gemini API | Trợ lý học tập và gợi ý phân tích tác phẩm văn học thông qua hỏi đáp AI. |
| **09** | **Zalo AI Ecommerce** | [`Xlinhx/zaloai-ecommerce`](https://github.com/Xlinhx/zaloai-ecommerce) | Private | Zalo Mini App, Node.js, MongoDB | Giải pháp thương mại điện tử tích hợp trợ lý AI trong hệ sinh thái Zalo. |
| **10** | **Nostime Boutique** | [`Xlinhx/nostime-watch-boutique`](https://github.com/Xlinhx/nostime-watch-boutique) | Private | Next.js, Tailwind CSS, Stripe | Website showcase và catalog đồng hồ cao cấp với giao diện thủ công số tối giản. |
| **11** | **POS Operations** | [`Xlinhx/pos-ops`](https://github.com/Xlinhx/pos-ops) | Private | React, Node.js, SQLite/PostgreSQL | Hệ thống quản lý điểm bán hàng nhẹ gọn phục vụ cửa hàng bán lẻ và F&B nhỏ. |
| **12** | **Agent Rules** | [`Xlinhx/agent-rules`](https://github.com/Xlinhx/agent-rules) | Public | Markdown, Agent Configs | Bộ quy chuẩn, system prompts và cấu hình vận hành dành cho AI agents. |
