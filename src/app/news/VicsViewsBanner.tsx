import Link from "next/link";
import { formatVicDate, getLatestVicIssue } from "@/data/vicsViews";
import styles from "./VicsViewsBanner.module.css";

/** Compact editorial feature embedded in the existing News hero. */
export default function VicsViewsBanner() {
  const latest = getLatestVicIssue();

  return (
    <aside className={styles.banner} aria-labelledby="vics-feature-title">
      <div className={styles.eyebrow}>
        <span className={styles.liveDot} aria-hidden="true" />
        YB ORIGINALS <span className={styles.slash}>/</span> FOUNDER DISPATCHES
      </div>
      <h2 id="vics-feature-title" className={styles.title}>
        Vic’s <span>Views</span><span className={styles.titleDot}>.</span>
      </h2>
      <p className={styles.copy}>
        A fortnightly look at the technology, questions and ideas on the mind of
        Victor, Co-Founder &amp; CTO of YB.
      </p>
      <div className={styles.actions}>
        <Link className={styles.primary} href="/news/vics-views">
          Enter Vic’s mind <span aria-hidden="true">↗</span>
        </Link>
        {latest ? (
          <Link className={styles.latest} href={`/news/vics-views/${latest.slug}`}>
            <span className={styles.latestLabel}>LATEST DISPATCH</span>
            <span className={styles.latestTitle}>{latest.title} ↗</span>
            <span className={styles.latestDate}>{formatVicDate(latest.date)}</span>
          </Link>
        ) : (
          <span className={styles.soon}>FIRST DISPATCH COMING SOON</span>
        )}
      </div>
    </aside>
  );
}
