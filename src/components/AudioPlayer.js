import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Audio playback failed:", err);
      }
    };

    playAudio();

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [src]);

  return null; // 화면에 렌더링할 내용이 없으므로 null 반환
};

export default AudioPlayer;
