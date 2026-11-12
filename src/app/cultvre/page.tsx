
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ExperienceGallery from "./ExperienceGallery";

import styles from "./page.module.css";
import heroStyles from "./CultvreHero.module.css";
import platformStyles from "./CultvrePlatform.module.css";

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

const stores = [
  {
    id: "apple",
    label: "Download on the App Store",
    href: "https://apps.apple.com/es/app/cultvre/id6759247469",
  },
  {
    id: "google",
    label: "Download on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.ybvr.androidnativeclient.cultVRe&hl=en",
  },
  {
    id: "meta",
    label: "Download on Meta Quest",
    href: "https://www.meta.com/es-la/experiences/cultvre-culture-comes-alive-in-vr/28427588560218368/",
  },
] as const;

export default function CultvrePage() {
  return (
    <main className={styles.page}>
      {/* =====================================
          HERO — CULTVRE
      ===================================== */}

      <section
        className={heroStyles.hero}
        aria-label="CultVRe immersive cultural experiences"
      >
        {/* LAYER 1 — BACKGROUND VIDEO */}

        <video
          className={heroStyles.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="/media/cultvre/cultvre_hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* LAYER 2 — ASSET 6 AT 50% */}

        <div
          className={heroStyles.gradient}
          aria-hidden="true"
        />

        {/* LAYER 3 — SUBTLE BLACK FADE */}

        <div
          className={heroStyles.heroShade}
          aria-hidden="true"
        />

        {/* LAYER 4 — CONTENT */}

        <div className={heroStyles.heroContent}>
          <span className={heroStyles.eyebrow}>
            YB IMMERSIVE EXPERIENCES
          </span>

          <Image
            src="/brand/cultvre_logo.svg"
            alt="CultVRe"
            width={1000}
            height={300}
            priority
            className={heroStyles.logo}
          />

          <div className={heroStyles.downloadSection}>
            <h1 className={heroStyles.downloadTitle}>
              Download the app!
            </h1>

            <div className={heroStyles.storeButtons}>
              {stores.map((store) => (
                <a
                  key={store.id}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={heroStyles.storeButton}
                  aria-label={`${store.label} (opens in a new tab)`}
                >
                  <span>{store.label}</span>

                  <span
                    className={heroStyles.storeArrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          THE PLATFORM
      ===================================== */}

      <section
        id="experience"
        className={[
          styles.intro,
          platformStyles.platform,
        ].join(" ")}
        aria-labelledby="experience-title"
      >
        <div className={styles.sectionMeta}>
          <span>THE PLATFORM</span>
          <span>BEYOND THE SCREEN</span>
        </div>

        <div className={styles.introGrid}>
          <div>
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
          FOUR WAYS TO EXPLORE
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

        <ExperienceGallery />

        <div className={styles.categoriesBottom}>
          <span>
            EXPLORE CULTURE WITHOUT BOUNDARIES
          </span>
          <span>CULTVRE / YB</span>
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
            <video
              className={styles.featureVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/press/nutcracker/snow-scene.png"
              aria-hidden="true"
            >
              <source
                src="/media/press/nutcracker/Teaser_Nutcracker_Web.mp4"
                type="video/mp4"
              />
            </video>

            <div className={styles.featureVideoShade} />

            <div className={styles.featureVisualTop}>
              <span>CULTVRE ORIGINAL EXPERIENCE</span>
              <span>2026</span>
            </div>

            <div className={styles.featureVisualBottom}>
              <span>SAN FRANCISCO BALLET</span>
              <strong>NUTCRACKER</strong>
              <span>THE IMMERSIVE EXPERIENCE</span>
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
