import React from 'react';
import {Composition} from 'remotion';
import {EngpathResetWalkthrough} from './videos/EngpathResetWalkthrough';
import {VanhienWalkthrough} from './videos/VanhienWalkthrough';
import {AICodingComparison2026} from './videos/AICodingComparison2026';
import {GoogleIO2026Gemini35Flash} from './videos/GoogleIO2026Gemini35Flash';
import {engpathResetWalkthrough} from './data/engpath-reset-walkthrough';
import {vanhienWalkthrough} from './data/vanhien-walkthrough';
import {aiCodingComparison2026} from './data/ai-coding-comparison-2026';
import {googleIOVideoData} from './data/google-io-2026-gemini-3.5-flash';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VanhienWalkthrough"
        component={VanhienWalkthrough}
        durationInFrames={1170}
        fps={vanhienWalkthrough.fps}
        width={1080}
        height={1920}
        defaultProps={{
          project: vanhienWalkthrough,
        }}
      />
      <Composition
        id="EngpathResetWalkthrough"
        component={EngpathResetWalkthrough}
        durationInFrames={engpathResetWalkthrough.scenes.reduce(
          (total, scene) => total + scene.duration,
          0,
        )}
        fps={engpathResetWalkthrough.fps}
        width={engpathResetWalkthrough.width}
        height={engpathResetWalkthrough.height}
        defaultProps={{
          project: engpathResetWalkthrough,
        }}
      />
      <Composition
        id="AICodingComparison2026"
        component={AICodingComparison2026}
        durationInFrames={aiCodingComparison2026.scenes.reduce(
          (total, scene) => total + scene.duration,
          0,
        )}
        fps={aiCodingComparison2026.fps}
        width={aiCodingComparison2026.width}
        height={aiCodingComparison2026.height}
      />
      <Composition
        id="GoogleIO2026Gemini35Flash"
        component={GoogleIO2026Gemini35Flash}
        durationInFrames={googleIOVideoData.scenes.reduce(
          (total, scene) => total + scene.duration,
          0,
        )}
        fps={googleIOVideoData.fps}
        width={googleIOVideoData.width}
        height={googleIOVideoData.height}
      />
    </>
  );
};