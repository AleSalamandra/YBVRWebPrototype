
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import XtadiumFeatures from "./XtadiumFeatures";
import styles from "./page.module.css";

/* ==========================================
   LINKS
========================================== */

const META_URL =
  "https://www.meta.com/experiences/xtadium-immersive-sports/7281839885191361/";

const INSTAGRAM_URL =
  "https://www.instagram.com/xtadiumvr/";

/* ==========================================
   METADATA
========================================== */

export const metadata: Metadata = {
  title: "Xtadium | Immersive Sports — YB",
  description:
    "Step inside the game with Xtadium. Discover immersive sports, multiple camera angles, interactive experiences and mixed reality on Meta Quest.",
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

/* ==========================================
   TYPES
========================================== */

type InstagramMedia = {
  id?: string;
  media_type?: string;
  thumbnail_url?: string;
  permalink?: string;
};

type SocialPost = {
  id: string;
  image?: string;
  video?: string;
  href: string;
  label: string;
  title: string;
  isInstagram: boolean;
};

type Statistic = {
  value: string;
  label: string;
};

type Partner = {
  name: string;
  logo: string;
};

/* ==========================================
   INSTAGRAM
========================================== */

function validHttpsUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;

  try {
    const url = new URL(value);

    return url.protocol === "https:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

async function getInstagramPosts(): Promise<SocialPost[]> {
  const token =
    process.env.XTADIUM_INSTAGRAM_ACCESS_TOKEN;

  if (!token) return [];

  const endpoint = new URL(
    "https://graph.instagram.com/me/media"
  );

  endpoint.searchParams.set(
    "fields",
    "id,media_type,thumbnail_url,permalink"
  );

  endpoint.searchParams.set("limit", "25");
  endpoint.searchParams.set("access_token", token);

  try {
    const response = await fetch(endpoint.toString(), {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) return [];

    const result = (await response.json()) as {
      data?: InstagramMedia[];
    };

    if (!Array.isArray(result.data)) return [];

    return result.data
      .filter((post) => post.media_type === "VIDEO")
      .map((post): SocialPost | null => {
        const image = validHttpsUrl(
          post.thumbnail_url
        );

        const href = validHttpsUrl(
          post.permalink
        );

        if (!post.id || !image || !href) {
          return null;
        }

        const hostname = new URL(href).hostname;

        if (
          hostname !== "www.instagram.com" &&
          hostname !== "instagram.com"
        ) {
          return null;
        }

        return {
          id: post.id,
          image,
          href,
          label: "INSTAGRAM / VIDEO",
          title: "Watch on Instagram",
          isInstagram: true,
        };
      })
      .filter(
        (post): post is SocialPost => post !== null
      )
      .slice(0, 4);
  } catch {
    return [];
  }
}

/* ==========================================
   LOCAL SOCIAL PREVIEWS
========================================== */

const fallbackPosts: SocialPost[] = [
  {
    id: "local-1",
    video: "/media/xtadium/front-row.mp4",
    href: INSTAGRAM_URL,
    label: "XTADIUM HIGHLIGHTS",
    title: "Closer to the action.",
    isInstagram: false,
  },
  {
    id: "local-2",
    video: "/media/xtadium/handtracking.mp4",
    href: INSTAGRAM_URL,
    label: "IMMERSIVE EXPERIENCES",
    title: "Inside the experience.",
    isInstagram: false,
  },
  {
    id: "local-3",
    video: "/media/xtadium/multi-game.mp4",
    href: INSTAGRAM_URL,
    label: "SPORT WITHOUT LIMITS",
    title: "Beyond every angle.",
    isInstagram: false,
  },
  {
    id: "local-4",
    video: "/media/xtadium/watch-party.mp4",
    href: INSTAGRAM_URL,
    label: "SHARED EXPERIENCES",
    title: "Better together.",
    isInstagram: false,
  },
];

/* ==========================================
   STATISTICS
========================================== */

const statistics: Statistic[] = [
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

/* ==========================================
   PARTNERS
========================================== */

const partners: Partner[] = [
  {
    name: "Deportivo",
    logo: "/brand/external/logo_depor.svg",
  },
  {
    name: "EuroLeague Basketball",
    logo: "/brand/external/logo_euroleague.svg",
  },
  {
    name: "FOX",
    logo: "/brand/external/logo_fox.svg",
  },
  {
    name: "Manchester City",
    logo: "/brand/external/logo_mancity.svg",
  },
  {
    name: "Meta",
    logo: "/brand/external/logo_meta.svg",
  },
  {
    name: "Paris Saint-Germain",
    logo: "/brand/external/logo_psg.svg",
  },
  {
    name: "Santander",
    logo: "/brand/external/logo_santander.svg",
  },
  {
    name: "SuperLeague",
    logo: "/brand/external/logo_superleague.svg",
  },
  {
    name: "XREAL",
    logo: "/brand/external/logo_xreal.svg",
  },
];

/* ==========================================
   PAGE
========================================== */

export default async function XtadiumPage() {
  const instagramPosts = await getInstagramPosts();

  const socialPosts =
    instagramPosts.length > 0
      ? instagramPosts
      : fallbackPosts;

  return (
    <main className={styles.page}>

      {/* =====================================
          01 — HERO

          VIDEO: xtadium_hero.mp4
          GRADIENT: 50%
      ===================================== */}

      <section
        className={styles.hero}
        aria-labelledby="xtadium-hero-title"
      >
        {/* BACKGROUND VIDEO */}

        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/home/xtadium_background.png"
          aria-hidden="true"
          disablePictureInPicture
        >
          <source
            src="/media/xtadium/xtadium_hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* BLUE GRADIENT — 50% */}

        <div
          className={styles.heroGradient}
          aria-hidden="true"
        />

        {/* BLACK FADE */}

        <div
          className={styles.heroShade}
          aria-hidden="true"
        />

        {/* HERO CONTENT */}

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
            <h1 id="xtadium-hero-title">
              Step inside the game.
            </h1>

            <p>
              Experience sport from a whole
              new perspective.
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
          02 — THE PLATFORM
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
              The best seat in the house
              is wherever you are.
            </p>

            <p>
              Xtadium is YB's immersive sports
              platform, bringing fans closer to
              the action, atmosphere and emotion
              of sport.
            </p>

            <p>
              From courtside perspectives to
              behind-the-scenes experiences,
              discover the game in an entirely
              new way.
            </p>

            <p>
              Watch in virtual reality or bring
              multiple screens into your own
              space with mixed reality.
              Choose your perspective and make
              every moment your own.
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
          03 — FEATURES
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
          04 — BE THERE FROM ANYWHERE
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
                broadcasting and explore new ways to
                connect with the teams, competitions
                and moments you love.
              </p>

              <p className={styles.bodyCopy}>
                Xtadium combines immersive storytelling,
                virtual and mixed reality, and interactive
                viewing capabilities in a single sports
                destination.
              </p>
            </div>

            <a
              href={META_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              Experience Xtadium
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.spotlightVisual}>
            <video
              className={styles.spotlightVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source
                src="/media/xtadium/extra-1.mp4"
                type="video/mp4"
              />
            </video>

            <div
              className={styles.spotlightShade}
              aria-hidden="true"
            />

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
          05 — XTADIUM IN NUMBERS
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
          06 — PARTNERS
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
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={100}
                unoptimized
                className={styles.partnerLogo}
              />
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          07 — INSTAGRAM
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
          {socialPosts.map((post, index) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              aria-label={
                post.isInstagram
                  ? "Watch this Xtadium post on Instagram"
                  : "Explore Xtadium on Instagram"
              }
            >
              {post.image ? (
                <Image
                  src={post.image}
                  alt="Xtadium Instagram video thumbnail"
                  fill
                  unoptimized
                  sizes="(max-width: 760px) 50vw, 25vw"
                  className={styles.socialImage}
                />
              ) : post.video ? (
                <video
                  className={styles.socialVideo}
                  src={post.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              ) : null}

              <div
                className={styles.socialShade}
                aria-hidden="true"
              />

              <div className={styles.socialCardTop}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                  {" / XTADIUM"}
                </span>

                <span
                  className={styles.socialPlay}
                  aria-hidden="true"
                >
                  ▶
                </span>
              </div>

              <div className={styles.socialCardBottom}>
                <span className={styles.socialLabel}>
                  {post.label}
                </span>

                <h3>{post.title}</h3>

                <span className={styles.socialCardAction}>
                  {post.isInstagram
                    ? "VIEW POST"
                    : "VISIT @XTADIUMVR"}

                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* =====================================
          08 — MANIFESTO
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
          09 — FINAL CTA
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
