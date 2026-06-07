# Capture Map EngPath

## Capture đã dùng

- Script: `src/tools/capture-engpath-reset.mjs`.
- Output: `public/media/engpath-reset/`.
- Viewport: 1080x1920, không browser chrome, không lộ URL/credential.
- Role teacher: chưa capture vì credential teacher thử nghiệm không login được. Bản video không dùng teacher dashboard.

## Asset đã capture

| File | Role | Màn / tab | Proof chính | Trạng thái |
| --- | --- | --- | --- | --- |
| `01-landing-system.png` | Public | Landing | Web app học tiếng Anh + AI | Done |
| `02-student-grades.png` | Student | Grade select | Chọn lớp | Done |
| `03-student-dashboard.png` | Student | Dashboard | Progress, XP, lịch học | Done |
| `04-student-roadmap.png` | Student | Roadmap | Lộ trình lớp 11 | Done |
| `05-student-unit-overview.png` | Student | Unit detail | Skill groups / bài học | Done |
| `06-student-vocab.png` | Student | Vocabulary | Vocab practice | Done |
| `07-student-grammar.png` | Student | Grammar | Grammar practice | Done |
| `08-student-reading-listening.png` | Student | Reading/listening | Reading/listening task | Done |
| `09-student-writing.png` | Student | Writing | Essay + nút `AI Chấm bài` | Done |
| `10-student-ai-result.png` | Student | AI result | Feedback/rubric/score thật | Done |
| `11-student-ai-chat.png` | Student | AI chat | Chat follow-up thật | Done |
| `12-student-achievements.png` | Student | Achievements | XP, level, leaderboard | Done |

## Interaction mô phỏng trong Remotion

- Writing: cursor + ripple bám đúng nút `AI Chấm bài`.
- AI result: reader line và sticker bám rubric/gợi ý, không che text chính.
- AI chat: panel chat dock lên từ feedback, copy đã giới hạn ở trái để không overlap.
- Achievements: progress/XP aggregation nhẹ, confetti có kiểm soát.

## Không capture / không show

- Không show màn debug, màn trống data hoặc URL.
- Không show teacher dashboard cho đến khi có credential teacher thật.
- Không dùng lại `public/media/engpath` cũ.
