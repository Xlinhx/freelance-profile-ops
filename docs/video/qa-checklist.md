# QA Checklist — Video Walkthrough

## Pre-flight: Chạy TRƯỚC mỗi lần render full

### Per-scene checklist (10 điểm)

Mỗi scene phải pass **tất cả 10 điểm**. Fail 1 = không render.

| # | Kiểm tra | Cách verify |
|---|---------|-------------|
| 1 | **Overlap** | Tính toạ độ pixel: `Panel_B.top >= Panel_A.bottom + 40px` |
| 2 | **1/4 Rule** | Mọi panel hiển thị ≥ 270px width (1/4 của 1080) |
| 3 | **Safe zone** | Key text không rơi vào y > 1700 (caption band) |
| 4 | **Screenshot sống** | Data giàu, không trống, đúng role/tab |
| 5 | **Text readable** | Render still → headline đọc được rõ ràng trên background |
| 6 | **Transition khác** | Không trùng transition với scene trước đó |
| 7 | **Camera khác** | Không trùng zoomMode 3+ scene liên tiếp |
| 8 | **Intent rõ** | Technique/camera/transition/interaction/duration đều có lý do |
| 9 | **Typography stagger** | Label → headline → caption xuất hiện lần lượt, không cùng lúc |
| 10 | **Object không lấn** | Tooltip/Callout không đè lên text copy hoặc panel title |

### Quy trình verify

```
1. TypeScript compile → pass
2. Render still từng scene nhạy cảm:
   - Hook (frame 30)
   - Scene phức tạp nhất (frame giữa)
   - Results (frame giữa)
   - Outro (frame 30)
3. Chạy 10-point checklist cho mỗi still
4. Sửa nếu fail
5. Render full video
6. Xem full video 1 lần không tua
7. Ghi lại scene nào cần sửa
8. Sửa → render lại nếu cần
```

### Video-level checklist (5 điểm)

Sau khi render full, verify:

| # | Kiểm tra |
|---|---------|
| 1 | Tổng thời lượng hợp lý (30-60s cho TikTok/Reels) |
| 2 | Pacing nhịp nhàng — không có scene nào "chết" hoặc quá nhanh |
| 3 | Transitions mượt — không giật, không nhảy |
| 4 | Narrative flow — xem xong hiểu được sản phẩm làm gì |
| 5 | Không có artifact kỹ thuật (frame đen, flash trắng, glitch) |
| 6 | Color space = BT.709 (`yuv420p`, `color_range=tv`, `color_space=bt709`) |

### Red flags — fail tức thì

- Panel nào nhỏ hơn 270px width → fail
- 2 panel chồng nhau dù 1px → fail
- Text bị cắt nửa chữ → fail
- Screenshot trống data → fail
- Transition giống scene trước → fail (nếu đã có 2 liên tiếp)
- Background pan/trượt → fail (chỉ subtle zoom hoặc static)
- `pix_fmt=yuvj420p` hoặc `color_range=pc` → fail (phải re-render với --color-space bt709)
- Container layout vỡ sau refactor animation → fail (kiểm tra translateX(-50%) cho center)
