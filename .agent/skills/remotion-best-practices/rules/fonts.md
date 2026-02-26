---
name: fonts
description: Loading Google Fonts and local fonts in Remotion
metadata:
  tags: fonts, typography, google-fonts, local-fonts
---

# Using fonts in Remotion

## Google Fonts

Use `@remotion/google-fonts` to load fonts from Google Fonts.

```bash
npx remotion add @remotion/google-fonts
```

```tsx
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily, waitUntilDone } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

// Wait for font to load before rendering
await waitUntilDone();

return (
  <div style={{ fontFamily }}>
    Hello World
  </div>
);
```

## Local Fonts

Use `staticFile()` to reference local fonts:

```tsx
import { staticFile, delayRender, continueRender } from "remotion";
import { useEffect, useState } from "react";

export const MyComponent = () => {
  const [handle] = useState(() => delayRender("Loading font"));

  useEffect(() => {
    const font = new FontFace(
      "MyCustomFont",
      `url(${staticFile("fonts/MyFont.woff2")})`
    );

    font.load().then(() => {
      document.fonts.add(font);
      continueRender(handle);
    });
  }, [handle]);

  return (
    <div style={{ fontFamily: "MyCustomFont" }}>
      Hello World
    </div>
  );
};
```

## Using @font-face in CSS

You can also define fonts in your CSS:

```css
@font-face {
  font-family: "MyCustomFont";
  src: url("/fonts/MyFont.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}
```

## Best Practices

1. **Always wait for fonts to load** - Use `delayRender()` and `continueRender()` or `waitUntilDone()` to ensure fonts are loaded before rendering.

2. **Use WOFF2 format** - It has the best compression and browser support.

3. **Subset fonts** - Only load the character sets you need to reduce load time.

4. **Cache font loading** - Use state to prevent reloading fonts on every render.
