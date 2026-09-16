"use client";

import Image from "next/image";

import {
  useEffect,
  useState,
} from "react";


type BackgroundMediaProps = {
  imageSrc: string;

  videoSrc?: string;

  objectPosition?: string;

  priority?: boolean;

  className?: string;
};


export default function BackgroundMedia({
  imageSrc,

  videoSrc,

  objectPosition = "center center",

  priority = false,

  className = "",
}: BackgroundMediaProps) {
  const [
    videoReady,
    setVideoReady,
  ] = useState(false);


  useEffect(() => {
    setVideoReady(false);
  }, [videoSrc]);


  const classes = [
    "background-media",
    className,
  ]
    .filter(Boolean)
    .join(" ");


  return (
    <div
      className={classes}
      aria-hidden="true"
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="background-media__image"
        style={{
          objectPosition,
        }}
      />


      {videoSrc && (
        <video
          src={videoSrc}
          poster={imageSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={[
            "background-media__video",

            videoReady
              ? "is-ready"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            objectPosition,
          }}
          onCanPlay={() => {
            setVideoReady(true);
          }}
          onError={() => {
            setVideoReady(false);
          }}
        />
      )}
    </div>
  );
}