import {
  LiquidGlassButton,
  LiquidGlassCard,
} from "@gracefullight/liquid-glass-tailwind";

export default {
  title: "Liquid Glass/Card",
  component: LiquidGlassCard,
  tags: ["autodocs"],
};

export const Default = () => (
  <LiquidGlassCard>
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Liquid Glass Card</h2>
      <p className="mb-6">
        This card uses SVG filters and backdrop blur for a true iOS 26 “Liquid
        Glass” effect.
      </p>
      <LiquidGlassButton>Try Me</LiquidGlassButton>
    </div>
  </LiquidGlassCard>
);

export const CustomProps = () => (
  <LiquidGlassCard style={{ width: 400, maxWidth: "90vw" }}>
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Custom Liquid Glass Card</h2>
      <p className="mb-6">
        You can customize blur, tint, noise, radius, and shadow for a unique
        glass effect.
      </p>
      <LiquidGlassButton>Custom Button</LiquidGlassButton>
    </div>
  </LiquidGlassCard>
);
