import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./press-release.module.css";

export const metadata: Metadata = {
  title: "YBVR becomes YB as live immersive media moves beyond the headset",
  description:
    "The company behind Xtadium and CultVRe is expanding its capabilities, building for AI glasses, wearables, phones, domes and planetariums, across sport, music and culture.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PressReleasePage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>YB / PRESS RELEASE</p>
          <h1 className={styles.headline}>
            YBVR becomes YB as live immersive media moves beyond the headset
          </h1>
          <p className={styles.dek}>
            The company behind Xtadium and CultVRe is expanding its
            capabilities, building for AI glasses, wearables, phones, domes and
            planetariums, across sport, music and culture.
          </p>
        </div>
      </header>

      <article className={styles.article}>
        <div className={styles.textColumn}>
          <p className={styles.lead}>
            YBVR, the company that pioneered streaming live events into VR
            headsets across the world, has officially rebranded as YB. The new
            name drops ‘VR’ as the company brings its immersive sport, music and
            culture experiences to a widening range of screens, from XR devices
            and spatial computing platforms to smart wearables, AI glasses,
            domes and planetariums.
          </p>

          <p>
            The change reflects how the business has grown from a single
            technology into a company that produces cutting-edge content, builds
            technologies that take the viewing experience further than ever
            before, and collaborates with the largest sports and cultural
            organisations across the globe. It also mirrors how the appetite
            for immersive tech has advanced and how people now want to consume
            their content.
          </p>

          <p>
            YB’s work centres on immersive media, capturing and producing video
            and experiences that place audiences inside an event rather than
            watching from afar. These experiences are then delivered across VR
            headsets, mobile and connected devices.
          </p>
        </div>

        <blockquote className={styles.quote}>
          <p>
            “YBVR was the right name for where we started, but it no longer
            represents everything we have become,” said Héctor Prieto, CEO and
            Co-Founder of YB. “We started by asking how technology could bring
            someone closer to a live event. That question has become much
            bigger.”
          </p>
        </blockquote>

        <div className={styles.textColumn}>
          <p className={styles.sectionIntro}>
            YB is now organised around three businesses that can operate
            independently or together:
          </p>
        </div>

        <section
          className={styles.divisionGrid}
          aria-label="YB Studios, YB Sports and YB Tech"
        >
          <div className={styles.divisionCard}>
            <div className={styles.divisionImage}>
              <Image
                src="/media/press/yb-studios.jpg"
                alt="YB Studios"
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <p>
              <strong>YB Studios</strong> is the creative and production arm,
              making content across sport, music, culture and entertainment,
              from live productions and films to branded experiences. In August
              it captured the total solar eclipse in León for release on
              CultVRe.
            </p>
          </div>

          <div className={styles.divisionCard}>
            <div className={styles.divisionImage}>
              <Image
                src="/media/press/yb-sports.jpg"
                alt="YB Sports"
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <p>
              <strong>YB Sports</strong> builds long-term partnerships with
              leagues, clubs, rights holders and sports organisations. Its work
              most recently includes City Space, Manchester City’s channel on
              Xtadium, which this summer brought fans player interviews,
              training sessions and behind-the-scenes content from the club’s
              Asia Tour in Hong Kong and Seoul.
            </p>
          </div>

          <div className={styles.divisionCard}>
            <div className={styles.divisionImage}>
              <Image
                src="/media/press/yb-tech.jpg"
                alt="YB Tech"
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>
            <p>
              <strong>YB Tech</strong> develops and operates the technology
              behind YB’s experiences, including YB Media Center, which manages
              and distributes content across live and on-demand environments.
              Its YB Labs team explores emerging technologies, including
              artificial intelligence and next-generation formats.
            </p>
          </div>
        </section>

        <div className={styles.textColumn}>
          <p>
            Together, they allow YB to work on a project from the rights deal
            and creative idea through to production, live delivery and the
            audience.
          </p>

          <p>
            The new name keeps the initials of Yerba Buena Avenue in Silicon
            Valley, where the company’s story began a decade ago. Its patented
            technology, built when virtual reality was still emerging,
            delivered live events into VR headsets.
          </p>

          <p>
            YB’s products continue to include Xtadium and Xtadium Music, its
            sport and music platforms, and CultVRe, the culture platform
            launched in June on iOS, Android and Meta Quest.
          </p>

          <p>
            Over the coming months, YB plans to announce new partnerships,
            productions and technology initiatives across sport, culture,
            entertainment and emerging platforms, building on projects already
            underway.
          </p>
        </div>

        <blockquote className={`${styles.quote} ${styles.lastQuote}`}>
          <p>
            “The technology will continue to change, but our ambition remains
            the same. We are passionate about bringing people closer to the
            moments that matter,” added Prieto. “YB represents the company we
            are today, but more importantly, the company we are building for
            the next decade.”
          </p>
        </blockquote>

        <div className={styles.textColumn}>
          <p className={styles.storyLink}>
            <Link href="/about">Find out more about YB’s story.</Link>
          </p>
          <p className={styles.ends}>- ENDS -</p>
        </div>
      </article>

      <section className={styles.about} aria-labelledby="about-yb-title">
        <div className={styles.aboutInner}>
          <h2 id="about-yb-title">ABOUT YB</h2>
          <div className={styles.aboutCopy}>
            <p>
              YB is a global immersive media company bringing together content,
              production, technology, live experiences, and distribution across
              sport, music, culture, and entertainment.
            </p>
            <p>
              Through YB Sports, YB Studios, and YB Tech, the company works
              across the immersive media value chain, from partnerships and
              creative development through production, technology, platforms,
              and distribution.
            </p>
            <p>
              YB also develops and operates immersive experiences including
              Xtadium, Xtadium Music, and CultVRe.
            </p>
            <p>
              Formerly known as YBVR, YB has spent nearly a decade developing
              immersive technology and creating live and on-demand experiences
              with partners across the global sports, entertainment, culture,
              and technology industries.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="media-contact-title">
        <div className={styles.contactInner}>
          <h2 id="media-contact-title">Media Contact</h2>
          <div className={styles.contactCopy}>
            <p className={styles.agency}>Energy PR</p>
            <p className={styles.contactMethods}>
              <span>
                Tel: <a href="tel:+441993823011">01993 823 011</a>
              </span>
              <span>
                Email: <a href="mailto:YBVR@energypr.co.uk">YBVR@energypr.co.uk</a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
