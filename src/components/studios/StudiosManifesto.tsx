import styles from "./Studios.module.css";


export default function StudiosManifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={styles.sectionLabel}>
        Our approach —
      </div>

      <div className={styles.manifestoGrid}>
        <h2 className={styles.manifestoTitle}>
          We create experiences,
          <br />
          that put the audience inside the story.
        </h2>

        <div className={styles.manifestoCopy}>
          <p>
            YB Studios combines cinematic storytelling, immersive production, and technical
            expertise to create content across sport, culture, music, and entertainment.
            From concept through production and post-production, we design every project around
            how the audience will experience it, not simply how it will look on a screen. 
          </p>

          <span>— Our philosophy</span>
        </div>
      </div>
    </section>
  );
}
