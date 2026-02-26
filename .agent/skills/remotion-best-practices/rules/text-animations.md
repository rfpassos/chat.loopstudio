---
name: text-animations
description: Typography and text animation patterns for Remotion.
metadata:
  tags: typography, text, typewriter, highlighter
---

## Text animations

Based on `useCurrentFrame()`, reduce the string character by character to create a typewriter effect.

## Typewriter Effect

Always use string slicing for typewriter effects. Never use per-character opacity.

```tsx
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const Typewriter = ({ text }: { text: string }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Characters per second
  const charsPerSecond = 20;
  const charsToShow = Math.floor((frame / fps) * charsPerSecond);
  
  const displayText = text.slice(0, charsToShow);
  
  return (
    <div style={{ fontFamily: "monospace", fontSize: 48 }}>
      {displayText}
      <span style={{ opacity: frame % 30 < 15 ? 1 : 0 }}>|</span>
    </div>
  );
};
```

## Word Highlighting

Animate word highlights like with a highlighter pen:

```tsx
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const WordHighlight = ({ 
  text, 
  highlightWord 
}: { 
  text: string; 
  highlightWord: string;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const highlightProgress = interpolate(
    frame,
    [0.5 * fps, 1.5 * fps],
    [0, 100],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  
  const parts = text.split(highlightWord);
  
  return (
    <div style={{ fontSize: 48 }}>
      {parts[0]}
      <span
        style={{
          background: `linear-gradient(to right, yellow ${highlightProgress}%, transparent ${highlightProgress}%)`,
          padding: "2px 4px",
        }}
      >
        {highlightWord}
      </span>
      {parts[1]}
    </div>
  );
};
```
