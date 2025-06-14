import type { FC } from "react";

import { useLiquidGlass } from "./liquid-glass-provider";

export interface LiquidGlassFiltersProps {
  innerShadowZIndex?: number;
  backdropFilterZIndex?: number;
}

export const LiquidGlassFilters: FC<LiquidGlassFiltersProps> = ({
  innerShadowZIndex = 0,
  backdropFilterZIndex = -1,
}) => {
  const ctx = useLiquidGlass();

  return (
    <>
      {/* Inner shadow and tint layer (::before equivalent) */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: innerShadowZIndex,
          borderRadius: "inherit",
          pointerEvents: "none",
          boxShadow: `inset ${ctx.shadowOffset} ${ctx.shadowOffset} ${ctx.shadowBlur} ${ctx.shadowSpread} ${ctx.shadowColor}`,
          backgroundColor: `rgba(${ctx.tintColor}, ${ctx.tintOpacity})`,
        }}
      />

      {/* Backdrop filter layer with SVG distortion (::after equivalent) */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: backdropFilterZIndex,
          borderRadius: "inherit",
          pointerEvents: "none",
          isolation: "isolate",
          backdropFilter: `blur(${ctx.frostBlur})`,
          WebkitBackdropFilter: `blur(${ctx.frostBlur})`,
          filter: "url(#liquid-glass-distortion)",
          WebkitFilter: "url(#liquid-glass-distortion)",
        }}
      />
    </>
  );
};
