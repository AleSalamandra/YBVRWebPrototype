import styles from "./Studios.module.css";


const capabilities = [
  ["01", "Immersive film", "Cinematic storytelling for real and imagined worlds."],
  ["02", "Virtual production", "Real-time worlds. Real possibilities."],
  ["03", "Branded experiences", "Immersive narratives built around people and brands."],
  ["04", "Live experiences", "Shared moments designed for presence and scale."],
  ["05", "Spatial storytelling", "Stories created specifically for immersive media."],
];


export default function StudiosCapabilities() {
  return (
    <section className={styles.capabilities}>
      <div className={styles.sectionLabel}>
        Our capabilities —
      </div>

      <div className={styles.capabilityList}>
        {capabilities.map(([number, title, copy]) => (
          <div
            key={number}
            className={styles.capabilityRow}
          >
            <span className={styles.capabilityNumber}>
              {number}
            </span>

            <strong>{title}</strong>

            <span className={styles.capabilityCopy}>
              {copy}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
