import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Studios.module.css";


const projects = [
  {
    number: "01",
    type: "Immersive film",
    title: "NUTCRACKER: THE IMMERSIVE EXPERIENCE",
    description: "San Francisco Ballet reimagined for immersive audiences. ",
    statement: "A NEW PERSPECTIVE ON A TIMELESS PERFORMANCE.",
  },
  {
    number: "02",
    type: "Live immersive",
    title: "INSIDE THE GAME",
    description: "Bringing fans closer to the moments traditional broadcasts cannot reach.",
    statement: "LIVE SPORT FROM A NEW POINT OF VIEW ",
  },
  {
    number: "03",
    type: " IMMERSIVE ENTERTINAMENT",
    title: "BEYOND THE STAGE ",
    description: "Performance, presence and storytelling brought together in immersive media.",
    statement: "EXPERIENCE THE PERFORMANCE FROM WITHIN. ",
  },
  {
    number: "04",
    type: "Immersive film",
    title: "Beyond the Stage",
    description: "Performance, presence and perspective.",
    statement: "A new way to enter the story.",
  },
];


const WORK_GRADIENT =
  "linear-gradient(90deg, rgba(9,9,13,.78) 0%, rgba(9,9,13,.18) 52%, rgba(9,9,13,.72) 100%)";


export default function StudiosWork() {
  return (
    <section className={styles.work}>
      <div className={styles.workHeading}>
        <span className={styles.sectionLabel}>
          Selected work —
        </span>

        <span className={styles.featuredLabel}>
          Featured work ↓
        </span>
      </div>

      <div className={styles.workList}>
        {projects.map((project, index) => {
          const image = resolvePublicAsset(
            `media/studios/work-${index + 1}`
          );

          const backgroundImage = image
            ? `${WORK_GRADIENT}, url("${image}")`
            : WORK_GRADIENT;


          return (
            <article
              key={project.number}
              className={styles.workCard}
            >
              <div
                className={styles.workCardMedia}
                style={{
                  backgroundImage,
                }}
                aria-hidden="true"
              />

              <div className={styles.workCardContent}>
                <div className={styles.workIndex}>
                  {project.number}
                </div>

                <div className={styles.workMain}>
                  <span className={styles.workType}>
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                  <span className={styles.workLink}>
                    View project →
                  </span>
                </div>

                <p className={styles.workStatement}>
                  {project.statement}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
