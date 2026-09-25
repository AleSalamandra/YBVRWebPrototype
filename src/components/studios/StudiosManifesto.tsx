import styles from "./Studios.module.css";


export default function StudiosManifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={styles.sectionLabel}>
        Our manifesto —
      </div>

      <div className={styles.manifestoGrid}>
        <h2 className={styles.manifestoTitle}>
          We create stories,
          <br />
          you can step inside.
        </h2>

        <div className={styles.manifestoCopy}>
          <p>
            YB Studios blends cinematic storytelling,
            cutting-edge technology and human emotion
            to create immersive videos for a more connected world.
          </p>

          <span>— Our philosophy</span>
        </div>
      </div>
    </section>
  );
}
