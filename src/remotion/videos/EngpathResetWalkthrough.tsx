import React from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

type SceneId =
  | 'hook'
  | 'dashboard'
  | 'roadmap'
  | 'unit'
  | 'skills'
  | 'writing'
  | 'result'
  | 'chat'
  | 'achievements'
  | 'outro';

type Tone = 'system' | 'control' | 'progress' | 'skill' | 'ai' | 'celebrate';

type Region = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type EngpathResetScene = {
  id: SceneId;
  duration: number;
  eyebrow: string;
  title: string[];
  note: string;
  image: string;
  secondImage?: string;
  thirdImage?: string;
  tone: Tone;
};

export type EngpathResetProject = {
  fps: number;
  width: number;
  height: number;
  title: string;
  scenes: EngpathResetScene[];
};

type Props = {
  project: EngpathResetProject;
};

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const source = {
  width: 1080,
  height: 1920,
};

const toneVars: Record<Tone, React.CSSProperties> = {
  system: {
    '--epx-ink': 'oklch(24% 0.055 248)',
    '--epx-accent': 'oklch(61% 0.18 255)',
    '--epx-soft': 'oklch(92% 0.05 255)',
    '--epx-pop': 'oklch(73% 0.16 77)',
  } as React.CSSProperties,
  control: {
    '--epx-ink': 'oklch(23% 0.055 238)',
    '--epx-accent': 'oklch(58% 0.17 236)',
    '--epx-soft': 'oklch(92% 0.045 238)',
    '--epx-pop': 'oklch(70% 0.15 172)',
  } as React.CSSProperties,
  progress: {
    '--epx-ink': 'oklch(24% 0.06 164)',
    '--epx-accent': 'oklch(62% 0.16 156)',
    '--epx-soft': 'oklch(92% 0.05 156)',
    '--epx-pop': 'oklch(74% 0.14 82)',
  } as React.CSSProperties,
  skill: {
    '--epx-ink': 'oklch(24% 0.06 205)',
    '--epx-accent': 'oklch(64% 0.15 197)',
    '--epx-soft': 'oklch(92% 0.045 197)',
    '--epx-pop': 'oklch(71% 0.16 36)',
  } as React.CSSProperties,
  ai: {
    '--epx-ink': 'oklch(23% 0.06 55)',
    '--epx-accent': 'oklch(70% 0.17 69)',
    '--epx-soft': 'oklch(93% 0.055 76)',
    '--epx-pop': 'oklch(64% 0.17 23)',
  } as React.CSSProperties,
  celebrate: {
    '--epx-ink': 'oklch(24% 0.06 285)',
    '--epx-accent': 'oklch(62% 0.18 282)',
    '--epx-soft': 'oklch(93% 0.045 282)',
    '--epx-pop': 'oklch(71% 0.16 145)',
  } as React.CSSProperties,
};

const regions = {
  landingHero: {x: 0, y: 0, width: 1080, height: 1320},
  dashboardMain: {x: 160, y: 84, width: 880, height: 1230},
  roadmapList: {x: 250, y: 70, width: 790, height: 1290},
  unitCards: {x: 198, y: 74, width: 842, height: 1040},
  vocab: {x: 250, y: 80, width: 790, height: 820},
  grammar: {x: 250, y: 82, width: 790, height: 1320},
  reading: {x: 250, y: 82, width: 790, height: 1430},
  writing: {x: 250, y: 82, width: 560, height: 920},
  result: {x: 250, y: 82, width: 790, height: 1320},
  chat: {x: 540, y: 820, width: 500, height: 970},
  chatContext: {x: 250, y: 82, width: 790, height: 980},
  achievements: {x: 250, y: 70, width: 790, height: 1440},
};

type ScreenLayout = {
  left: number;
  top: number;
  width: number;
};

