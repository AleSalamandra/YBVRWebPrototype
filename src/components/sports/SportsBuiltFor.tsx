import styles from "./Sports.module.css";

const audiences = [
  { title: "Clubs", copy: "Secure the opportunity." },
  { title: "Leagues", copy: "Grow global audiences and unlock new revenue opportunities." },
  { title: "Broadcasters", copy: "Add a new immersive layer to your coverage." },
];

export default function SportsBuiltFor() {
  return (
    <section className={styles.builtFor}>
      <div className={styles.sectionLabel}>Built for —</div>

      <div className={styles.audienceGrid}>
        {audiences.map((audience) => (
          <div key={audience.title} className={styles.audienceItem}>
            <h3>{audience.title}</h3>
            <p>{audience.copy}</p>
          </div>
        ))}
      </div>

      <p className={styles.builtForStatement}>
        Rights holders don&apos;t need to become an XR company to offer immersive
        experiences. YB Sports builds and delivers the full stack end to end.
      </p>
    </section>
  );
}
