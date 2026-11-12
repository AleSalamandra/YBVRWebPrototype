
"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type {
  CSSProperties,
  SyntheticEvent,
} from "react";
import { createPortal } from "react-dom";

import styles from "./page.module.css";
import modalStyles from "./ExperienceModal.module.css";

type PartnerLogo = {
  src: string;
  alt: string;
};

type Experience = {
  id: string;
  number: string;
  title: string;
  description: string;
  expandedDescription: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  logos: PartnerLogo[];
};

const experiences: Experience[] = [
  {
    id: "theatre",
    number: "01",
    title: "Theatre & Cinema",
    description:
      "Stories that take you beyond the traditional screen.",
    expandedDescription:
      "Discover new perspectives on storytelling, spectacular settings and the worlds that bring unforgettable stories to life.",
    image: "/media/cultvre/theatre-cinema.jpeg",
    imageAlt:
      "A theatrical performance featuring dramatic staging",
    imagePosition: "center",
    logos: [],
  },
  {
    id: "dance",
    number: "02",
    title: "Dance & Performance",
    description:
      "Closer to the artistry of world-class performances.",
    expandedDescription:
      "Step inside the magic of San Francisco Ballet's Nutcracker. Experience the movement, music and extraordinary artistry of this beloved performance from a completely new perspective.",
    image: "/media/cultvre/dance-performance.png",
    imageAlt:
      "Dancers performing the snow scene from San Francisco Ballet's Nutcracker",
    imagePosition: "center",
    logos: [
      {
        src: "/brand/external/Logo_SanFranciscoBallet_White.svg",
        alt: "San Francisco Ballet",
      },
      {
        src: "/brand/external/NutcrackerImmersiveExperienceLogo.svg",
        alt: "Nutcracker: The Immersive Experience",
      },
    ],
  },
  {
    id: "heritage",
    number: "03",
    title: "Art & Heritage",
    description:
      "Explore remarkable art, history and cultural spaces.",
    expandedDescription:
      "Discover the extraordinary details of our artistic and architectural heritage through immersive perspectives that bring history and culture closer.",
    image: "/media/cultvre/art-heritage.jpg",
    imageAlt:
      "Ornamental historic architecture photographed from below",
    imagePosition: "center",
    logos: [],
  },
  {
    id: "travel",
    number: "04",
    title: "Travel & Discovery",
    description:
      "Extraordinary places, seen from a different perspective.",
    expandedDescription:
      "Explore the beauty of remarkable destinations, from monumental architecture to historic cities, through immersive cultural journeys.",
    image: "/media/cultvre/travel-discovery.jpg",
    imageAlt:
      "Historic cathedral architecture under a blue sky",
    imagePosition: "center",
    logos: [],
  },
];

export default function ExperienceGallery() {
  const [active, setActive] =
    useState<Experience | null>(null);

  const [imageRatio, setImageRatio] =
    useState<number>(1.5);

  const lastTriggerRef =
    useRef<HTMLButtonElement | null>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement | null>(null);

  const closeModal = useCallback(() => {
    setActive(null);

    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!active) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
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
    experience: Experience,
    trigger: HTMLButtonElement
  ) => {
    lastTriggerRef.current = trigger;
    setImageRatio(1.5);
    setActive(experience);
  };

  const handleImageLoad = (
    event: SyntheticEvent<HTMLImageElement>
  ) => {
    const image = event.currentTarget;

    if (
      image.naturalWidth > 0 &&
      image.naturalHeight > 0
    ) {
      setImageRatio(
        image.naturalWidth / image.naturalHeight
      );
    }
  };

  const modalStyle = {
    "--photo-ratio": imageRatio,
  } as CSSProperties;

  return (
    <>
      {/* GALLERY CARDS */}

      <div className={styles.categoriesGrid}>
        {experiences.map((experience) => (
          <button
            key={experience.id}
            type="button"
            className={styles.category}
            onClick={(event) =>
              openModal(
                experience,
                event.currentTarget
              )
            }
            aria-label={`Explore ${experience.title}`}
            aria-haspopup="dialog"
          >
            <Image
              src={experience.image}
              alt={experience.imageAlt}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 1100px) 50vw, 25vw"
              className={styles.categoryImage}
              style={{
                objectPosition:
                  experience.imagePosition ?? "center",
              }}
            />

            <div className={styles.categoryShade} />

            <div className={styles.categoryTop}>
              <span className={styles.categoryNumber}>
                {experience.number}
              </span>

              <span
                className={styles.categorySymbol}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            <div className={styles.categoryContent}>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>

              <span className={styles.categoryExplore}>
                DISCOVER EXPERIENCE
                <span aria-hidden="true">↗</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* EXPANDED EXPERIENCE PANEL */}

      {active && typeof document !== "undefined"
        ? createPortal(
            <div
              className={modalStyles.overlay}
              role="presentation"
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
                className={modalStyles.modal}
                style={modalStyle}
                role="dialog"
                aria-modal="true"
                aria-label={active.title}
                aria-describedby="cultvre-modal-description"
              >
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  priority
                  sizes="95vw"
                  className={modalStyles.image}
                  onLoad={handleImageLoad}
                />

                <div
                  className={modalStyles.shade}
                  aria-hidden="true"
                />

                <button
                  ref={closeButtonRef}
                  type="button"
                  className={modalStyles.close}
                  onClick={closeModal}
                  aria-label="Close experience"
                >
                  <span aria-hidden="true">×</span>
                </button>

                <div className={modalStyles.content}>
                  <span className={modalStyles.eyebrow}>
                    CULTVRE / IMMERSIVE EXPERIENCES
                  </span>

                  <Image
                    src="/brand/cultvre_logo.svg"
                    alt="CultVRe"
                    width={600}
                    height={180}
                    className={modalStyles.cultvreLogo}
                  />

                  <span className={modalStyles.category}>
                    {active.title}
                  </span>

                  <p
                    id="cultvre-modal-description"
                    className={modalStyles.description}
                  >
                    {active.expandedDescription}
                  </p>

                  {active.logos.length > 0 && (
                    <div className={modalStyles.partners}>
                      {active.logos.map((logo) => (
                        <div
                          key={logo.src}
                          className={modalStyles.partnerWrap}
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={360}
                            height={130}
                            className={modalStyles.partnerLogo}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className={modalStyles.footer}>
                  <span>
                    {active.number} / CULTVRE
                  </span>

                  <span>
                    EXPERIENCE CULTURE DIFFERENTLY
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