const screenLayouts = {
  hook: {left: 34, top: 112, width: 1010},
  dashboard: {left: 42, top: 104, width: 996},
  roadmap: {left: 64, top: 92, width: 948},
  unit: {left: 42, top: 104, width: 996},
  skillA: {left: 28, top: 132, width: 704},
  skillB: {left: 456, top: 210, width: 608},
  skillC: {left: 202, top: 610, width: 682},
  writing: {left: 78, top: 108, width: 900},
  result: {left: 44, top: 98, width: 990},
  chatContext: {left: 28, top: 128, width: 780},
  chat: {left: 470, top: 646, width: 594},
  achievements: {left: 78, top: 80, width: 914},
  outroLanding: {left: 26, top: 84, width: 720},
  outroRoadmap: {left: 584, top: 66, width: 474},
  outroResult: {left: 182, top: 428, width: 778},
};

const screenStyle = (layout: ScreenLayout): React.CSSProperties => ({
  left: layout.left,
  right: 'auto',
  top: layout.top,
});

const pointInScreen = (layout: ScreenLayout, region: Region, x: number, y: number) => {
  const scale = layout.width / region.width;
  return {
    x: layout.left + (x - region.x) * scale,
    y: layout.top + (y - region.y) * scale,
  };
};

const boxInScreen = (
  layout: ScreenLayout,
  region: Region,
  box: {x: number; y: number; width: number; height: number},
) => {
  const scale = layout.width / region.width;
  const origin = pointInScreen(layout, region, box.x, box.y);
  return {
    left: origin.x,
    top: origin.y,
    width: box.width * scale,
    height: box.height * scale,
  };
};

const ease = (value: number) => 1 - Math.pow(1 - value, 4);

const progress = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], clamp);

const eased = (frame: number, start: number, end: number) => ease(progress(frame, start, end));

const pop = (frame: number, fps: number, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: {damping: 20, stiffness: 130, mass: 0.8},
  });

const makeStarts = (scenes: EngpathResetScene[]) => {
  let cursor = 0;
  return scenes.map((scene) => {
    const from = cursor;
    cursor += scene.duration;
    return from;
  });
};

