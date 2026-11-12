
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CultVRe | Immersive Culture — YB",
  description:
    "Step inside culture with CultVRe, YB's immersive mixed reality platform for theatre, cinema, dance, art and travel.",
  alternates: {
    canonical: "/cultvre",
  },
  openGraph: {
    title: "CultVRe — Culture Beyond the Screen",
    description:
      "Discover a new dimension of cultural experiences through mixed reality.",
    type: "website",
  },
};

const experiences = [
  {
    number: "01",
    title: "Theatre & Cinema",
    description:
      "Go beyond the audience. Discover storytelling from perspectives traditional screens cannot offer.",
    className: styles.categoryOne,
  },
  {
    number: "02",
    title: "Dance & Performance",
    description:
      "Get closer to movement, expression and the artistry of world-class performances.",
    className: styles.categoryTwo,
  },
  {
    number: "03",
    title: "Art & Heritage",
    description:
      "Explore art, history and cultural spaces through immersive storytelling.",
    className: styles.categoryThree,
  },
  {
    number: "04",
    title: "Travel & Discovery",
    description:
      "Discover extraordinary places, cities and cultural landmarks from wherever you are.",
    className: styles.categoryFour,
  },
];

export default function CultvrePage() {
  return (
    <main className={styles.page}>

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className={styles.hero}
        aria-labelledby="cultvre-title"
      >
        <div
          className={styles.heroMedia}
          aria-hidden="true"
        >
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/home/cultvre_background.png"
          >
            <source
              src="/media/cultvre/cultvre_hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className={styles.heroShade} />

        <div className={styles.heroCenter}>
          <span className={styles.heroEyebrow}>
            YB IMMERSIVE EXPERIENCES
          </span>

          <Image
            src="/brand/cultvre_logo.svg"
            alt="CultVRe"
            width={1000}
            height={300}
            priority
            className={styles.heroLogo}
          />
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.heroCopy}>
            <h1 id="cultvre-title">
              Culture is meant
              <br />
              to be experienced.
            </h1>

            <p>
              Theatre, dance, cinema, art and extraordinary
              places. A new way to experience culture
              through mixed reality.
            </p>
          </div>

          <a
            href="#experience"
            className={styles.heroExplore}
          >
            Explore CultVRe
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <span className={styles.heroIndex}>
          01 / THE EXPERIENCE
        </span>
      </section>

      {/* =====================================
          THE PLATFORM
      ===================================== */}

      <section
        id="experience"
        className={styles.intro}
        aria-labelledby="experience-title"
      >
        <div className={styles.sectionMeta}>
          <span>THE PLATFORM</span>
          <span>BEYOND THE SCREEN</span>
        </div>

        <div className={styles.introGrid}>
          <div className={styles.introTitle}>
            <h2 id="experience-title">
              Don't just
              <br />
              watch culture.
              <br />
              <em>Step inside.</em>
            </h2>
          </div>

          <div className={styles.introRight}>
            <p className={styles.introLead}>
              The world's greatest stories were never
              meant to be confined to a screen.
            </p>

            <p className={styles.bodyCopy}>
              CultVRe is YB's immersive cultural platform,
              transforming the way audiences connect with
              performances, artistic expression and places.
              Using immersive content and mixed reality,
              it brings cultural experiences into a new
              dimension.
            </p>

            <p className={styles.bodyCopy}>
              From the energy of a ballet performance to
              the atmosphere of a historic landmark,
              CultVRe invites you to discover culture
              from perspectives that were previously
              out of reach.
            </p>

            <div className={styles.introTags}>
              <span>IMMERSIVE VIDEO</span>
              <span>MIXED REALITY</span>
              <span>SPATIAL STORYTELLING</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          THE WORLD OF CULTVRE
      ===================================== */}

      <section
        id="discover"
        className={styles.categories}
        aria-labelledby="categories-title"
      >
        <div className={styles.sectionMeta}>
          <span>THE WORLD OF CULTVRE</span>
          <span>FOUR WAYS TO EXPLORE</span>
        </div>

        <div className={styles.categoriesHeader}>
          <h2 id="categories-title">
            Every story.
            <br />
            <em>A new perspective.</em>
          </h2>

          <p>
            Immersive experiences designed to connect
            audiences with culture in all its forms.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className={[
                styles.category,
                experience.className,
              ].join(" ")}
            >
              <div className={styles.categoryTop}>
                <span className={styles.categoryNumber}>
                  {experience.number}
                </span>

                <span
                  className={styles.categorySymbol}
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              <div className={styles.categoryContent}>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.categoriesBottom}>
          <span>
            EXPLORE CULTURE WITHOUT BOUNDARIES
          </span>
          <span>
            CULTVRE / YB
          </span>
        </div>
      </section>

      {/* =====================================
          SAN FRANCISCO BALLET
      ===================================== */}

      <section
        id="featured"
        className={styles.feature}
        aria-labelledby="feature-title"
      >
        <div className={styles.sectionMeta}>
          <span>NOW FEATURING</span>
          <span>01 / FEATURED EXPERIENCE</span>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCopy}>
            <div>
              <p className={styles.featureEyebrow}>
                SAN FRANCISCO BALLET
              </p>

              <h2 id="feature-title">
                Nutcracker:
                <br />
                <em>The Immersive</em>
                <br />
                Experience.
              </h2>

              <p className={styles.featureDescription}>
                A timeless holiday tradition.
                <br />
                An entirely new perspective.
              </p>

              <p className={styles.featureBody}>
                Step inside Act I of San Francisco
                Ballet's iconic Nutcracker, with
                choreography by Helgi Tomasson.
                Discover the magic of the performance,
                its spectacular sets and costumes,
                and the musical world of the ballet
                through an immersive experience.
              </p>
            </div>

            <div className={styles.featureDetails}>
              <span className={styles.featureStatus}>
                <span
                  className={styles.statusDot}
                  aria-hidden="true"
                />
                LAUNCHING DECEMBER 4, 2026
              </span>

              <p>
                A collaboration between San Francisco
                Ballet, YB, Google and XREAL.
              </p>

              <p>
                Coming to Android XR and XREAL AURA.
              </p>
            </div>
          </div>

          <div className={styles.featureVisual}>
            <div className={styles.featureVisualTop}>
              <span>CULTVRE ORIGINAL EXPERIENCE</span>
              <span>2026</span>
            </div>

            <div className={styles.featureVisualBottom}>
              <span>SAN FRANCISCO BALLET</span>

              <strong>
                NUTCRACKER
              </strong>

              <span>
                THE IMMERSIVE EXPERIENCE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          MANIFESTO
      ===================================== */}

      <section className={styles.manifesto}>
        <span className={styles.manifestoEyebrow}>
          A DIFFERENT WAY TO EXPERIENCE CULTURE
        </span>

        <p>
          Closer to the performance.
          <br />
          Closer to the story.
          <br />
          <em>Closer to the moment.</em>
        </p>

        <div className={styles.manifestoFooter}>
          <span>IMMERSIVE BY NATURE</span>
          <span>POWERED BY YB</span>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className={styles.cta}>
        <div className={styles.sectionMeta}>
          <span>CULTVRE × YB</span>
          <span>WHAT'S NEXT</span>
        </div>

        <div className={styles.ctaContent}>
          <h2>
            Culture has
            <br />
            <em>no boundaries.</em>
          </h2>

          <div className={styles.ctaRight}>
            <p>
              Have a cultural experience worth sharing
              with the world? Let's bring it to new
              audiences in immersive reality.
            </p>

            <Link
              href="/contact"
              className={styles.ctaButton}
            >
              Partner with us
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
