import type { VariantProps } from "tailwind-variants";

import { tv } from "tailwind-variants";

export const liquidGlassButton = tv({
  base: "isolate bg-transparent relative overflow-hidden border-none outline-none select-none flex items-center justify-center font-semibold transition-all duration-150 cursor-pointer",
  variants: {
    size: {
      xxSmall: "px-4 py-2 text-xs",
      xSmall: "px-5 py-2 text-sm",
      small: "px-6 py-2.5 text-base",
      medium: "px-7 py-3 text-base",
      large: "px-8 py-3.5 text-lg",
      xLarge: "px-10 py-4 text-xl",
      xxLarge: "px-12 py-5 text-2xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type LiquidGlassButtonSize = VariantProps<
  typeof liquidGlassButton
>["size"];