export const EngpathResetWalkthrough: React.FC<Props> = ({project}) => {
  const starts = makeStarts(project.scenes);

  return (
    <AbsoluteFill className="epx-root">
      {project.scenes.map((scene, index) => (
        <Sequence key={scene.id} from={starts[index]} durationInFrames={scene.duration}>
          <SceneShell scene={scene} index={index} total={project.scenes.length} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const SceneShell: React.FC<{
  scene: EngpathResetScene;
  index: number;
  total: number;
}> = ({scene, index, total}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = eased(frame, 0, 24);
  const wipe = eased(frame, 0, 18);
  const exit = eased(frame, scene.duration - 16, scene.duration - 1);

  return (
    <AbsoluteFill
      className={`epx-scene epx-scene-${scene.id}`}
      style={{
        ...toneVars[scene.tone],
        opacity: interpolate(exit, [0, 1], [1, 0.98], clamp),
      }}
    >
      <LearningBackdrop frame={frame} />
      <div
        className="epx-enter-wipe"
        style={{
          transform: `translateX(${interpolate(wipe, [0, 1], [-7, 118], clamp)}%) rotate(-8deg)`,
        }}
      />
      <SceneNumber index={index} total={total} progressValue={(index + frame / scene.duration) / total} />
      <CopyBlock scene={scene} frame={frame} fps={fps} />
      {scene.id === 'hook' ? <HookScene scene={scene} frame={frame} fps={fps} enter={enter} /> : null}
      {scene.id === 'dashboard' ? <DashboardScene scene={scene} frame={frame} fps={fps} /> : null}
      {scene.id === 'roadmap' ? <RoadmapScene scene={scene} frame={frame} /> : null}
      {scene.id === 'unit' ? <UnitScene scene={scene} frame={frame} fps={fps} /> : null}
      {scene.id === 'skills' ? <SkillsScene scene={scene} frame={frame} fps={fps} /> : null}
      {scene.id === 'writing' ? <WritingScene scene={scene} frame={frame} fps={fps} /> : null}
      {scene.id === 'result' ? <ResultScene scene={scene} frame={frame} fps={fps} /> : null}
      {scene.id === 'chat' ? <ChatScene scene={scene} frame={frame} fps={fps} /> : null}
      {scene.id === 'achievements' ? <AchievementsScene scene={scene} frame={frame} fps={fps} /> : null}
      {scene.id === 'outro' ? <OutroScene scene={scene} frame={frame} fps={fps} /> : null}
    </AbsoluteFill>
  );
};

const LearningBackdrop: React.FC<{frame: number}> = ({frame}) => {
  const sweep = interpolate(frame % 180, [0, 180], [-26, 126], clamp);
  return (
    <>
      <div className="epx-paper" />
      <div className="epx-dot-grid" />
      <div className="epx-ribbon epx-ribbon-a" />
      <div className="epx-ribbon epx-ribbon-b" />
      <div className="epx-soft-sweep" style={{transform: `translateX(${sweep}%) rotate(-18deg)`}} />
    </>
  );
};

const SceneNumber: React.FC<{index: number; total: number; progressValue: number}> = ({
  index,
  total,
  progressValue,
}) => (
  <div className="epx-topbar">
    <div className="epx-wordmark">EngPath</div>
    <div className="epx-progress">
      <i style={{transform: `scaleX(${progressValue})`}} />
    </div>
    <div className="epx-count">
      {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  </div>
);

const CopyBlock: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({
  scene,
  frame,
  fps,
}) => {
  const label = pop(frame, fps, 4);
  const note = eased(frame, 30, 50);

  return (
    <div className={`epx-copy epx-copy-${scene.id}`}>
      <div
        className="epx-eyebrow"
        style={{
          opacity: interpolate(label, [0, 0.25], [0, 1], clamp),
          transform: `translateY(${interpolate(label, [0, 1], [20, 0], clamp)}px)`,
        }}
      >
        {scene.eyebrow}
      </div>
      <h1>
        {scene.title.map((line, index) => {
          const lineIn = pop(frame, fps, 12 + index * 7);
          return (
            <span
              key={line}
              style={{
                opacity: interpolate(lineIn, [0, 0.3], [0, 1], clamp),
                transform: `translateY(${interpolate(lineIn, [0, 1], [34, 0], clamp)}px)`,
              }}
            >
              {line}
            </span>
          );
        })}
      </h1>
      {scene.note ? (
        <p style={{opacity: note, transform: `translateY(${interpolate(note, [0, 1], [18, 0], clamp)}px)`}}>
          {scene.note}
        </p>
      ) : null}
    </div>
  );
};

const ScreenCrop: React.FC<{
  image: string;
  region: Region;
  width: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({image, region, width, className, style}) => {
  const height = Math.round((region.height / region.width) * width);
  const scale = width / region.width;

  return (
    <div className={`epx-screen ${className ?? ''}`} style={{width, height, ...style}}>
      <Img
        src={staticFile(image)}
        style={{
          width: source.width * scale,
          height: source.height * scale,
          transform: `translate(${-region.x * scale}px, ${-region.y * scale}px)`,
        }}
      />
      <div className="epx-screen-shine" />
    </div>
  );
};

const Sticker: React.FC<{
  children: React.ReactNode;
  x: number;
  y: number;
  frame: number;
  delay: number;
  className?: string;
}> = ({children, x, y, frame, delay, className}) => {
  const t = eased(frame, delay, delay + 18);
  return (
    <div
      className={`epx-sticker ${className ?? ''}`}
      style={{
        left: x,
        top: y,
        opacity: t,
        transform: `translateY(${interpolate(t, [0, 1], [24, 0], clamp)}px) scale(${interpolate(
          t,
          [0, 1],
          [0.88, 1],
          clamp,
        )})`,
      }}
    >
      {children}
    </div>
  );
};

const SparkLine: React.FC<{
  frame: number;
  delay: number;
  path: string;
  className?: string;
}> = ({frame, delay, path, className}) => {
  const t = eased(frame, delay, delay + 30);
  return (
    <svg className={`epx-sparkline ${className ?? ''}`} viewBox="0 0 1080 1920">
      <path d={path} style={{strokeDashoffset: interpolate(t, [0, 1], [520, 0], clamp), opacity: t}} />
    </svg>
  );
};

const CursorTap: React.FC<{frame: number; x: number; y: number; delay: number}> = ({frame, x, y, delay}) => {
  const t = eased(frame, delay, delay + 22);
  const pulse = progress(frame, delay + 18, delay + 44);
  return (
    <div
      className="epx-cursor"
      style={{
        left: x,
        top: y,
        opacity: t,
        transform: `translate(${interpolate(t, [0, 1], [42, 0], clamp)}px, ${interpolate(
          t,
          [0, 1],
          [28, 0],
          clamp,
        )}px)`,
      }}
    >
      <div className="epx-pointer" />
      <div
        className="epx-ripple"
        style={{
          opacity: interpolate(pulse, [0, 0.2, 1], [0, 0.9, 0], clamp),
          transform: `scale(${interpolate(pulse, [0, 1], [0.4, 1.35], clamp)})`,
        }}
      />
    </div>
  );
};

const HookScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number; enter: number}> = ({
  scene,
  frame,
  fps,
  enter,
}) => {
  const hero = pop(frame, fps, 4);
  const layout = screenLayouts.hook;
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.landingHero}
        width={layout.width}
        className="epx-hook-board"
        style={{
          ...screenStyle(layout),
          opacity: interpolate(hero, [0, 0.25], [0, 1], clamp),
          transform: `translateX(${interpolate(hero, [0, 1], [110, 0], clamp)}px) rotate(${interpolate(
            hero,
            [0, 1],
            [3, -1],
            clamp,
          )}deg)`,
        }}
      />
      <div className="epx-loop-badge" style={{opacity: enter}}>
        <span>Lớp</span>
        <i />
        <span>Kỹ năng</span>
        <i />
        <span>AI</span>
      </div>
      <Sticker x={614} y={1260} frame={frame} delay={30}>
        5 khu học tập
      </Sticker>
      <Sticker x={756} y={1414} frame={frame} delay={42} className="epx-sticker-pop">
        AI feedback
      </Sticker>
    </>
  );
};

const DashboardScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({
  scene,
  frame,
  fps,
}) => {
  const board = pop(frame, fps, 5);
  const focus = eased(frame, 30, 58);
  const layout = screenLayouts.dashboard;
  const competency = boxInScreen(layout, regions.dashboardMain, {
    x: 286,
    y: 268,
    width: 508,
    height: 302,
  });
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.dashboardMain}
        width={layout.width}
        className="epx-dashboard-board"
        style={{
          ...screenStyle(layout),
          opacity: interpolate(board, [0, 0.25], [0, 1], clamp),
          transform: `translateY(${interpolate(board, [0, 1], [92, 0], clamp)}px)`,
        }}
      />
      <div
        className="epx-competency-focus"
        style={{
          left: competency.left,
          top: competency.top,
          width: competency.width,
          height: competency.height,
          opacity: focus,
          transform: `scale(${interpolate(focus, [0, 1], [0.82, 1], clamp)})`,
        }}
      />
      <Sticker x={214} y={666} frame={frame} delay={26}>
        dựa trên quá trình làm bài của học sinh
      </Sticker>
      <Sticker x={676} y={1012} frame={frame} delay={48} className="epx-sticker-green">
        số ngày đã học
      </Sticker>
    </>
  );
};

const RoadmapScene: React.FC<{scene: EngpathResetScene; frame: number}> = ({scene, frame}) => {
  const board = eased(frame, 4, 28);
  const thread = eased(frame, 28, 88);
  const layout = screenLayouts.roadmap;
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.roadmapList}
        width={layout.width}
        className="epx-roadmap-board"
        style={{
          ...screenStyle(layout),
          opacity: board,
          transform: `translateX(${interpolate(board, [0, 1], [130, 0], clamp)}px)`,
        }}
      />
      <svg className="epx-road-thread" viewBox="0 0 1080 1920">
        <path
          d="M806 210 C704 310 850 430 756 540 C666 644 838 762 748 888 C674 996 822 1130 734 1254"
          style={{strokeDashoffset: interpolate(thread, [0, 1], [980, 0], clamp), opacity: thread}}
        />
      </svg>
      <Sticker x={626} y={224} frame={frame} delay={24}>
        Unit 1
      </Sticker>
      <Sticker x={660} y={642} frame={frame} delay={48} className="epx-sticker-green">
        Unit 3
      </Sticker>
      <Sticker x={632} y={1070} frame={frame} delay={72}>
        Unit 6
      </Sticker>
    </>
  );
};

const UnitScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const board = pop(frame, fps, 4);
  const layout = screenLayouts.unit;
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.unitCards}
        width={layout.width}
        className="epx-unit-board"
        style={{
          ...screenStyle(layout),
          opacity: interpolate(board, [0, 0.24], [0, 1], clamp),
          transform: `translateY(${interpolate(board, [0, 1], [-74, 0], clamp)}px)`,
        }}
      />
      <SparkLine frame={frame} delay={24} path="M218 870 C316 760 432 780 510 870 C590 962 716 948 852 826" />
      <Sticker x={146} y={836} frame={frame} delay={18}>
        nền tảng
      </Sticker>
      <Sticker x={742} y={794} frame={frame} delay={46} className="epx-sticker-pop">
        đầu ra
      </Sticker>
      <div className="epx-zone-tabs">
        {['Từ vựng', 'Ngữ pháp', 'Đọc nghe', 'Nói viết', 'Luyện tập'].map((label, index) => (
          <span key={label} style={{opacity: eased(frame, 42 + index * 5, 58 + index * 5)}}>{label}</span>
        ))}
      </div>
    </>
  );
};

const SkillsScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const first = pop(frame, fps, 4);
  const second = pop(frame, fps, 30);
  const third = pop(frame, fps, 58);
  const firstLayout = screenLayouts.skillA;
  const secondLayout = screenLayouts.skillB;
  const thirdLayout = screenLayouts.skillC;
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.vocab}
        width={firstLayout.width}
        className="epx-skill-card epx-skill-a"
        style={{
          ...screenStyle(firstLayout),
          opacity: interpolate(first, [0, 0.2], [0, 1], clamp),
          transform: `translate(${interpolate(first, [0, 1], [-80, 0], clamp)}px, 0) rotate(-2deg)`,
        }}
      />
      {scene.secondImage ? (
        <ScreenCrop
          image={scene.secondImage}
          region={regions.grammar}
          width={secondLayout.width}
          className="epx-skill-card epx-skill-b"
          style={{
            ...screenStyle(secondLayout),
            opacity: interpolate(second, [0, 0.2], [0, 1], clamp),
            transform: `translate(${interpolate(second, [0, 1], [100, 0], clamp)}px, 0) rotate(2deg)`,
          }}
        />
      ) : null}
      {scene.thirdImage ? (
        <ScreenCrop
          image={scene.thirdImage}
          region={regions.reading}
          width={thirdLayout.width}
          className="epx-skill-card epx-skill-c"
          style={{
            ...screenStyle(thirdLayout),
            opacity: interpolate(third, [0, 0.2], [0, 1], clamp),
            transform: `translateY(${interpolate(third, [0, 1], [90, 0], clamp)}px) rotate(-1deg)`,
          }}
        />
      ) : null}
      <SparkLine frame={frame} delay={34} path="M222 532 C330 490 418 544 520 504 C654 450 730 554 850 496" className="epx-skill-line" />
      <Sticker x={90} y={470} frame={frame} delay={24}>
        vocab
      </Sticker>
      <Sticker x={754} y={628} frame={frame} delay={50} className="epx-sticker-green">
        grammar
      </Sticker>
      <Sticker x={646} y={1048} frame={frame} delay={76} className="epx-sticker-pop">
        reading
      </Sticker>
    </>
  );
};

const WritingScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const board = pop(frame, fps, 4);
  const focus = eased(frame, 38, 64);
  const layout = screenLayouts.writing;
  const cta = boxInScreen(layout, regions.writing, {x: 506, y: 743, width: 150, height: 46});
  const cursor = pointInScreen(layout, regions.writing, 586, 764);
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.writing}
        width={layout.width}
        className="epx-writing-board"
        style={{
          ...screenStyle(layout),
          opacity: interpolate(board, [0, 0.25], [0, 1], clamp),
          transform: `translateY(${interpolate(board, [0, 1], [70, 0], clamp)}px)`,
        }}
      />
      <div
        className="epx-cta-ring"
        style={{
          left: cta.left,
          top: cta.top,
          width: cta.width,
          height: cta.height,
          opacity: focus,
          transform: `scale(${interpolate(focus, [0, 1], [0.72, 1], clamp)})`,
        }}
      />
      <CursorTap frame={frame} x={cursor.x} y={cursor.y} delay={52} />
      <Sticker x={Math.min(cta.left + cta.width + 20, 710)} y={cta.top - 84} frame={frame} delay={42} className="epx-sticker-pop">
        AI chấm bài
      </Sticker>
    </>
  );
};

const ResultScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const board = pop(frame, fps, 4);
  const scan = eased(frame, 26, 44);
  const layout = screenLayouts.result;
  const scanBox = boxInScreen(layout, regions.result, {x: 692, y: 292, width: 276, height: 58});
  const scanTravel = interpolate(frame % 112, [0, 56, 112], [0, 500, 0], clamp);
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.result}
        width={layout.width}
        className="epx-result-board"
        style={{
          ...screenStyle(layout),
          opacity: interpolate(board, [0, 0.24], [0, 1], clamp),
          transform: `translateX(${interpolate(board, [0, 1], [86, 0], clamp)}px)`,
        }}
      />
      <div
        className="epx-rubric-scan"
        style={{
          left: scanBox.left,
          right: 'auto',
          top: scanBox.top,
          width: scanBox.width,
          height: scanBox.height,
          opacity: scan,
          transform: `translateY(${scanTravel}px)`,
        }}
      />
      <Sticker x={58} y={438} frame={frame} delay={34}>
        rubric thật
      </Sticker>
      <Sticker x={58} y={825} frame={frame} delay={64} className="epx-sticker-green">
        gợi ý sửa bài
      </Sticker>
    </>
  );
};

const ChatScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const context = pop(frame, fps, 4);
  const chat = pop(frame, fps, 26);
  const contextLayout = screenLayouts.chatContext;
  const chatLayout = screenLayouts.chat;
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.chatContext}
        width={contextLayout.width}
        className="epx-chat-context"
        style={{
          ...screenStyle(contextLayout),
          opacity: interpolate(context, [0, 0.25], [0, 0.92], clamp),
          transform: `translateX(${interpolate(context, [0, 1], [-90, 0], clamp)}px)`,
        }}
      />
      <ProgressChatBoard frame={frame} fps={fps} enter={chat} layout={chatLayout} />
      <SparkLine frame={frame} delay={42} path="M418 1032 C490 954 554 948 628 1002" className="epx-chat-line" />
      <Sticker x={648} y={606} frame={frame} delay={44} className="epx-sticker-pop">
        hỏi về tiến trình
      </Sticker>
    </>
  );
};

const ProgressChatBoard: React.FC<{
  frame: number;
  fps: number;
  enter: number;
  layout: ScreenLayout;
}> = ({frame, fps, enter, layout}) => {
  const question = pop(frame, fps, 40);
  const answer = pop(frame, fps, 58);
  const height = Math.round((regions.chat.height / regions.chat.width) * layout.width);

  return (
    <div
      className="epx-screen epx-chat-board epx-progress-chat"
      style={{
        ...screenStyle(layout),
        width: layout.width,
        height,
        opacity: interpolate(enter, [0, 0.24], [0, 1], clamp),
        transform: `translateY(${interpolate(enter, [0, 1], [120, 0], clamp)}px)`,
      }}
    >
      <div className="epx-progress-chat-head">
        <span>AI Gia Sư Cá Nhân</span>
        <i>×</i>
      </div>
      <div className="epx-progress-chat-body">
        <div className="epx-chat-row epx-chat-row-ai">
          <b>AI</b>
          <p>Xin chào! Tôi có thể xem tiến trình học và gợi ý bước tiếp theo cho bạn.</p>
        </div>
        <div
          className="epx-chat-row epx-chat-row-user"
          style={{
            opacity: interpolate(question, [0, 0.3], [0, 1], clamp),
            transform: `translateY(${interpolate(question, [0, 1], [34, 0], clamp)}px)`,
          }}
        >
          <p>Tuần này em đang học đến đâu?</p>
        </div>
        <div
          className="epx-chat-row epx-chat-row-ai epx-chat-row-progress"
          style={{
            opacity: interpolate(answer, [0, 0.3], [0, 1], clamp),
            transform: `translateY(${interpolate(answer, [0, 1], [38, 0], clamp)}px)`,
          }}
        >
          <b>AI</b>
          <p>
            Bạn đã học <strong>6/35 ngày gần đây</strong>. Lớp 11B5 đang <strong>33%</strong> hoàn
            thành. Nên ưu tiên <strong>Unit 3</strong> và luyện viết thêm một bài.
          </p>
          <div className="epx-chat-progress-meter">
            <span style={{width: `${interpolate(answer, [0, 1], [8, 63], clamp)}%`}} />
          </div>
          <small>Gợi ý hôm nay: 20 phút luyện viết + xem lại feedback AI.</small>
        </div>
      </div>
      <div className="epx-progress-chat-input">Hỏi về tiến trình học...</div>
    </div>
  );
};

const AchievementsScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({
  scene,
  frame,
  fps,
}) => {
  const board = pop(frame, fps, 4);
  const bar = eased(frame, 28, 90);
  const layout = screenLayouts.achievements;
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.achievements}
        width={layout.width}
        className="epx-achievement-board"
        style={{
          ...screenStyle(layout),
          opacity: interpolate(board, [0, 0.24], [0, 1], clamp),
          transform: `translateY(${interpolate(board, [0, 1], [84, 0], clamp)}px)`,
        }}
      />
      <div className="epx-level-loop">
        <b>Lv.112</b>
        <i style={{transform: `scaleX(${interpolate(bar, [0, 1], [0.12, 0.78], clamp)})`}} />
        <span>+XP flow</span>
      </div>
      <div className="epx-confetti">
        {Array.from({length: 12}).map((_, index) => {
          const t = eased(frame, 54 + index * 2, 84 + index * 2);
          return (
            <i
              key={index}
              style={{
                left: 150 + (index % 6) * 126,
                top: 450 + Math.floor(index / 6) * 180,
                opacity: interpolate(t, [0, 0.2, 1], [0, 1, 0.72], clamp),
                transform: `translateY(${interpolate(t, [0, 1], [90, -20], clamp)}px) rotate(${index * 24}deg)`,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

const OutroScene: React.FC<{scene: EngpathResetScene; frame: number; fps: number}> = ({scene, frame, fps}) => {
  const a = pop(frame, fps, 4);
  const b = pop(frame, fps, 18);
  const c = pop(frame, fps, 32);
  const landingLayout = screenLayouts.outroLanding;
  const roadmapLayout = screenLayouts.outroRoadmap;
  const resultLayout = screenLayouts.outroResult;
  return (
    <>
      <ScreenCrop
        image={scene.image}
        region={regions.landingHero}
        width={landingLayout.width}
        className="epx-outro-card epx-outro-a"
        style={{
          ...screenStyle(landingLayout),
          opacity: interpolate(a, [0, 0.24], [0, 1], clamp),
          transform: `rotate(-3deg) translateY(${interpolate(a, [0, 1], [80, 0], clamp)}px)`,
        }}
      />
      {scene.secondImage ? (
        <ScreenCrop
          image={scene.secondImage}
          region={regions.roadmapList}
          width={roadmapLayout.width}
          className="epx-outro-card epx-outro-b"
          style={{
            ...screenStyle(roadmapLayout),
            opacity: interpolate(b, [0, 0.24], [0, 1], clamp),
            transform: `rotate(2deg) translateY(${interpolate(b, [0, 1], [80, 0], clamp)}px)`,
          }}
        />
      ) : null}
      {scene.thirdImage ? (
        <ScreenCrop
          image={scene.thirdImage}
          region={regions.result}
          width={resultLayout.width}
          className="epx-outro-card epx-outro-c"
          style={{
            ...screenStyle(resultLayout),
            opacity: interpolate(c, [0, 0.24], [0, 1], clamp),
            transform: `rotate(-1deg) translateY(${interpolate(c, [0, 1], [80, 0], clamp)}px)`,
          }}
        />
      ) : null}
    </>
  );
};
