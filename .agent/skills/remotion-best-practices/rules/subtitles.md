---
name: subtitles
description: subtitles and caption rules
metadata:
  tags: subtitles, captions, remotion, json
---

All captions must be processed in JSON. The captions must use the `Caption` type which is the following:

```ts
import type { Caption } from "@remotion/captions";
```

This is the definition:

```ts
type Caption = {
  text: string;
  startMs: number;
  endMs: number;
  timestampMs: number | null;
  confidence: number | null;
};
```

## Generating captions

To transcribe video and audio files to generate captions, you can use services like:
- Whisper API
- Google Cloud Speech-to-Text
- AWS Transcribe

## Displaying captions

Use the `@remotion/captions` package to display captions in your video:

```tsx
import { Caption } from "@remotion/captions";
import { useCurrentFrame, useVideoConfig } from "remotion";

export const Captions = ({ captions }: { captions: Caption[] }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTimeMs = (frame / fps) * 1000;
  
  const currentCaption = captions.find(
    (caption) => currentTimeMs >= caption.startMs && currentTimeMs <= caption.endMs
  );
  
  if (!currentCaption) return null;
  
  return (
    <div style={{
      position: "absolute",
      bottom: 100,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 48,
      color: "white",
      textShadow: "2px 2px 4px black",
    }}>
      {currentCaption.text}
    </div>
  );
};
```

## Importing captions from SRT

You can parse SRT files to convert them to the Caption format:

```tsx
import { parseSrt } from "@remotion/captions";
import { staticFile } from "remotion";

const srtContent = await fetch(staticFile("subtitles.srt")).then(r => r.text());
const captions = parseSrt(srtContent);
```
