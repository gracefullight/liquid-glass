import type { ReactNode } from "react";

import { createContext, useContext } from "react";

export interface LiquidGlassConfig {
  radius?: string;
  shadow?: string;
  shadowOffset?: string;
  shadowBlur?: string;
  shadowSpread?: string;
  shadowColor?: string;
  tintColor?: string;
  tintOpacity?: number;
  frostBlur?: string;
  noiseFrequency?: number;
  distortionStrength?: number;
  filterSeed?: number;
  filterNumOctaves?: number;
}

const defaultConfig: LiquidGlassConfig = {
  radius: "12px",
  shadow: "0px 6px 24px rgba(0,0,0,0.2)",
  shadowOffset: "0px",
  shadowBlur: "20px",
  shadowSpread: "-5px",
  shadowColor: "rgba(255,255,255,0.7)",
  tintColor: "255,255,255",
  tintOpacity: 0.04,
  frostBlur: "2px",
  noiseFrequency: 0.002,
  distortionStrength: 10,
  filterSeed: 92,
  filterNumOctaves: 2,
};

const LiquidGlassContext = createContext<LiquidGlassConfig>(defaultConfig);

export const LiquidGlassProvider = ({
  value,
  children,
}: { value?: Partial<LiquidGlassConfig>; children: ReactNode }) => {
  const merged = { ...defaultConfig, ...value };
  return (
    <LiquidGlassContext.Provider value={merged}>
      {children}
      {/* Global SVG filter definition */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute" }}
      >
        <title>Liquid Glass SVG Filters</title>
        <filter
          id="liquid-glass-distortion"
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={`${merged.noiseFrequency} ${merged.noiseFrequency}`}
            numOctaves={merged.filterNumOctaves}
            seed={merged.filterSeed}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap
            in2="blurred"
            in="SourceGraphic"
            scale={merged.distortionStrength}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </LiquidGlassContext.Provider>
  );
};

export const useLiquidGlass = () => useContext(LiquidGlassContext);
