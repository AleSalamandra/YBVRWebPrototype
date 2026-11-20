import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";

import BowlContactForm from "./BowlContactForm";
import styles from "./Bowl.module.css";

export const metadata: Metadata = {
  title: {
    absolute:
      "YB Bowl | Immersive Dome Experiences for Brands & Venues",
  },
  description:
    "Discover YB Bowl, customisable 180° to 360° immersive LED environments for sports, brand activations, entertainment and cultural experiences. No headsets required.",
  alternates: {
    canonical: "https://www.ybvr.com/yb-bowl",
  },
  openGraph: {
    title: "YB Bowl | An experience worth stepping inside.",
    description: "Shared immersion. No headsets required.",
    url: "https://www.ybvr.com/yb-bowl",
    type: "website",
    images: [
      {
        url: "https://www.ybvr.com/media/yb-bowl/hero.png",
        alt: "YB Bowl concept visualisation",
      },
    ],
  },
};

const media = "/media/yb-bowl";

const features = [
  {
    title: "180°–360°",
    description: "Panoramic immersion",
  },
  {
    title: "No headsets",
    description: "Shared immersive experiences",
  },
  {
    title: "Custom-built",
    description: "Tailored environments",
  },
  {
    title: "Flexible formats",
    description: "Temporary or permanent",
  },
];

const experiences = [
  {
    number: "01",
    title: "Inside the experience",
    image: "interior.png",
    alt: "Interior concept of an immersive LED cylinder",
    paragraphs: [
      "Surround audiences with immersive sports content, live entertainment, branded storytelling, and interactive experiences.",
      "From match highlights to exclusive content, bring people closer to the moments that matter.",
    ],
  },
  {
    number: "02",
    title: "Outside the experience",
    image: "exterior.png",
    alt: "Exterior concept with customisable LED displays",
    paragraphs: [
      "Turn the exterior of the dome into a branded environment with customisable LED displays.",
      "Create additional opportunities for sponsorship, advertising and brand visibility before visitors even step inside.",
    ],
  },
];

const applications = [
  {
    number: "01",
    category: "SPORTS",
    title: "Sports & Fan Engagement",
    image: "sports.png",
    alt: "Immersive sports fan experience concept",
    paragraphs: [
      "Bring fans closer to the action through immersive highlights, exclusive behind-the-scenes content and shared sporting experiences.",
      "Ideal for stadiums, fan zones, sporting events and hospitality environments.",
    ],
  },
  {
    number: "02",
    category: "BRANDS",
    title: "Brand Activations",
    image: "brand.png",
    alt: "Immersive brand activation concept",
    paragraphs: [
      "Create engaging brand experiences that go beyond traditional advertising.",
      "From product launches to experiential campaigns, YB Bowl offers brands a new way to connect with audiences.",
    ],
  },
  {
    number: "03",
    category: "CULTURE",
    title: "Culture & Entertainment",
    image: "culture.png",
    alt: "Immersive cultural experience concept",
    paragraphs: [
      "Bring stories, performances, and cultural content to life through shared immersive experiences.",
      "Designed for entertainment venues, cultural institutions, visitor attractions, and exhibitions.",
    ],
  },
];

const formats = [
  {
    number: "01",
    title: "Temporary Activations",
    image: "temporary.png",
    alt: "Temporary immersive installation concept",
    tag: "RENTAL OPTIONS AVAILABLE",
    paragraphs: [
      "Bring YB Bowl to your next event through a temporary installation.",
      "Designed for fan zones, product launches, brand activations, and special events, with rental options available.",
    ],
  },
  {
    number: "02",
    title: "Permanent Installations",
    image: "permanent.png",
    alt: "Permanent immersive installation concept",
    tag: "CUSTOM-BUILT",
    paragraphs: [
      "Create a lasting immersive destination with a custom-built installation designed around your venue and audience.",
      "Suitable for sports venues, entertainment destinations, and cultural spaces.",
    ],
  },
];

function SectionMeta({
  label,
  number,
}: {
  label: string;
  number: string;
}) {
  return (
    <div className={styles.sectionMeta}>
      <span>{label}</span>
      <span>{number} / YB BOWL</span>
    </div>
  );
}

function Visual({
  image,
  alt,
  className = "",
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`${styles.visual} ${className}`}>
      <div
        className={styles.visualImage}
        role="img"
        aria-label={alt}
        style={
          {
            "--visual-image": `url("${media}/${image}")`,
          } as CSSProperties
        }
      />

      <figcaption className={styles.conceptLabel}>
        Concept visualisation
      </figcaption>
    </figure>
  );
}

