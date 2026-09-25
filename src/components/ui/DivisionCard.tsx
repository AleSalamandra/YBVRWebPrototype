import Image from "next/image";
import Link from "next/link";

import type {
  DivisionCardData,
} from "@/types";


type DivisionCardProps = {
  division: DivisionCardData;

  priority?: boolean;
};


export default function DivisionCard({
  division,
  priority = false,
}: DivisionCardProps) {
  return (
    <Link
      href={division.href}
      className={[
        "division-card",
        `division-card--${division.id}`,
      ].join(" ")}
      aria-label={division.name}
    >
      {/* =================================
          BACKGROUND IMAGE
      ================================= */}

      <Image
        src={division.image}
        alt=""
        fill
        priority={priority}
        unoptimized
        sizes="(max-width: 800px) 100vw, 25vw"
        className="division-card__image"
        style={{
          objectPosition:
            division.objectPosition ??
            "center center",
        }}
      />


      {/* =================================
          GRADIENT
      ================================= */}

      <div
        className="division-card__gradient"
        aria-hidden="true"
      />


      {/* =================================
          CONTENT
      ================================= */}

      <div className="division-card__content">

        <div className="division-card__top">

          <img
            src={division.logo}
            alt={division.name}
            className="division-card__logo"
          />

        </div>


        <div className="division-card__bottom">

          <p className="division-card__description">

            <span>
              {division.descriptionLines[0]}
            </span>

            <span>
              {division.descriptionLines[1]}
            </span>

          </p>


          <span
            className="division-card__arrow"
            aria-hidden="true"
          >
            →
          </span>

        </div>

      </div>

    </Link>
  );
}