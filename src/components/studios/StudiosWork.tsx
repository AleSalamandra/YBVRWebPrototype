import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Studios.module.css";


const projects = [
  {
    number: "01",
    type: "Immersive film",
    title: "The Nutcracker Experience",
    description: "A cinematic journey beyond our world.",
    statement: "A classic story full of new emotions.",
  },
  {
    number: "02",
    type: "Live immersive",
    title: "Stadium Stories",
    description: "A front-row feeling from anywhere.",
    statement: "Live moments built to feel closer.",
  },
  {
    number: "03",
    type: "Branded experience",
    title: "Inside the Moment",
    description: "A spatial story designed around the audience.",
    statement: "Brand storytelling beyond the flat screen.",
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
