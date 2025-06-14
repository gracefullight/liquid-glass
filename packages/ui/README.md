# @gracefullight/liquid-glass

A React component library providing liquid glass UI effects.

## Installation

```bash
npm install @gracefullight/liquid-glass
# or
pnpm add @gracefullight/liquid-glass
# or
yarn add @gracefullight/liquid-glass
```

## Usage

### Basic Setup

Wrap your app with `LiquidGlassProvider`:

```tsx
import { LiquidGlassProvider } from "@gracefullight/liquid-glass";

function App() {
  return (
    <LiquidGlassProvider>
      {/* Your app content */}
    </LiquidGlassProvider>
  );
}
```

### Apply Liquid Glass Effect

Add `LiquidGlassFilters` as a child to any element you want to apply the effect to:

```tsx
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";

function MyComponent() {
  return (
    <div style={{ position: 'relative', /* other styles */ }}>
      <LiquidGlassFilters />
      {/* Your content */}
    </div>
  );
}
```

### Custom Configuration

You can customize the glass effect by passing configuration to the provider:

```tsx
import { LiquidGlassProvider } from "@gracefullight/liquid-glass";

const config = {
  radius: "16px",
  tintColor: "255,255,255",
  tintOpacity: 0.1,
  frostBlur: "4px",
  // ... other options
};

function App() {
  return (
    <LiquidGlassProvider value={config}>
      {/* Your app content */}
    </LiquidGlassProvider>
  );
}
```

## API

### LiquidGlassProvider

The provider component that sets up the glass effect context and SVG filters.

#### Props

- `value?: Partial<LiquidGlassConfig>` - Configuration object for customizing the glass effect
- `children: ReactNode` - Child components

### LiquidGlassFilters

A component that applies the liquid glass visual effect to its parent element.

#### Props

- `innerShadowZIndex?: number` - Z-index for the inner shadow layer (default: 0)
- `backdropFilterZIndex?: number` - Z-index for the backdrop filter layer (default: -1)

### LiquidGlassConfig

Configuration interface for customizing the glass effect:

```tsx
interface LiquidGlassConfig {
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
```

## Framework Agnostic

This package is framework agnostic and works with any React project, regardless of your CSS framework choice (Tailwind CSS, styled-components, CSS modules, etc.).

## License

MIT
