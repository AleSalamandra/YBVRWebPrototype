import Image from "next/image";

import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Tech.module.css";


export default function TechHero() {
  const heroImage =
    resolvePublicAsset(
      "media/tech/hero"
    );

  const techLogo =
    resolvePublicAsset(
      "brand/Logo_YBTech",
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
        {techLogo && (
          <Image
            src={techLogo}
            alt="YB Tech"
            width={420}
            height={120}
            priority
            className={styles.techLogo}
          />
        )}

        <div className={styles.heroDescriptor}>
          <strong>
            Immersive apps
          </strong>

          <span>
            Make it possible
          </span>

          <span>
            with the technology
          </span>

          <span>
            of the future.
          </span>
        </div>
      </div>

      <h1 className={styles.heroClaim}>
        Technology built for
        <br />
        immersive media.
      </h1>
    </section>
  );
}