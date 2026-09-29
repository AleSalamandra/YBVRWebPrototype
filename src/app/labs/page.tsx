import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

import styles from "./Labs.module.css";


export const metadata: Metadata = {
  title: "YB Labs | YB",
  description:
    "YB Labs is the experimentation arm of YB Group, exploring emerging technologies that can shape the future of immersive media.",
};


/* ========================================
   RESEARCH AREAS
======================================== */

const areas = [
  {
    number: "01",
    title: "Future of Content",
    description:
      "Exploring truly novel ways to capture, represent and distribute reality.",
    examples: [
      "3D / 4D Gaussian Splatting content generation",
      "Transmission of volumetric content at scale",
      "World models for immersive experiences",
    ],
    image: "/media/labs/researcharea_1.png",
    imagePosition: "center center",
  },

  {
    number: "02",
    title: "Media Enrichment",
    description:
      "We already work with massive amounts of media. Labs explores how emerging AI and XR technologies can make that content richer, more spatial and more engaging — while keeping video at the center of the experience.",
    examples: [
      "AI upscaling workflows for immersive media",
      "Automatic spatialization of content",
      "Flat-to-immersive content generation",
    ],
    image: "/media/labs/researcharea_2.png",
    imagePosition: "center center",
  },

  {
    number: "03",
    title: "Applied AI",
    description:
      "Continuously evaluating how advances in AI models, agents and generative tools can improve YB products, production workflows and internal operations.",
    examples: [
      "Agentic workflows for production tooling",
      "3D content generation for tabletop experiences",
      "AI-generated clips and highlights for sports content",
    ],
    image: "/media/labs/researcharea_3.png",
    imagePosition: "center center",
  },

  {
    number: "04",
    title: "Emerging Verticals",
    description:
      "Exploring industries where YB's technology, infrastructure and immersive expertise can create new value.",
    examples: [
      "Health & pharma",
      "Defense",
      "Education",
    ],
    image: "/media/labs/researcharea_4.png",
    imagePosition: "center center",
  },
];


/* ========================================
   WORKFLOW
======================================== */

const workflow = [
  {
    number: "01",
    title: "Scout",
    text:
      "Track research, vendors and community signals across the technologies and content areas relevant to YB.",
    image: "/media/labs/scout.png",
  },

  {
    number: "02",
    title: "Validate",
    text:
      "Build rapid prototypes and working proofs of concept using real YB media and production workflows. Test ideas with customers and internal teams.",
    image: "/media/labs/validate.png",
  },

  {
    number: "03",
    title: "Decide",
    text:
      "Every experiment reaches an explicit outcome. We kill it, keep exploring, or graduate it into YB products and operations.",
    image: "/media/labs/decide.png",
  },
];


/* ========================================
   PAGE
======================================== */

