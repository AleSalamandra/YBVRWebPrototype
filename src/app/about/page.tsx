import type { Metadata } from "next";
import Image from "next/image";

import styles from "./About.module.css";


export const metadata: Metadata = {
  title: "About Us",
  description:
    "From YBVR to YB — the evolution of a global immersive media company.",
};


export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/brand/yb-symbol.svg"
          alt="YB"
          width={360}
          height={360}
          priority
          className={styles.heroLogo}
        />

        <div className={styles.heroCopy}>
          <strong>
            Immersive experiences
          </strong>

          <span>
            A global media company for an expanded world
          </span>
        </div>
      </section>


      <section
        id="about"
        className={styles.about}
      >
        <h1 className={styles.pageTitle}>
          About us
        </h1>

        <h2 className={styles.storyTitle}>
          From YBVR to YB
        </h2>


        <div className={styles.story}>
          <p className={styles.storyLead}>
            YBVR started with a simple idea: the most powerful
            moments are not just watched. They are felt.
          </p>


          <div className={styles.storyGroup}>
            <p>
              We began by rethinking how audiences could
              experience sport through immersive technology,
              moving beyond flat screens and fixed camera
              angles to bring fans directly into the action.
            </p>

            <p>
              But as we built these experiences, we started
              to see something bigger.
            </p>

            <p>
              By listening to audiences and collaborating
              with rights holders and partners, we expanded
              into new formats across sport, music, and
              culture. The experiences we were creating no
              longer fit inside a single technology, and
              what began as a company focused on VR became
              something much broader. It was time for our
              name to evolve with us.
            </p>
          </div>


          <div className={styles.storyGroup}>
            <p>
              Over time, YBVR became bigger than VR. Our work
              expanded, our partners challenged us to go
              further, and the experiences we were creating
              no longer fit inside one technology or one
              definition.
            </p>

            <p>
              YB reflects who we are today and where we are
              going next: a company that brings together
              industry expertise, creative production, and
              technology to create new ways for audiences to
              experience the moments that matter.
            </p>
          </div>


          <div className={styles.storyGroup}>
            <p className={styles.storyIntro}>
              That evolution is now represented through
              three core areas:
            </p>

            <div className={styles.divisions}>
              <p>
                <strong>
                  YB Studios
                </strong>

                <span>
                  Creates and produces immersive and spatial
                  content across sport, music, culture, and
                  entertainment.
                </span>
              </p>

              <p>
                <strong>
                  YB Sports
                </strong>

                <span>
                  Brings together our expertise in sports,
                  rights, partnerships, and fan engagement.
                </span>
              </p>

              <p>
                <strong>
                  YB Tech
                </strong>

                <span>
                  Develops the technology that powers,
                  distributes, and scales those experiences.
                </span>
              </p>
            </div>
          </div>


          <div className={styles.storyGroup}>
            <p>
              Together, they allow us to work across the full
              journey, from an idea and a live moment to the
              content, technology, and platform that bring it
              to an audience.
            </p>

            <p>
              Our products, including Xtadium, Xtadium Music,
              and CultVRe, are where those capabilities come
              together.
            </p>
          </div>


          <div className={styles.storyGroup}>
            <p>
              Nine years later, almost everything around us
              has changed. The technology has changed. The
              platforms have changed. The way people watch,
              listen, and connect has changed. And YB has
              changed with it.
            </p>

            <p className={styles.storyStatement}>
              But the idea that started everything remains
              the same.
            </p>
          </div>


          <p className={styles.storyClosing}>
            We want people to feel closer.
            <br />
            Closer to the action. Closer to the artist.
            Closer to the story.
            <br />
            Closer to the moments they care about.
          </p>
        </div>


        <div
          className={styles.evolution}
          aria-label="YB brand evolution"
        >
          <div className={styles.evolutionLogo}>
            <Image
              src="/brand/logo_ybvr_1.svg"
              alt="Original YBVR logo"
              width={420}
              height={180}
            />
          </div>

          <span
            className={styles.evolutionArrow}
            aria-hidden="true"
          >
            →
          </span>

          <div className={styles.evolutionLogo}>
            <Image
              src="/brand/logo_ybvr_2.svg"
              alt="Second YBVR logo"
              width={420}
              height={180}
            />
          </div>

          <span
            className={styles.evolutionArrow}
            aria-hidden="true"
          >
            →
          </span>

          <div
            className={[
              styles.evolutionLogo,
              styles.evolutionLogoCurrent,
            ].join(" ")}
          >
            <Image
              src="/brand/yb-symbol.svg"
              alt="Current YB logo"
              width={240}
              height={240}
            />
          </div>
        </div>
      </section>
    </main>
  );
}