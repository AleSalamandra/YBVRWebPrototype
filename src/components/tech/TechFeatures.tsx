import { resolvePublicAsset } from "@/lib/resolvePublicAsset";

import styles from "./Tech.module.css";


const features = [
  {
    label: "Consumer experience —",
    title: "Immersive apps",
    body:
      "Consumer apps for playing spatial video across mobile (iOS / Android), Meta Quest, Apple Vision Pro, and Android XR. White-label, ready to ship: built-in authentication, user management, and multi-view playback.",
    image: "media/tech/apps",
    sideNote: [
      "iOS",
      "Android",
      "Meta Quest",
      "Apple Vision Pro",
      "Android XR",
      "Pico",
    ],
  },
  {
    label: "For builders —",
    title: "Video SDKs",
    body:
      "Cross-platform SDKs that drop immersive video playback into any client app. Modular and documented, so partners integrate without building a video stack from scratch.",
    image: "media/tech/sdks",
    sideNote: [
      "Simple",
      "Flexible",
      "Cross-platform",
      "Well documented",
    ],
  },
  {
    label: "Distribution —",
    title: "YB Media Center",
    body:
      "The distribution backbone. Ingests video from providers, enriches it in real time (stats, graphics, ads, extra feeds), and routes it to every endpoint that needs it — YB's own apps and SDKs, YouTube VR, immersive domes, and beyond. Built node-by-node to scale.",
    image: "media/tech/media-center",
    sideNote: [
      "Ingest",
      "Enrich",
      "Route",
      "Scale",
    ],
  },
  {
    label: "What’s next —",
    title: "New Business Lines",
    intro:
      "Where YB’s know-how opens new markets.",
    subTitle:
      "AI Smart Glasses for Sport Companion (Project Apollo)",
    body:
      "An in-venue companion experience — realtime info, betting / fantasy integration, and specialized assistants (e.g. a triathlon training assistant) — built for the Meta and Google AI glasses ecosystem.",
    image: "media/tech/new-business",
    sideNote: [
      "Continuous scanning",
      "Adjacent immersive",
      "and sport-tech verticals.",
    ],
  },
];


const IMAGE_GRADIENT =
  "linear-gradient(90deg, rgba(9,9,13,.12) 0%, rgba(9,9,13,.02) 58%, rgba(9,9,13,.36) 100%)";


export default function TechFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featureList}>
        {features.map((feature) => {
          const image =
            resolvePublicAsset(
              feature.image
            );

          const backgroundImage =
            image
              ? `${IMAGE_GRADIENT}, url("${image}")`
              : IMAGE_GRADIENT;


          return (
            <article
              key={feature.title}
              className={styles.feature}
            >
              <div className={styles.featureCopy}>
                <span className={styles.sectionLabel}>
                  {feature.label}
                </span>

                <h2>
                  {feature.title}
                </h2>

                {feature.intro && (
                  <p className={styles.featureIntro}>
                    {feature.intro}
                  </p>
                )}

                {feature.subTitle && (
                  <h3 className={styles.featureSubTitle}>
                    {feature.subTitle}
                  </h3>
                )}

                <p className={styles.featureBody}>
                  {feature.body}
                </p>
              </div>

              <div className={styles.featureVisual}>
                <div
                  className={styles.featureMedia}
                  aria-hidden="true"
                  style={{
                    backgroundImage,
                  }}
                />

                <div className={styles.featureSideNote}>
                  {feature.sideNote.map(
                    (line) => (
                      <span key={line}>
                        {line}
                      </span>
                    )
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
