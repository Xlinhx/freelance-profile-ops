# Bộ Công Cụ Media

## Research

Dùng web research cho tool, pricing, API, trend, ví dụ competitor và các claim có thể thay đổi theo thời gian. Ưu tiên official docs, product page, báo cáo uy tín và nguồn primary. Lưu note quan trọng vào `content/research/` hoặc folder project.

Dùng Playwright để:

- Chụp screenshot demo local hoặc public page.
- Kiểm tra layout trước khi dùng screenshot trong video.
- Ghi proof rằng demo page hoạt động.

## Ưu Tiên Zero-Cost

Ưu tiên production miễn phí trước API trả phí:

- Project GitHub hiện có và demo local làm proof.
- Playwright screenshot và quay màn hình.
- ffmpeg và Remotion để render.
- Subtitle thủ công khi voice chưa ổn.
- Nhạc/SFX free có quyền sử dụng rõ ràng.

## TTS

Thứ tự khuyến nghị:

1. Giọng thật của creator để tăng trust và không tốn phí.
2. TTS free trong editor/browser như CapCut hoặc Edge-style read-aloud, test từng case theo chất lượng tiếng Việt và workflow export.
3. TTS local/free chỉ dùng nếu giọng tiếng Việt chấp nhận được.
4. API trả phí như OpenAI TTS, ElevenLabs hoặc Google Cloud Text-to-Speech chỉ dùng sau khi creator duyệt chi phí.

Quy trình voice-over:

1. Viết script nói final.
2. Tạo 2-3 mẫu voice.
3. Chọn một brand voice mặc định.
4. Export voice-over sạch vào `assets/audio/` hoặc folder project.
5. Căn subtitle và scene timing theo audio final.

Chỉ clone/nhái giọng khi có quyền rõ ràng. Không lấy TTS trả phí làm baseline workflow.

## Video Generation

Dùng Remotion cho template tái sử dụng, subtitle, motion graphics và batch render. Dùng ffmpeg cho preview nhanh, convert format, ghép audio và draft video nhẹ.

Mỗi video lưu draft render ở `renders/drafts/` và final output ở `renders/finals/`.

## Decision Gate

Không đi thẳng từ topic sang final video. Trước tiên phải có:

1. Tóm tắt research.
2. Target audience và pain point.
3. Góc nội dung đề xuất.
4. Hướng script.
5. Visual style.
6. Độ phức tạp production.

Chờ creator duyệt hướng trước khi sản xuất final render.
