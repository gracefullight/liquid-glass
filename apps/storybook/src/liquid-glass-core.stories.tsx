import type { FC } from "react";

import {
  LiquidGlassFilters,
  LiquidGlassProvider,
} from "@gracefullight/liquid-glass-tailwind";

export default {
  title: "Liquid Glass/Core Components",
  component: LiquidGlassFilters,
  tags: ["autodocs"],
  decorators: [
    (Story: FC) => (
      <LiquidGlassProvider>
        <Story />
      </LiquidGlassProvider>
    ),
  ],
};

export const BasicUsage = {
  render: () => (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        borderRadius: "12px",
        padding: "20px",
        color: "white",
        fontFamily: "system-ui",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px auto",
        boxShadow: "0px 6px 24px rgba(0,0,0,0.2)",
      }}
    >
      <LiquidGlassFilters />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
          Liquid Glass Effect
        </h2>
        <p style={{ margin: "8px 0 0 0", opacity: 0.9 }}>
          Pure React component
        </p>
      </div>
    </div>
  ),
};

export const CustomConfiguration = {
  render: () => (
    <LiquidGlassProvider
      value={{
        tintColor: "255,192,203",
        tintOpacity: 0.15,
        frostBlur: "8px",
        distortionStrength: 15,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "200px",
          borderRadius: "16px",
          padding: "20px",
          color: "white",
          fontFamily: "system-ui",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px auto",
          boxShadow: "0px 6px 24px rgba(0,0,0,0.2)",
        }}
      >
        <LiquidGlassFilters />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
            Custom Config
          </h2>
          <p style={{ margin: "8px 0 0 0", opacity: 0.9 }}>
            Pink tint & stronger blur
          </p>
        </div>
      </div>
    </LiquidGlassProvider>
  ),
};

export const MultipleElements = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "50px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "150px",
          borderRadius: "12px",
          padding: "16px",
          color: "white",
          fontFamily: "system-ui",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 6px 24px rgba(0,0,0,0.2)",
        }}
      >
        <LiquidGlassFilters />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h3 style={{ margin: 0, fontSize: "18px" }}>Card 1</h3>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "200px",
          height: "150px",
          borderRadius: "12px",
          padding: "16px",
          color: "white",
          fontFamily: "system-ui",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 6px 24px rgba(0,0,0,0.2)",
        }}
      >
        <LiquidGlassFilters />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h3 style={{ margin: 0, fontSize: "18px" }}>Card 2</h3>
        </div>
      </div>
    </div>
  ),
};
