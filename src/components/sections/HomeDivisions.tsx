import Image from "next/image";
import Link from "next/link";

import { homeDivisions } from "@/data/divisions";

export default function HomeDivisions() {
  return (
    <section
      className="home-divisions"
      aria-labelledby="home-divisions-title"
    >
      <div className="home-divisions__heading">
        <h2 id="home-divisions-title">
          One company. Three ways to shape media.
        </h2>
      </div>

      <div className="home-divisions__grid">
        {homeDivisions.map(
          (division) => (
            <Link
              key={division.id}
              href={division.href}
              className="division-card"
              aria-label={`Discover ${division.name}`}
            >
              <Image
                src={division.image}
                alt=""
                fill
                sizes="(max-width: 560px) 100vw, (max-width: 800px) 50vw, 33.333vw"
                className="division-card__image"
                priority={
                  division.id ===
                  "studios"
                }
              />

              <div
                className="division-card__gradient"
                aria-hidden="true"
              />

              <div className="division-card__content">
                <div className="division-card__top">
                  <Image
                    src={division.logo}
                    alt={division.name}
                    width={240}
                    height={64}
                    className="division-card__logo"
                  />
                </div>

                <div className="division-card__bottom">
                  <p className="division-card__description">
                    {division.descriptionLines.map(
                      (line) => (
                        <span key={line}>
                          {line}
                        </span>
                      )
                    )}
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
          )
        )}
      </div>
    </section>
  );
}