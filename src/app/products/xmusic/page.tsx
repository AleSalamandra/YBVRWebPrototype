
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import XtadiumFeatures from "./XtadiumFeatures";
import styles from "./page.module.css";

const META_URL =
  "https://www.meta.com/experiences/xtadium-immersive-sports/7281839885191361/";

const INSTAGRAM_URL =
  "https://www.instagram.com/xtadiumvr/";

export const metadata: Metadata = {
  title: "Xtadium | Immersive Sports — YB",
  description:
    "Step inside the game with Xtadium. Experience immersive sports, virtual and mixed reality, multiple camera angles and exclusive moments on Meta Quest.",
  alternates: {
    canonical: "/products/xtadium",
  },
  openGraph: {
    title: "Xtadium — Sport, Experienced from the Inside",
    description:
      "Get closer to the action with YB's immersive sports platform.",
    type: "website",
  },
};

const statistics = [
  {
    value: "750K+",
    label: "XTADIUM DOWNLOADS",
  },
  {
    value: "9",
    label: "YEARS IN IMMERSIVE STREAMING",
  },
  {
    value: "4",
    label: "MARKETS — UK, US, DE, ES",
  },
];

const partners = [
  { name: "UFC", logo: null },
  { name: "NASCAR", logo: null },
  { name: "DAZN", logo: null },
  {
    name: "EuroLeague Basketball",
    logo: "/brand/external/logo_euroleague.svg",
  },
  {
    name: "Paris Saint-Germain",
    logo: "/brand/external/logo_psg.svg",
  },
  { name: "X Games", logo: null },
];

const socialPosts = [
  {
    number: "01",
    title: "Closer to the action.",
    label: "IMMERSIVE SPORTS",
    image: "/media/xtadium/social-01.jpg",
  },
  {
    number: "02",
    title: "Beyond every angle.",
    label: "MULTI-CAMERA",
    image: "/media/xtadium/social-02.jpg",
  },
  {
    number: "03",
    title: "Be there from anywhere.",
    label: "SPORT WITHOUT LIMITS",
    image: "/media/xtadium/social-03.jpg",
  },
  {
    number: "04",
    title: "Experience the moment.",
    label: "VIRTUAL & MIXED REALITY",
    image: "/media/xtadium/social-04.jpg",
  },
];

