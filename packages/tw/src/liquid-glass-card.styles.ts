import type { VariantProps } from "tailwind-variants";

import { tv } from "tailwind-variants";

export const liquidGlassCard = tv({
  base: "bg-transparent relative overflow-hidden flex flex-col items-stretch transition-all duration-150",
  variants: {
    size: {
      small: "p-2 text-sm min-w-[10rem] min-h-[5rem]",
      medium: "p-4 text-base min-w-[16rem] min-h-[8rem]",
      large: "p-8 text-lg min-w-[24rem] min-h-[12rem]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type LiquidGlassCardSize = VariantProps<typeof liquidGlassCard>["size"];
