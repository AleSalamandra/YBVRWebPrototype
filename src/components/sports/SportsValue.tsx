import { resolvePublicAsset } from "@/lib/resolvePublicAsset";
import styles from "./Sports.module.css";

const values = [
  {
    eyebrow: "Deeper connections",
    title: "Deeper fan engagement",
    copy: "Give fans genuine presence and deeper connection beyond a screen.",
  },
  {
    eyebrow: "New opportunities",
    title: "New revenue lines",
    copy: "A new distribution window and monetisation opportunity across sponsorship, premium access and new formats.",
  },
  {
    eyebrow: "Built to scale",
    title: "End to end delivery",
    copy: "From capture to rights, production, distribution and platform delivery — built for audiences already there.",
  },
];

const CARD_GRADIENT =
  "linear-gradient(180deg, rgba(9,9,13,.18) 0%, rgba(9,9,13,.42) 55%, rgba(9,9,13,.76) 100%)";

export default function SportsValue() {
  return (
    <section className={styles.value}>
      <div className={styles.sectionLabel}>How we create value —</div>

      <div className={styles.valueGrid}>
        {values.map((item, index) => {
          const image = resolvePublicAsset(`media/sports/value-${index + 1}`);
          const backgroundImage = image
            ? `${CARD_GRADIENT}, url("${image}")`
            : CARD_GRADIENT;

          return (
            <article key={item.title} className={styles.valueCard}>
              <div
                className={styles.valueMedia}
                aria-hidden="true"
                style={{ backgroundImage }}
              />
              <div className={styles.valueContent}>
                <span className={styles.valueEyebrow}>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
