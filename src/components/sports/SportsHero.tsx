import Image from "next/image";
import Link from "next/link";

import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Sports.module.css";


export default function SportsHero() {
  const heroImage =
    resolvePublicAsset(
      "media/sports/hero"
    );

  const sportsLogo =
    resolvePublicAsset(
      "brand/Logo_YBSports",
      [
        ".svg",
        ".png",
        ".jpg",
        ".jpeg",
      ]
    );


  return (
    <section className={styles.hero}>
      <div
        className={styles.heroMedia}
        aria-hidden="true"
        style={
          heroImage
            ? {
                backgroundImage:
                  `url("${heroImage}")`,
              }
            : undefined
        }
      />

      <div
        className={styles.heroGradientOverlay}
        aria-hidden="true"
      />

      <div
        className={styles.heroShade}
        aria-hidden="true"
      />

      <div className={styles.heroTop}>
        {sportsLogo && (
          <Image
            src={sportsLogo}
            alt="YB Sports"
            width={420}
            height={120}
            priority
            className={styles.sportsLogo}
          />
        )}

        <div className={styles.heroDescriptor}>
          <span>
            Immersive sports
          </span>

          <span>
            for a right-here,
          </span>

          <span>
            top-row feeling.
          </span>
        </div>
      </div>

      <div className={styles.heroBottom}>
        <h1>
          Closer to the action.
        </h1>

        <p>
          We help clubs, leagues and broadcasters
          bring sport to fans in extended reality,
          creating a new immersive fan experience
          and a new asset class for engagement
          and monetisation.
        </p>

        <Link
          href="/tech"
          className={styles.heroButton}
        >
          Discover the apps

          <span>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}