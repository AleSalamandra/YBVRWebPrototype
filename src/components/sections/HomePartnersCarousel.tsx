"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import styles from "./HomePartners.module.css";


type Partner = {
  src: string;
  alt: string;
};


type PartnersCarouselProps = {
  partners: Partner[];
};


const ITEMS_PER_SLIDE = 3;
const AUTOPLAY_DELAY = 3200;


export default function PartnersCarousel({
  partners,
}: PartnersCarouselProps) {
  const slides = useMemo(() => {
    const result: Partner[][] = [];

    for (
      let index = 0;
      index < partners.length;
      index += ITEMS_PER_SLIDE
    ) {
      result.push(
        partners.slice(
          index,
          index + ITEMS_PER_SLIDE
        )
      );
    }

    return result;
  }, [partners]);


  const [activeSlide, setActiveSlide] =
    useState(0);

  const [paused, setPaused] =
    useState(false);

  const intervalRef =
    useRef<ReturnType<typeof setInterval> | null>(
      null
    );


  useEffect(() => {
    if (
      paused ||
      slides.length <= 1
    ) {
      return;
    }


    intervalRef.current = setInterval(() => {
      setActiveSlide((current) =>
        (current + 1) % slides.length
      );
    }, AUTOPLAY_DELAY);


    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    paused,
    slides.length,
  ]);


  if (slides.length === 0) {
    return null;
  }


  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => {
        setPaused(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
      }}
      onFocusCapture={() => {
        setPaused(true);
      }}
      onBlurCapture={() => {
        setPaused(false);
      }}
    >
      <div
        className={styles.track}
        style={{
          transform:
            `translate3d(-${activeSlide * 100}%, 0, 0)`,
        }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.slide}
            key={slideIndex}
          >
            {slide.map((partner) => (
              <div
                className={styles.partner}
                key={partner.src}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={420}
                  height={180}
                  sizes="(max-width: 800px) 30vw, 26vw"
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        ))}
      </div>


      {slides.length > 1 && (
        <div
          className={styles.progress}
          aria-hidden="true"
        >
          {slides.map((_, index) => (
            <span
              key={index}
              className={[
                styles.progressItem,
                index === activeSlide
                  ? styles.progressItemActive
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}