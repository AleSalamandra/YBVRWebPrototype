import Link from "next/link";

import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Tech.module.css";


export default function TechCTA() {
  const ctaImage =
    resolvePublicAsset(
      "media/tech/cta"
    );


  return (
    <section className={styles.cta}>
      <div
        className={styles.ctaMedia}
        aria-hidden="true"
        style={
          ctaImage
            ? {
                backgroundImage:
                  `linear-gradient(
                    90deg,
                    rgba(9, 9, 13, 0.84) 0%,
                    rgba(9, 9, 13, 0.30) 58%,
                    rgba(9, 9, 13, 0.10) 100%
                  ),
                  url("${ctaImage}")`,
              }
            : undefined
        }
      />

      <div className={styles.ctaContent}>
        <span className={styles.ctaEyebrow}>
          Same content.
          <br />
          A wider world.
        </span>

        <h2>
          Let&apos;s build what
          <br />
          comes next.
        </h2>

        <Link
          href="#contact"
          className={styles.ctaButton}
        >
          Get in touch
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
