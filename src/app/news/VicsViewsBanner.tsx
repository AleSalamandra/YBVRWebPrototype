import Link from "next/link";
import { formatVicDate, getLatestVicIssue } from "@/data/vicsViews";
import styles from "./VicsViewsBanner.module.css";

/** Editorial feature before the regular /news cards. Not a news item. */
export default function VicsViewsBanner() {
  const latest = getLatestVicIssue();

  return (
    <section className={styles.banner} aria-labelledby="vic-banner-title">
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.orbitOuter} />
        <div className={styles.orbitInner} />
        <div className={styles.core}>
          <span>V</span>
        </div>
        <span className={`${styles.idea} ${styles.ideaOne}`}>SPATIAL</span>
        <span className={`${styles.idea} ${styles.ideaTwo}`}>WHAT IF?</span>
        <span className={`${styles.idea} ${styles.ideaThree}`}>AI / XR</span>
        <span className={`${styles.idea} ${styles.ideaFour}`}>NEXT →</span>
        <span className={styles.orbitDot} />
      </div>

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.liveDot} />
          YB ORIGINALS <span className={styles.slash}>/</span> FOUNDER DISPATCHES
        </div>
        <h2 id="vic-banner-title" className={styles.title}>
          Vic’s <em>Views</em><span className={styles.titleDot}>.</span>
        </h2>
        <p className={styles.copy}>
          A fortnightly window into the technologies, questions and ideas on the
          mind of Victor, Co-Founder &amp; CTO of YB.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/news/vics-views">
            Enter Vic’s mind <span aria-hidden="true">↗</span>
          </Link>
          {latest ? (
            <Link
              className={styles.latest}
              href={`/news/vics-views/${latest.slug}`}
            >
              <span className={styles.latestLabel}>LATEST DISPATCH</span>
              <span className={styles.latestTitle}>{latest.title} ↗</span>
              <span className={styles.latestDate}>{formatVicDate(latest.date)}</span>
            </Link>
          ) : (
            <span className={styles.soon}>THE FIRST DISPATCH IS YET TO BE PUBLISHED</span>
          )}
        </div>
      </div>
      <span className={styles.sideNote}>THOUGHTS IN MOTION / 2016 — ∞</span>
    </section>
  );
}
