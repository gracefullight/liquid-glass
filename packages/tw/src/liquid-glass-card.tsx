import {
  LiquidGlassFilters,
  useLiquidGlass,
} from "@gracefullight/liquid-glass";
import type React from "react";
import {
  type LiquidGlassCardSize,
  liquidGlassCard,
} from "./liquid-glass-card.styles";

export interface LiquidGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: LiquidGlassCardSize;
}

export const LiquidGlassCard: React.FC<LiquidGlassCardProps> = (props) => {
  const ctx = useLiquidGlass();
  const { children, className, style, size = "medium", ...rest } = props;

  return (
    <div
      className={liquidGlassCard({ size, className })}
      style={{
        borderRadius: ctx.radius,
        boxShadow: ctx.shadow,
        ...style,
      }}
      {...rest}
    >
      <LiquidGlassFilters />
      <div className="relative z-[2] w-full h-full text-slate-900 [text-shadow:0_1px_2px_rgba(255,255,255,0.2)] font-medium">
        {children}
      </div>
    </div>
  );
};
