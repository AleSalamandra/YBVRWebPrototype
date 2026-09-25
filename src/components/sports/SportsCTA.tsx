import Link from "next/link";
import { resolvePublicAsset } from "@/lib/resolvePublicAsset";
import styles from "./Sports.module.css";

export default function SportsCTA() {
  const ctaImage = resolvePublicAsset("media/sports/cta");

  return (
    <section className={styles.cta}>
      <div
        className={styles.ctaMedia}
        aria-hidden="true"
        style={
          ctaImage
            ? {
                backgroundImage: `linear-gradient(
                  90deg,
                  rgba(9, 9, 13, 0.82) 0%,
                  rgba(9, 9, 13, 0.28) 56%,
                  rgba(9, 9, 13, 0.12) 100%
                ), url("${ctaImage}")`,
              }
            : undefined
        }
      />

      <div className={styles.ctaContent}>
        <span className={styles.ctaEyebrow}>
          Let&apos;s build
          <br />
          what&apos;s next.
        </span>

        <h2>
          Ready to bring
          <br />
          fans closer?
        </h2>

        <Link href="#contact" className={styles.ctaButton}>
          Get in touch
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
