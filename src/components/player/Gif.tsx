import React, { useState } from "react";
import FlexImage from "./FlexImage";
import Overlay from "./Overlay";

interface GifProps {
  src: string;
  thumbnail_src: string;
  onLoad: () => void;
}

export default function Gif(props: GifProps) {
  const { src, thumbnail_src, onLoad } = props;

  const [isPaused, setPaused] = useState(true);
  const usedSource = isPaused ? thumbnail_src : src;

  return (
    <>
      <FlexImage
        src={usedSource}
        alt={usedSource}
        loading="lazy"
        onLoad={onLoad}
      />
      <Overlay
        isPlayable
        isPaused={isPaused}
        togglePlay={(event) => {
          event.stopPropagation();
          setPaused(!isPaused);
        }}
      />
    </>
  );
}
