# Motion Lock EngPath Reset

## Reset 2026-04-30

Bản EngPath cũ đã bị xóa khỏi Remotion và render folders. Không được reuse component, CSS, scene data, screenshot, still review hay script capture cũ.

## Tư duy mới

- Web thật là nhân vật chính.
- Motion chỉ tồn tại để chứng minh state, handoff, detail, proof hoặc outcome.
- Không thêm object giả nếu UI thật đã đủ nói.
- Không biến video thành catalog 19 màn.
- Không dùng lại vibe purple/glass/shimmer/neon của bản cũ.

## Story spine

`teacher control -> student learning path -> writing action -> AI feedback -> outcome`

Đây là role handoff, không phải feature dump.

## Aesthetic pack

Tên pack: `clean learning operating system`

- Nền: light/neutral, giữ web sáng và rõ.
- Teacher/control: blue accent, chắc, admin-like.
- Student/progress: green accent, nhẹ, học tập.
- AI payoff: amber/coral rất tiết chế, chỉ dùng khi AI trả kết quả.
- Không dùng dominant purple-blue gradient.
- Không dùng glass card lớn, orb, bokeh, fake code console.

## Layout palette

- Native Establishing Shot: mở role/module mới.
- Editorial Split: dùng cho teacher -> student handoff.
- Dock / Undock: soi detail nhưng vẫn giữ context.
- Timeline Rail: dùng cho learning path và skill progression.
- Reply Lift: chỉ dùng cho AI result/chat, bám vào content thật.
- Proof Cascade: dashboard, result, achievement.
- Shrink-to-System: outro, nếu cần chốt đây là một hệ thống.

## Motion grammar

- Mỗi scene chỉ có 1 motion chủ đạo.
- Connector/line phải neo vào object thật, nếu không neo được thì bỏ.
- Cursor/click chỉ dùng khi có thao tác thật hoặc state change rõ.
- Background screenshot đứng yên; không pan, không zoom nền để che lỗi framing.
- Overlay text không được cứu một screenshot yếu.
- Scene có nhiều text thật thì foreground chỉ được có 1 proof phụ tối đa.

## Scene count và timing

- Mục tiêu: 10-11 scene.
- Scene support: 3.5-4.5 giây.
- Scene hero Writing / AI result: 5-6 giây.
- Không dùng `playbackSpeed` cao để ép scene khó đọc.
- Nếu video dài, cắt/gom scene support thay vì tăng tốc.

## Hard bans

- Không fake flip card Vocab nếu UI đã có card thật.
- Không black pill/callout che nội dung thật.
- Không role rail/stat chip đè landing.
- Không mic ring, XP token, scan bar nếu nó sáng hơn proof thật.
- Không line xuyên qua title/card text.
- Không outro chồng proof rail lên UI progress.

## QA bắt buộc trước full render

- Render still đầu, giữa, cuối của từng scene.
- Render riêng 12 frame cuối của từng scene để bắt lỗi effect lệch/đè ở đoạn kết.
- Soi contact sheet theo cụm scene, nhưng không thay cho review từng ảnh.
- Xem full video 1 lần không tua sau khi render.
- Không sign-off nếu chỉ nhìn terminal pass.