export default function LabsPage() {
  return (
    <main className={styles.page}>

      {/* ========================================
          HERO
      ======================================== */}

      <section className={styles.hero}>

        <Image
          src="/media/labs/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroMedia}
        />

        <div
          className={styles.heroGradient}
          aria-hidden="true"
        />

        <div
          className={styles.grain}
          aria-hidden="true"
        />

        <Container className={styles.heroInner}>

          <div className={styles.heroIdentity}>

            <Image
              src="/brand/Logo_YBLabs.svg"
              alt="YB Labs"
              width={520}
              height={160}
              priority
              className={styles.heroLogo}
            />

          </div>


          <div className={styles.heroBottom}>

            <p className={styles.heroEyebrow}>
              Experimentation · Research · Emerging technology
            </p>

            <h1 className={styles.heroTitle}>
              Exploring what
              <br />
              comes next.
            </h1>

            <p className={styles.heroDescription}>
              The experimentation arm of YB Group, focused on
              emerging technologies that sustain and expand
              YB&apos;s technological edge.
            </p>

          </div>

        </Container>

      </section>


      {/* ========================================
          MISSION
      ======================================== */}

      <section className={styles.mission}>

        <Container>

          <div className={styles.sectionHeader}>

            <span className={styles.sectionNumber}>
              01
            </span>

            <span className={styles.sectionLabel}>
              Mission
            </span>

          </div>


          <div className={styles.missionGrid}>

            <h2 className={styles.missionTitle}>
              Building what
              <br />
              comes next.
            </h2>


            <div className={styles.missionCopy}>

              <p className={styles.missionLead}>
                YB Labs exists to keep YB at the forefront
                of immersive technology.
              </p>

              <p>
                We identify the technologies and ideas that can
                strengthen our products and operations today,
                while developing novel approaches that can become
                the intellectual property behind tomorrow&apos;s
                YB products.
              </p>

            </div>

          </div>

        </Container>

      </section>


      {/* ========================================
          AREAS OF EXPLORATION
      ======================================== */}

      <section className={styles.areas}>

        <Container>

          <div className={styles.sectionHeader}>

            <span className={styles.sectionNumber}>
              02
            </span>

            <span className={styles.sectionLabel}>
              Areas of exploration
            </span>

          </div>


          <div className={styles.areasIntro}>

            <h2>
              Where we&apos;re
              <br />
              experimenting.
            </h2>

            <p>
              Labs works at the intersection of immersive media,
              artificial intelligence and emerging computing —
              turning new technological possibilities into
              tangible experiments.
            </p>

          </div>

        </Container>


        <div className={styles.areaList}>

          {areas.map((area) => (
            <article
              key={area.number}
              className={styles.area}
            >

              <div className={styles.areaVisual}>

                <Image
                  src={area.image}
                  alt=""
                  fill
                  sizes="100vw"
                  className={styles.areaImage}
                  style={{
                    objectPosition:
                      area.imagePosition,
                  }}
                />

                <div
                  className={styles.areaGradient}
                  aria-hidden="true"
                />

                <div
                  className={styles.areaGrain}
                  aria-hidden="true"
                />

              </div>


              <Container className={styles.areaContent}>

                <div className={styles.areaTop}>

                  <span className={styles.areaNumber}>
                    {area.number}
                  </span>

                  <span className={styles.areaKicker}>
                    Research area
                  </span>

                </div>


                <div className={styles.areaGrid}>

                  <h3 className={styles.areaTitle}>
                    {area.title}
                  </h3>


                  <div className={styles.areaCopy}>

                    <p className={styles.areaDescription}>
                      {area.description}
                    </p>


                    <div className={styles.examples}>

                      <span className={styles.examplesLabel}>
                        Current exploration
                      </span>

                      <ul className={styles.examplesList}>

                        {area.examples.map(
                          (example) => (
                            <li key={example}>
                              {example}
                            </li>
                          ),
                        )}

                      </ul>

                    </div>

                  </div>

                </div>

              </Container>

            </article>
          ))}

        </div>

      </section>


      {/* ========================================
          HOW WE WORK
      ======================================== */}

      <section className={styles.process}>

        <Container>

          <div className={styles.sectionHeader}>

            <span className={styles.sectionNumber}>
              03
            </span>

            <span className={styles.sectionLabel}>
              How we work
            </span>

          </div>


          <div className={styles.processHeading}>

            <h2>
              From signal
              <br />
              to product.
            </h2>

            <p>
              Research only matters when it creates a decision.
              Every experiment moves through a simple cycle.
            </p>

          </div>


          <div className={styles.processGrid}>

            {workflow.map((step) => (
              <article
                key={step.number}
                className={styles.processStep}
              >

                <Image
                  src={step.image}
                  alt=""
                  fill
                  sizes="(max-width: 1100px) 100vw, 33vw"
                  className={styles.processImage}
                />

                <div
                  className={styles.processImageOverlay}
                  aria-hidden="true"
                />


                <div className={styles.processStepTop}>

                  <span className={styles.processNumber}>
                    {step.number}
                  </span>

                  <div
                    className={styles.processDot}
                    aria-hidden="true"
                  />

                </div>


                <div className={styles.processStepBottom}>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </div>

              </article>
            ))}

          </div>


          <div className={styles.outcomes}>

            <span className={styles.outcomesLabel}>
              Experiment outcomes
            </span>


            <div className={styles.outcomeList}>

              <div className={styles.outcome}>
                <span>
                  01
                </span>

                Kill
              </div>


              <div className={styles.outcome}>
                <span>
                  02
                </span>

                Keep exploring
              </div>


              <div
                className={[
                  styles.outcome,
                  styles.outcomeActive,
                ].join(" ")}
              >
                <span>
                  03
                </span>

                Graduate
              </div>

            </div>

          </div>

        </Container>

      </section>


      {/* ========================================
          CLOSING
      ======================================== */}

      <section className={styles.closing}>

        <div
          className={styles.closingGlow}
          aria-hidden="true"
        />

        <div
          className={styles.grain}
          aria-hidden="true"
        />

        <Container className={styles.closingInner}>

          <span className={styles.closingLabel}>
            YB Labs
          </span>


          <h2 className={styles.closingTitle}>
            From experiment
            <br />
            to product.
          </h2>


          <p className={styles.closingText}>
            Labs explores what could become possible.
            YB turns the ideas that matter into technology,
            products and experiences.
          </p>


          <Link
            href="/tech"
            className={styles.closingLink}
          >

            <span>
              Explore YB Tech
            </span>

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 12h13M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </Link>

        </Container>

      </section>

    </main>
  );
}