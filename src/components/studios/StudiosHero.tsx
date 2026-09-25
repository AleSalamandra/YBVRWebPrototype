import Image from "next/image";

import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Studios.module.css";


export default function StudiosHero() {
  const heroImage =
    resolvePublicAsset(
      "media/studios/hero"
    );

  const studiosLogo =
    resolvePublicAsset(
      "brand/Logo_YBStudios",
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
        {studiosLogo && (
          <Image
            src={studiosLogo}
            alt="YB Studios"
            width={420}
            height={120}
            priority
            className={styles.studiosLogo}
          />
        )}

        <div className={styles.heroDescriptor}>
          <span>
            Immersive experiences
          </span>

          <span>
            you don&apos;t just watch.
          </span>
        </div>
      </div>

      <div className={styles.heroClaim}>
        Stories you don&apos;t just watch.
      </div>
    </section>
  );
}