"use client";

import {
  useRef,
  useState,
} from "react";

import styles from "./Studios.module.css";


export default function StudiosShowreel() {
  const videoRef =
    useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] =
    useState(false);


  const handleTogglePlay = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      await video.play();

      setPlaying(true);

      return;
    }

    video.pause();

    setPlaying(false);
  };


  return (
    <section className={styles.showreel}>
      <div className={styles.sectionLabel}>
        Studios showreel —
      </div>

      <div className={styles.showreelFrame}>
        <video
          ref={videoRef}
          className={styles.showreelVideo}
          src="/media/studios/showreel.mp4"
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div
          className={styles.showreelShade}
          aria-hidden="true"
        />

        <button
          type="button"
          className={[
            styles.showreelPlay,
            playing
              ? styles.showreelPlayHidden
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={handleTogglePlay}
          aria-label={
            playing
              ? "Pause Studios reel"
              : "Play Studios reel"
          }
        >
          <span className={styles.playIcon}>
            ▶
          </span>

          <span>
            Play Studios reel
          </span>
        </button>

        {playing && (
          <button
            type="button"
            className={styles.showreelClickArea}
            onClick={handleTogglePlay}
            aria-label="Pause Studios reel"
          />
        )}
      </div>
    </section>
  );
}