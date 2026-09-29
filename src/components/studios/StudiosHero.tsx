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
            Immersive production
          </span>

          <span>
            BUILT AROUND EXPERIENCE.
          </span>
        </div>
      </div>

      <div className={styles.heroClaim}>
        STORIES BUILT TO BE EXPERIENCED.
      </div>
    </section>
  );
}