import styles from "./Sports.module.css";

const capabilities = [
  ["01", "Immersive matchday experiences", "Bring fans into the atmosphere of the event."],
  ["02", "XR content production", "Capture sport for immersive presence."],
  ["03", "Platform & distribution", "Deliver across devices where audiences already are."],
  ["04", "Commercial strategy", "Create new inventory for sponsors and partners."],
  ["05", "Fan engagement & monetisation", "Turn presence into loyalty and revenue."],
];

export default function SportsCapabilities() {
  return (
    <section className={styles.capabilities}>
      <div className={styles.sectionLabel}>Our capabilities —</div>

      <div className={styles.capabilityList}>
        {capabilities.map(([number, title, copy]) => (
          <div key={number} className={styles.capabilityRow}>
            <span className={styles.capabilityNumber}>{number}</span>
            <strong>{title}</strong>
            <span className={styles.capabilityCopy}>{copy}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
