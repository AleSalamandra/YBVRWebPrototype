import Link from "next/link";

import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Studios.module.css";


export default function StudiosCTA() {
  const ctaImage = resolvePublicAsset(
    "media/studios/cta"
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
                    rgba(9, 9, 13, 0.82) 0%,
                    rgba(9, 9, 13, 0.24) 55%,
                    rgba(9, 9, 13, 0.14) 100%
                  ),
                  url("${ctaImage}")`,
              }
            : {
                backgroundImage:
                  `linear-gradient(
                    90deg,
                    rgba(9, 9, 13, 0.82) 0%,
                    rgba(9, 9, 13, 0.24) 55%,
                    rgba(9, 9, 13, 0.14) 100%
                  )`,
              }
        }
      />

      <div className={styles.ctaContent}>
        <span className={styles.ctaEyebrow}>
          Let&apos;s build
          <br />
          what&apos;s next.
        </span>

        <h2>
          Have a story?
          <br />
          Let&apos;s make it something
          <br />
          people can step into.
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
