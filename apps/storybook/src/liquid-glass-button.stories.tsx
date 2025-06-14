import {
  LiquidGlassButton,
  type LiquidGlassButtonProps,
  LiquidGlassProvider,
} from "@gracefullight/liquid-glass-tailwind";

export default {
  title: "Liquid Glass/Button",
  component: LiquidGlassButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: [
        "xxSmall",
        "xSmall",
        "small",
        "medium",
        "large",
        "xLarge",
        "xxLarge",
      ],
      defaultValue: "medium",
    },
  },
};

export const Default = (args: LiquidGlassButtonProps) => {
  return <LiquidGlassButton size={args.size}>Default Button</LiquidGlassButton>;
};
Default.args = {
  size: "medium",
};

export const AllSizes = () => {
  const sizes = [
    "xxSmall",
    "xSmall",
    "small",
    "medium",
    "large",
    "xLarge",
    "xxLarge",
  ] as const;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      {sizes.map((size) => (
        <LiquidGlassButton key={size} size={size}>
          {size} Button
        </LiquidGlassButton>
      ))}
    </div>
  );
};

export const CustomTheme = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h3>Default Theme</h3>
        <LiquidGlassButton>Default</LiquidGlassButton>
      </div>

      <div>
        <h3>High Distortion</h3>
        <LiquidGlassProvider
          value={{
            noiseFrequency: 0.015,
            distortionStrength: 150,
            tintColor: "200, 150, 255",
            tintOpacity: 0.3,
          }}
        >
          <LiquidGlassButton>High Distortion</LiquidGlassButton>
        </LiquidGlassProvider>
      </div>

      <div>
        <h3>Low Blur</h3>
        <LiquidGlassProvider
          value={{
            frostBlur: "8px",
            shadowColor: "rgba(100, 200, 255, 0.8)",
            tintColor: "100, 200, 255",
          }}
        >
          <LiquidGlassButton>Low Blur</LiquidGlassButton>
        </LiquidGlassProvider>
      </div>

      <div>
        <h3>Sharp Glass</h3>
        <LiquidGlassProvider
          value={{
            noiseFrequency: 0.002,
            distortionStrength: 25,
            frostBlur: "1px",
            shadowBlur: "30px",
            tintOpacity: 0.2,
          }}
        >
          <LiquidGlassButton>Sharp Glass</LiquidGlassButton>
        </LiquidGlassProvider>
      </div>
    </div>
  );
};

export const CustomProps = (args: LiquidGlassButtonProps) => {
  return (
    <LiquidGlassButton size={args.size}>Custom Liquid Glass</LiquidGlassButton>
  );
};
CustomProps.args = {
  size: "medium",
};
