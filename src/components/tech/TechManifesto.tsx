import styles from "./Tech.module.css";


export default function TechManifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={styles.sectionLabel}>
        Our manifesto —
      </div>

      <div className={styles.manifestoGrid}>
        <h2 className={styles.manifestoTitle}>
          The infrastructure behind
          <br />
          what&apos;s next.
        </h2>

        <div className={styles.manifestoCopy}>
          <p>
            YB Tech builds the streaming infrastructure,
            apps, and SDKs that power live and on-demand
            spatial video for sports, entertainment, and
            the partners who rely on it.
          </p>

          <span>
            — Our philosophy
          </span>
        </div>
      </div>
    </section>
  );
}
