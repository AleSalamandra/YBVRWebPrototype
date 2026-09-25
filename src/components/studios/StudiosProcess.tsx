import styles from "./Studios.module.css";


const steps = [
  {
    title: "Concept",
    copy: "A bold idea starts a bigger journey.",
  },
  {
    title: "Create",
    copy: "Blending creativity and technology.",
  },
  {
    title: "Produce",
    copy: "World-class execution at any scale.",
  },
  {
    title: "Deliver",
    copy: "Experiences that live beyond the screen.",
  },
];


export default function StudiosProcess() {
  return (
    <section className={styles.process}>
      <div className={styles.sectionLabel}>
        From story to experience —
      </div>

      <div className={styles.processTrack}>
        {steps.map((step) => (
          <div
            key={step.title}
            className={styles.processStep}
          >
            <span className={styles.processDot} />

            <h3>{step.title}</h3>

            <p>{step.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
