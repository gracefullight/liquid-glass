import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

import {
  type LiquidGlassButtonSize,
  liquidGlassButton,
} from "./liquid-glass-button.styles";
import { LiquidGlassFilters } from "./liquid-glass-filters";
import { useLiquidGlass } from "./liquid-glass-provider";

export interface LiquidGlassButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: LiquidGlassButtonSize;
}

export const LiquidGlassButton: FC<LiquidGlassButtonProps> = (props) => {
  const ctx = useLiquidGlass();
  const { children, size = "medium", ...rest } = props;

  const buttonClasses = liquidGlassButton({ size });

  return (
    <button
      className={buttonClasses}
      style={{
        borderRadius: ctx.radius,
        boxShadow: ctx.shadow,
      }}
      {...rest}
    >
      <LiquidGlassFilters />

      <span className="relative z-[1] text-white font-bold">{children}</span>
    </button>
  );
};
