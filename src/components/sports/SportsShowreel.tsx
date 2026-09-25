"use client";

import { useRef, useState } from "react";
import styles from "./Sports.module.css";

export default function SportsShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleTogglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className={styles.showreel}>
      <div className={styles.sectionLabel}>Sports showreel —</div>

      <div className={styles.showreelFrame}>
        <video
          ref={videoRef}
          className={styles.showreelVideo}
          src="/media/sports/showreel.mp4"
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className={styles.showreelShade} aria-hidden="true" />

        <button
          type="button"
          className={[
            styles.showreelPlay,
            playing ? styles.showreelPlayHidden : "",
          ].filter(Boolean).join(" ")}
          onClick={handleTogglePlay}
          aria-label={playing ? "Pause Sports reel" : "Play Sports reel"}
        >
          <span className={styles.playIcon}>▶</span>
          <span>Play Sports reel</span>
        </button>

        {playing && (
          <button
            type="button"
            className={styles.showreelClickArea}
            onClick={handleTogglePlay}
            aria-label="Pause Sports reel"
          />
        )}
      </div>
    </section>
  );
}
