import styles from "./Studios.module.css";


const steps = [
  {
    title: "Concept",
    copy: "We shape the idea around the audience and the experience.",
  },
  {
    title: "Create",
    copy: "Creative direction, storytelling, and experience design.",
  },
  {
    title: "Produce",
    copy: "Immersive production, capture, and execution at any scale. ",
  },
  {
    title: "Deliver",
    copy: "Post-production and content prepared for the platforms where audiences experience it. ",
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
