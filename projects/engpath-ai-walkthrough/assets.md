# Asset Verification EngPath

## Trạng thái capture

Đã recapture toàn bộ asset mới vào `public/media/engpath-reset/` bằng script `src/tools/capture-engpath-reset.mjs`.

Teacher credential không login được trong quá trình kiểm chứng, nên bản video này không dùng teacher dashboard. Các proof được dùng đều là public/student flow hoặc màn AI thật từ web.

## Bảng verify

| Asset | Role | Module | Anchor chính | Kết quả | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| `01-landing-system.png` | Public | Landing | Headline + CTA + cards | Pass | Dùng hook/outro. |
| `02-student-grades.png` | Student | Grade select | Chọn lớp | Pass | Asset dự phòng, không dùng chính trong composition cuối. |
| `03-student-dashboard.png` | Student | Dashboard | Progress, XP, calendar | Pass | Cảnh 02. |
| `04-student-roadmap.png` | Student | Roadmap | Unit list + progress | Pass | Cảnh 03/outro. |
| `05-student-unit-overview.png` | Student | Unit overview | Skill cards | Pass | Cảnh 04. |
| `06-student-vocab.png` | Student | Vocabulary | Vocab table/card | Pass | Cảnh 05. |
| `07-student-grammar.png` | Student | Grammar | Exercise list | Pass | Cảnh 05. |
| `08-student-reading-listening.png` | Student | Reading/listening | Passage/task panel | Pass | Cảnh 05. |
| `09-student-writing.png` | Student | Writing | Essay + `AI Chấm bài` | Pass | Cảnh 06, cursor/ring đã khớp nút. |
| `10-student-ai-result.png` | Student | AI result | Rubric + score + feedback | Pass | Cảnh 07/outro, feedback thật. |
| `11-student-ai-chat.png` | Student | AI chat | Chat panel + answer | Pass | Cảnh 08, copy đã tránh panel. |
| `12-student-achievements.png` | Student | Achievements | XP, level, leaderboard | Pass | Cảnh 09. |

## Review sau encode

- Contact sheet giữa scene: pass.
- Contact sheet cuối scene: pass.
- Frame full-res trọng yếu `scene-06`, `scene-07`, `scene-08`: pass.
- Không phát hiện URL/credential lộ trong frame render.
