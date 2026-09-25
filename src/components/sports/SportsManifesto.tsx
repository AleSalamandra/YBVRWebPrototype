import styles from "./Sports.module.css";

export default function SportsManifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={styles.sectionLabel}>Our manifesto —</div>

      <div className={styles.manifestoGrid}>
        <h2 className={styles.manifestoTitle}>
          We bring fans
          <br />
          inside the game.
        </h2>

        <div className={styles.manifestoCopy}>
          <p>
            Sport has always evolved — from live at the stadium, to broadcast,
            to streaming, to second-screen. Extended reality is the next step.
            Now fans can feel present inside the stadium, the matchday and the
            team, wherever they are around the world.
          </p>
          <span>— Our philosophy</span>
        </div>
      </div>
    </section>
  );
}
