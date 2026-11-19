
"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import styles from "./page.module.css";
import modalStyles from "./XtadiumFeatureModal.module.css";

type Feature = {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  video: string;
};

type VideoClipProps = {
  src: string;
  className: string;
  enabled?: boolean;
};

const features: Feature[] = [
  {
    id: "handtracking",
    number: "01",
    title: "Hand Tracking",
    description:
      "Navigate the app with your hands. No controllers needed.",
    longDescription:
      "A more natural way to interact. Navigate your immersive sports experience using your hands, without relying on physical controllers.",
    video: "/media/xtadium/handtracking.mp4",
  },
  {
    id: "front-row",
    number: "02",
    title: "Front Row from Home",
    description:
      "Experience the atmosphere and intensity of sport up close.",
    longDescription:
      "Feel closer to the action with immersive camera perspectives that bring you into the stadium atmosphere, wherever you happen to be.",
    video: "/media/xtadium/front-row.mp4",
  },
  {
    id: "social",
    number: "03",
    title: "Stay Connected",
    description:
      "Keep up with your social media while watching.",
    longDescription:
      "Stay connected with your social world while enjoying an immersive sports experience. Follow the conversation without leaving the action.",
    video: "/media/xtadium/social-watching.mp4",
  },
  {
    id: "mixed-reality",
    number: "04",
    title: "Mixed Reality",
    description:
      "Bring your favourite sports screens into your space.",
    longDescription:
      "Enjoy content in virtual or mixed reality. Surround yourself with screens and create a personalised sports-viewing environment.",
    video: "/media/xtadium/extra-2.mp4",
  },
  {
    id: "statistics",
    number: "05",
    title: "Real-Time Statistics",
    description:
      "Stay close to the numbers and the story of the game.",
    longDescription:
      "Access game statistics and scores alongside the viewing experience, adding a new layer of information to the action.",
    video: "/media/xtadium/statistics.mp4",
  },
  {
    id: "private-party",
    number: "06",
    title: "Private Watch Parties",
    description:
      "Experience unforgettable sports moments together.",
    longDescription:
      "Bring friends together in a shared virtual environment. Experience sport as a social event, even when you're watching from different places.",
    video: "/media/xtadium/watch-party.mp4",
  },
  {
    id: "multi-camera",
    number: "07",
    title: "Multi-Camera Experience",
    description:
      "Explore different perspectives of the same event.",
    longDescription:
      "Go beyond one director-selected perspective. Discover multiple camera angles and enjoy a more personalised way of watching sport.",
    video: "/media/xtadium/multi-camera.mp4",
  },
  {
    id: "multi-game",
    number: "08",
    title: "Multi-Game Experience",
    description:
      "More action, more screens, more to experience.",
    longDescription:
      "Follow multiple sports experiences in one immersive environment, creating your own personalised viewing setup.",
    video: "/media/xtadium/multi-game.mp4",
  },
];

/* ==========================================
   OPTIMIZED VIDEO
========================================== */

function VideoClip({
  src,
  className,
  enabled = true,
}: VideoClipProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!enabled) {
      video.pause();
      return;
    }

    let visible = false;

    const playVideo = () => {
      if (!visible || document.hidden) return;

      video.play().catch(() => {
        // Autoplay restrictions are handled silently.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);

        if (visible) {
          playVideo();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px 0px",
      }
    );

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    observer.observe(video);

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      observer.disconnect();

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

      video.pause();
    };
  }, [src, enabled]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      disablePictureInPicture
      disableRemotePlayback
    />
  );
}

/* ==========================================
   XTADIUM FEATURES
========================================== */

export default function XtadiumFeatures() {
  const [active, setActive] =
    useState<Feature | null>(null);

  const lastTrigger =
    useRef<HTMLButtonElement | null>(null);

  const closeRef =
    useRef<HTMLButtonElement | null>(null);

  const scrollRef =
    useRef<HTMLDivElement | null>(null);

  const closeModal = useCallback(() => {
    setActive(null);

    window.requestAnimationFrame(() => {
      lastTrigger.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!active) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }

    closeRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [active, closeModal]);

  const openModal = (
    feature: Feature,
    trigger: HTMLButtonElement
  ) => {
    lastTrigger.current = trigger;
    setActive(feature);
  };

  return (
    <>
      {/* =====================================
          FEATURE CARDS
      ===================================== */}

      <div className={styles.featureCards}>
        {features.map((feature) => (
          <button
            key={feature.id}
            type="button"
            className={styles.featureCard}
            onClick={(event) =>
              openModal(
                feature,
                event.currentTarget
              )
            }
            aria-label={`Explore ${feature.title}`}
            aria-haspopup="dialog"
          >
            <div className={styles.featureMedia}>
              <VideoClip
                src={feature.video}
                className={styles.featureVideo}
                enabled={!active}
              />

              <div
                className={styles.featureMediaShade}
                aria-hidden="true"
              />

              <div className={styles.featureMediaTop}>
                <span>{feature.number}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>

            <div className={styles.featureText}>
              <div className={styles.featureTextTop}>
                <h3>{feature.title}</h3>

                <span
                  className={styles.featureTextArrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <p>{feature.description}</p>

              <span className={styles.featureCardAction}>
                EXPLORE FEATURE
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* =====================================
          EXPANDED MODAL
      ===================================== */}

      {active && typeof document !== "undefined"
        ? createPortal(
            <div
              className={modalStyles.overlay}
              onMouseDown={(event) => {
                if (
                  event.target ===
                  event.currentTarget
                ) {
                  closeModal();
                }
              }}
            >
              <div
                className={modalStyles.dialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby="xtadium-modal-title"
                aria-describedby="xtadium-modal-description"
              >
                {/* BACKGROUND VIDEO */}

                <VideoClip
                  key={active.id}
                  src={active.video}
                  className={modalStyles.video}
                />

                {/* CENTRAL FADE */}

                <div
                  className={modalStyles.shade}
                  aria-hidden="true"
                />

                {/* SCROLLABLE CONTENT */}

                <div
                  ref={scrollRef}
                  className={modalStyles.scrollArea}
                >
                  <div
                    className={modalStyles.content}
                  >
                    <span
                      className={modalStyles.eyebrow}
                    >
                      XTADIUM / IMMERSIVE SPORTS
                    </span>

                    <Image
                      src="/brand/xtadium_logo.svg"
                      alt="Xtadium"
                      width={420}
                      height={130}
                      className={modalStyles.logo}
                    />

                    <span
                      className={modalStyles.category}
                    >
                      FEATURE {active.number}
                    </span>

                    <h2 id="xtadium-modal-title">
                      {active.title}
                    </h2>

                    <p
                      id="xtadium-modal-description"
                      className={
                        modalStyles.description
                      }
                    >
                      {active.longDescription}
                    </p>
                  </div>
                </div>

                {/* CLOSE */}

                <button
                  ref={closeRef}
                  type="button"
                  className={modalStyles.close}
                  onClick={closeModal}
                  aria-label="Close feature"
                >
                  ×
                </button>

                {/* FOOTER */}

                <div className={modalStyles.footer}>
                  <span>
                    {active.number} / XTADIUM
                  </span>

                  <span>
                    SPORT, EXPERIENCED FROM THE INSIDE
                  </span>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