export default function YBBowlPage() {
  return (
    <div className={styles.page}>

      {/* 01 — HERO */}

      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          aria-hidden="true"
        />

        <div
          className={styles.heroShade}
          aria-hidden="true"
        />

        <div className={styles.heroContent}>
          <div className={styles.identity}>
            <Image
              src="/brand/yb-symbol.svg"
              alt="YB"
              width={64}
              height={64}
              className={styles.symbol}
              priority
            />

            <span className={styles.identityDivider} />

            <span>IMMERSIVE EXPERIENCES</span>
          </div>

          <div className={styles.heroCopy}>
            <span className={styles.productName}>
              YB BOWL
            </span>

            <h1>
              An experience worth
              <br />
              stepping inside.
            </h1>

            <p className={styles.heroSubtitle}>
              Shared immersion. No headsets required.
            </p>

            <p className={styles.heroDescription}>
              YB Bowl transforms physical spaces into shared
              immersive experiences, bringing audiences
              closer to sports, entertainment, and culture
              through customisable panoramic LED
              environments.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#introduction"
                className={styles.primaryButton}
              >
                Explore YB Bowl
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#contact"
                className={styles.secondaryButton}
              >
                Discuss your project
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.heroBottom}>
            <span>SHARED IMMERSIVE ENVIRONMENTS</span>
            <span>CONCEPT VISUALISATION</span>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}

      <section
        className={styles.features}
        aria-label="YB Bowl features"
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className={styles.feature}
          >
            <strong>{feature.title}</strong>
            <span>{feature.description}</span>
          </div>
        ))}
      </section>

      {/* 02 — INTRODUCTION */}

      <section
        id="introduction"
        className={styles.section}
        aria-labelledby="introduction-title"
      >
        <SectionMeta
          label="INTRODUCING YB BOWL"
          number="02"
        />

        <div className={styles.introGrid}>
          <div className={styles.introCopy}>
            <h2 id="introduction-title">
              Immersion is
              <br />
              <em>better together.</em>
            </h2>

            <p className={styles.lead}>
              YB Bowl brings immersive content beyond
              individual headsets and into shared physical
              environments.
            </p>

            <p>
              Using panoramic LED displays and tailor-made
              audiovisual content, it allows audiences to
              step inside sports, entertainment, and branded
              experiences together.
            </p>

            <p>
              From live events and exclusive
              behind-the-scenes footage to immersive
              storytelling, every experience can be adapted
              to the audience, venue, and occasion.
            </p>
          </div>

          <Visual
            image="introduction.png"
            alt="YB Bowl panoramic LED environment concept"
            className={styles.introVisual}
          />
        </div>
      </section>

      {/* 03 — THE EXPERIENCE */}

      <section
        id="experience"
        className={`${styles.section} ${styles.experienceSection}`}
        aria-labelledby="experience-title"
      >
        <SectionMeta
          label="THE EXPERIENCE"
          number="03"
        />

        <div className={styles.sectionHeading}>
          <h2 id="experience-title">
            More than a screen.
            <br />
            <em>A shared experience.</em>
          </h2>
        </div>

        <div className={styles.twoColumns}>
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className={styles.experienceCard}
            >
              <Visual
                image={experience.image}
                alt={experience.alt}
                className={styles.experienceVisual}
              />

              <div className={styles.cardCopy}>
                <span className={styles.cardNumber}>
                  {experience.number}
                </span>

                <h3>{experience.title}</h3>

                {experience.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04 — APPLICATIONS */}

      <section
        id="applications"
        className={styles.section}
        aria-labelledby="applications-title"
      >
        <SectionMeta
          label="APPLICATIONS"
          number="04"
        />

        <div className={styles.sectionHeading}>
          <h2 id="applications-title">
            One concept.
            <br />
            <em>Endless possibilities.</em>
          </h2>
        </div>

        <div className={styles.threeColumns}>
          {applications.map((application) => (
            <article
              key={application.number}
              className={styles.applicationCard}
            >
              <Visual
                image={application.image}
                alt={application.alt}
                className={styles.applicationVisual}
              />

              <div className={styles.applicationCopy}>
                <div className={styles.applicationMeta}>
                  <span>{application.category}</span>
                  <span>{application.number}</span>
                </div>

                <h3>{application.title}</h3>

                {application.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 05 — FLEXIBLE FORMATS */}

      <section
        id="formats"
        className={`${styles.section} ${styles.formatsSection}`}
        aria-labelledby="formats-title"
      >
        <SectionMeta
          label="BUILT AROUND YOUR PROJECT"
          number="05"
        />

        <div className={styles.formatsHeading}>
          <h2 id="formats-title">
            Your space.
            <br />
            <em>Your experience.</em>
          </h2>

          <p>
            Every YB Bowl installation is designed around
            the needs of the project, with flexible
            configurations ranging from 180° to 360° and
            dimensions tailored to the venue.
          </p>
        </div>

        <div className={styles.twoColumns}>
          {formats.map((format) => (
            <article
              key={format.number}
              className={styles.formatCard}
            >
              <Visual
                image={format.image}
                alt={format.alt}
                className={styles.formatVisual}
              />

              <div className={styles.formatCopy}>
                <span className={styles.formatTag}>
                  {format.tag}
                </span>

                <h3>{format.title}</h3>

                {format.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <a
                  href="#contact"
                  className={styles.textLink}
                >
                  Discuss your project
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.technicalNote}>
          <div className={styles.technicalDegrees}>
            180° — 360°
          </div>

          <p>
            Configurations can be adapted for indoor or
            outdoor environments, with technical design
            and content developed according to project
            requirements.
          </p>
        </div>
      </section>

      {/* 06 — CONTACT */}

      <section
        id="contact"
        className={styles.contactSection}
        aria-labelledby="contact-title"
      >
        <div
          className={styles.contactBackground}
          aria-hidden="true"
        />

        <div
          className={styles.contactShade}
          aria-hidden="true"
        />

        <div className={styles.contactInner}>
          <SectionMeta
            label="LET'S BUILD SOMETHING TOGETHER"
            number="06"
          />

          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.productName}>
                YB BOWL
              </span>

              <h2 id="contact-title">
                Bring your audience
                <br />
                <em>inside the story.</em>
              </h2>

              <p className={styles.lead}>
                Planning a brand activation, fan experience,
                or permanent immersive installation?
              </p>

              <p>
                Talk to our team about creating a YB Bowl
                experience tailored to your project.
              </p>
            </div>

            <BowlContactForm />
          </div>

          <div className={styles.contactBottom}>
            <span>YB BOWL / IMMERSIVE EXPERIENCES</span>
            <span>CONCEPT VISUALISATION</span>
          </div>
        </div>
      </section>
    </div>
  );
}