export default function XtadiumPage() {
  return (
    <main className={styles.page}>

      {/* =====================================
          HERO
      ===================================== */}

      <section
        className={styles.hero}
        aria-label="Xtadium immersive sports"
      >
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/home/xtadium_background.png"
          aria-hidden="true"
        >
          <source
            src="/media/xtadium/xtadium_hero.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className={styles.heroGradient}
          aria-hidden="true"
        />

        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>
            YB IMMERSIVE EXPERIENCES
          </span>

          <Image
            src="/brand/xtadium_logo.svg"
            alt="Xtadium"
            width={1000}
            height={300}
            priority
            className={styles.heroLogo}
          />

          <div className={styles.heroDownload}>
            <h1>Step inside the game.</h1>

            <p>
              Experience sport from a whole new
              perspective.
            </p>

            <a
              href={META_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Download Xtadium for Meta Quest
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          THE PLATFORM
      ===================================== */}

      <section
        id="experience"
        className={styles.platform}
        aria-labelledby="platform-title"
      >
        <div className={styles.sectionMeta}>
          <span>THE PLATFORM</span>
          <span>BEYOND THE SCREEN</span>
        </div>

        <div className={styles.platformGrid}>
          <div>
            <h2 id="platform-title">
              Feel the game.
              <br />
              <em>For real.</em>
            </h2>
          </div>

          <div className={styles.platformCopy}>
            <p className={styles.lead}>
              The best seat in the house is wherever
              you are.
            </p>

            <p>
              Xtadium is YB's immersive sports platform,
              bringing fans closer to the action,
              atmosphere and emotion of sport.
              From courtside perspectives to
              behind-the-scenes experiences, discover
              the game in an entirely new way.
            </p>

            <p>
              Watch in virtual reality or bring
              multiple screens into your own space
              with mixed reality. Choose your
              perspective and make every moment
              your own.
            </p>

            <div className={styles.tags}>
              <span>IMMERSIVE SPORTS</span>
              <span>VIRTUAL REALITY</span>
              <span>MIXED REALITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FEATURES
      ===================================== */}

      <section
        id="features"
        className={styles.features}
        aria-labelledby="features-title"
      >
        <div className={styles.sectionMeta}>
          <span>THE WORLD OF XTADIUM</span>
          <span>EIGHT WAYS TO EXPERIENCE SPORT</span>
        </div>

        <div className={styles.sectionHeading}>
          <h2 id="features-title">
            More than watching.
            <br />
            <em>You're in the game.</em>
          </h2>

          <p>
            A new level of sports entertainment.
            Explore the tools that put you in
            control of your experience.
          </p>
        </div>

        <XtadiumFeatures />

        <div className={styles.sectionFooter}>
          <span>SPORT WITHOUT BOUNDARIES</span>
          <span>XTADIUM / YB</span>
        </div>
      </section>

      {/* =====================================
          IMMERSIVE SPORTS SPOTLIGHT
      ===================================== */}

      <section
        className={styles.spotlight}
        aria-labelledby="spotlight-title"
      >
        <div className={styles.sectionMeta}>
          <span>IMMERSIVE SPORTS</span>
          <span>01 / THE EXPERIENCE</span>
        </div>

        <div className={styles.spotlightGrid}>
          <div className={styles.spotlightCopy}>
            <div>
              <span className={styles.blueEyebrow}>
                BE THERE FROM ANYWHERE
              </span>

              <h2 id="spotlight-title">
                Every angle.
                <br />
                Every moment.
                <br />
                <em>Closer than ever.</em>
              </h2>

              <p className={styles.spotlightLead}>
                From the stadium to your living room.
              </p>

              <p className={styles.bodyCopy}>
                Step into immersive sports environments,
                discover perspectives beyond traditional
                broadcasting and explore new ways
                to connect with the teams, competitions
                and moments you love.
              </p>

              <p className={styles.bodyCopy}>
                Xtadium combines immersive storytelling,
                virtual and mixed reality, and
                interactive viewing capabilities in
                a single sports destination.
              </p>
            </div>

            <a
              href={META_URL}
              className={styles.textLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Experience Xtadium
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.spotlightVisual}>
            <span className={styles.visualTop}>
              XTADIUM / IMMERSIVE SPORTS
            </span>

            <div className={styles.visualBottom}>
              <span>SPORT, EXPERIENCED</span>
              <strong>FROM THE INSIDE.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          XTADIUM IN NUMBERS
      ===================================== */}

      <section
        className={styles.numbers}
        aria-labelledby="numbers-title"
      >
        <div className={styles.sectionMeta}>
          <span>THE XTADIUM STORY</span>
          <span>IN NUMBERS</span>
        </div>

        <h2 id="numbers-title">
          Xtadium in numbers.
        </h2>

        <div className={styles.numbersGrid}>
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className={styles.numberItem}
            >
              <strong>{statistic.value}</strong>
              <span>{statistic.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          COLLABORATIONS
      ===================================== */}

      <section
        className={styles.partners}
        aria-labelledby="partners-title"
      >
        <div className={styles.sectionMeta}>
          <span>OUR ECOSYSTEM</span>
          <span>WORLD-CLASS SPORT</span>
        </div>

        <h2 id="partners-title">
          Proudly collaborating
          <br />
          <em>with.</em>
        </h2>

        <div className={styles.partnersGrid}>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={styles.partnerCard}
              aria-label={partner.name}
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={210}
                  height={90}
                  className={styles.partnerLogo}
                />
              ) : (
                <span className={styles.partnerWordmark}>
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          SOCIAL MEDIA
      ===================================== */}

      <section
        className={styles.social}
        aria-labelledby="social-title"
      >
        <div className={styles.sectionMeta}>
          <span>FOLLOW THE EXPERIENCE</span>
          <span>@XTADIUMVR</span>
        </div>

        <div className={styles.socialHeader}>
          <div>
            <h2 id="social-title">
              Beyond the game.
              <br />
              <em>Stay connected.</em>
            </h2>

            <p>
              Highlights, exclusive moments and
              the latest from the world of Xtadium.
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            Follow on Instagram
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.socialGrid}>
          {socialPosts.map((post) => (
            <a
              key={post.number}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{
                backgroundImage: `linear-gradient(180deg, transparent 15%, rgba(0, 0, 0, 0.85)), url("${post.image}")`,
              }}
              aria-label={`Explore Xtadium on Instagram: ${post.title}`}
            >
              <span className={styles.socialCardTop}>
                {post.number} / XTADIUM
              </span>

              <div>
                <span className={styles.socialLabel}>
                  {post.label}
                </span>

                <h3>{post.title}</h3>
              </div>

              <span
                className={styles.socialArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================
          MANIFESTO
      ===================================== */}

      <section className={styles.manifesto}>
        <span className={styles.manifestoEyebrow}>
          A DIFFERENT WAY TO EXPERIENCE SPORT
        </span>

        <p>
          Closer to the action.
          <br />
          Closer to the atmosphere.
          <br />
          <em>Closer to the game.</em>
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
          <span>XTADIUM × YB</span>
          <span>GET THE APP</span>
        </div>

        <div className={styles.ctaContent}>
          <div>
            <Image
              src="/brand/xtadium_logo.svg"
              alt="Xtadium"
              width={620}
              height={185}
              className={styles.ctaLogo}
            />

            <h2>
              Step inside
              <br />
              <em>the game.</em>
            </h2>
          </div>

          <div className={styles.ctaRight}>
            <p>
              Your next sports experience is closer
              than you think. Discover Xtadium
              on Meta Quest.
            </p>

            <a
              href={META_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Download Xtadium
              <span aria-hidden="true">↗</span>
            </a>

            <Link
              href="/contact"
              className={styles.partnerLink}
            >
              Explore partnership opportunities
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
