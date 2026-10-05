import Image from "next/image";
import Link from "next/link";

import { homeDivisions } from "@/data/divisions";


/* ========================================
   DIVISION ORDER
======================================== */

const divisionOrder = [
  "studios",
  "sports",
  "tech",
];


/* ========================================
   HOME DIVISIONS
======================================== */

export default function HomeDivisions() {
  const orderedDivisions = [
    ...homeDivisions,
  ].sort(
    (a, b) =>
      divisionOrder.indexOf(a.id) -
      divisionOrder.indexOf(b.id)
  );

  return (
    <section
      className="home-divisions"
      aria-labelledby="home-divisions-title"
    >
      {/* ========================================
          HEADING
      ======================================== */}

      <div className="home-divisions__heading">
        <h2 id="home-divisions-title">
          THREE SPECIALTIES. ONE CONNECTED ECOSYSTEM.
        </h2>
      </div>


      {/* ========================================
          DIVISIONS GRID
      ======================================== */}

      <div className="home-divisions__grid">
        {orderedDivisions.map(
          (division) => (
            <Link
              key={division.id}
              href={division.href}
              className="division-card"
              aria-label={`Discover ${division.name}`}
            >
              {/* IMAGE */}

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


              {/* GRADIENT */}

              <div
                className="division-card__gradient"
                aria-hidden="true"
              />


              {/* CONTENT */}

              <div className="division-card__content">

                {/* LOGO */}

                <div className="division-card__top">
                  <Image
                    src={division.logo}
                    alt={division.name}
                    width={240}
                    height={64}
                    className="division-card__logo"
                  />
                </div>


                {/* DESCRIPTION + ARROW */}

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