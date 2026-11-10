import type { Metadata } from "next";
import Image from "next/image";
import styles from "./press-release.module.css";

/**
 * Unlisted press release. Do not add this route to News, navigation or the sitemap.
 * SOURCE: "Nutcracker Immersive Experience Press Release as of 11.2.26.docx".
 * EMBARGO: 10 November 2026, 8 AM PT / 11 AM ET / 4 PM GMT.
 */
export const metadata: Metadata = {
  title: "Virtual Reality Experience of San Francisco Ballet’s Nutcracker Invites Viewers to Step Into the Story | YB",
  description:
    "Nutcracker: The Immersive Experience allows audiences to take part in the quintessential holiday tradition from anywhere through an immersive collaboration between YB, SF Ballet, Google, and XREAL",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const photoCredit =
  "(Left to Right) Capturing the snow scene from Tomasson's Nutcracker; Behind the scenes for Nutcracker: The Immersive Experience // © San Francisco Ballet, photos by Lindsey Rallo";

export default function NutcrackerPressReleasePage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTopline}>
            <p className={styles.eyebrow}>YB / PRESS RELEASE</p>
            <p className={styles.embargo}>
              EMBARGOED UNTIL NOVEMBER 10
              <span>8AM PT / 11AM ET / 4PM GMT</span>
            </p>
          </div>

          <h1 className={styles.headline}>
            VIRTUAL REALITY EXPERIENCE OF SAN FRANCISCO BALLET’S NUTCRACKER
            INVITES VIEWERS TO STEP INTO THE STORY
          </h1>

          <p className={styles.dek}>
            <em>Nutcracker: The Immersive Experience</em> allows audiences to
            take part in the quintessential holiday tradition from anywhere
            through an immersive collaboration between YB, SF Ballet, Google,
            and XREAL
          </p>
        </div>
      </header>

      <article className={styles.article}>
        <figure className={styles.photoGallery}>
          <div className={styles.photoGrid}>
            <div className={styles.photoFrame}>
              <Image
                src="/media/press/nutcracker/snow-scene.png"
                alt="Capturing the snow scene from Tomasson's Nutcracker, with dancers and the production crew"
                width={794}
                height={520}
                sizes="(max-width: 700px) 100vw, 50vw"
                priority
              />
            </div>
            <div className={styles.photoFrame}>
              <Image
                src="/media/press/nutcracker/behind-the-scenes.png"
                alt="Behind the scenes for Nutcracker: The Immersive Experience, showing dancers and camera equipment on stage"
                width={789}
                height={510}
                sizes="(max-width: 700px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <figcaption>{photoCredit}</figcaption>
        </figure>

        <div className={styles.textColumn}>
          <p className={styles.lead}>
            (SAN FRANCISCO, CA) November 10, 2026—In a unique collaboration
            between <a href="https://www.ybvr.com/">YB</a>,{" "}
            <a href="https://www.sfballet.org/">San Francisco Ballet</a> (SF
            Ballet), Google, and <a href="https://www.xreal.com/us">XREAL</a>,
            audiences can experience the magic of{" "}
            <a href="https://www.sfballet.org/productions/nutcracker/">
              <em>Nutcracker</em>
            </a>{" "}
            in a new way, from the heart of the performance. Launching on
            December 4 on Google’s Android XR platform and the{" "}
            <a href="https://www.xreal.com/aura">XREAL AURA</a>, a new
            glasses-style spatial computing device from XREAL,{" "}
            <em>Nutcracker: The Immersive Experience</em> combines cinematic,
            immersive visuals with recorded music from the Grammy
            Award-winning SF Ballet Orchestra and the SF Girls Chorus, inviting
            viewers to step onto the stage and experience the beloved holiday
            tradition as part of the story.
          </p>

          <p>
            Through YB&apos;s CultVRe app, available on XREAL AURA, audiences will
            experience Act I of choreographer and former SF Ballet Artistic
            Director Helgi Tomasson&apos;s <em>Nutcracker</em>, set in a 1915 San
            Francisco bustling with innovation and excitement, mirroring the
            energy of San Francisco today. Performed by SF Ballet every year
            at the War Memorial Opera House, the production celebrated its
            20th anniversary season in 2024.
          </p>
        </div>

        <blockquote className={styles.quote}>
          <p>
            &quot;San Francisco Ballet&apos;s Nutcracker is a beloved holiday tradition
            for many, and inspires wonder across generations,&quot; said Hector
            Prieto, CEO, YB. &quot;This experience places you inside the magic of the
            show itself. Working with SF Ballet, Google, and XREAL has allowed
            us to push the boundaries of how technology and the arts can work
            together, bringing audiences nearer to the artistry and emotion of
            world-class performance on next-generation XR glasses.&quot;
          </p>
        </blockquote>

        <div className={styles.textColumn}>
          <p>
            This collaboration reflects the growing capabilities of immersive
            technology to extend the reach of performing arts beyond the
            theatre. Through XREAL AURA, audiences can experience the dazzling
            sets and costumes, sweeping score, and unparalleled artistry of SF
            Ballet’s <em>Nutcracker</em> without leaving home.
          </p>
        </div>

        <blockquote className={styles.quote}>
          <p>
            “This experience of our Nutcracker will bring audiences closer to
            the story than ever before,” said Dr. Tamara Rojo, CBE, SF Ballet
            Artistic Director. “By working with leaders in the immersive
            technology space, we’re able to bring this holiday tradition to
            new audiences that may not have the opportunity to experience it
            otherwise—either right here in our backyard, across the country,
            or across the globe. It’s through innovative partnerships such as
            this that we can introduce ballet to audiences who may never have
            seen dance on stage before, or those who are too far away to
            experience this annual San Francisco tradition.”
          </p>
        </blockquote>

        <div className={styles.textColumn}>
          <p>
            Featuring exclusive interviews with Rojo, the project trailer
            captures behind-the-scenes moments and sneak peeks of the upcoming
            experience. Additional details, including final availability and
            viewing instructions, will be announced closer to launch.
          </p>
        </div>

        {/* Locally hosted project trailer — stays within the unlisted release. */}
        <figure className={styles.videoFeature}>
          <div className={styles.videoHeading}>
            <span className={styles.videoEyebrow}>YB / PROJECT TRAILER</span>
            <h2>Nutcracker: The Immersive Experience</h2>
          </div>
          <div className={styles.videoFrame}>
            <video
              className={styles.videoPlayer}
              controls
              playsInline
              preload="metadata"
              poster="/media/press/nutcracker/behind-the-scenes.png"
              aria-label="Nutcracker: The Immersive Experience — project trailer"
            >
              <source
                src="/media/press/nutcracker/Teaser_Nutcracker_V5.mp4"
                type="video/mp4"
              />
              Your browser does not support embedded video. You can{" "}
              <a href="/media/press/nutcracker/Teaser_Nutcracker_V5.mp4">
                view the project trailer directly
              </a>.
            </video>
          </div>
        </figure>

        <div className={styles.textColumn}>
          <p className={styles.storyLink}>
            Learn more about YB’s{" "}
            <a href="https://www.ybvr.com/">premium immersive experiences</a>.
          </p>

          <p>
            SF Ballet&apos;s <em>Nutcracker</em> is onstage at San Francisco&apos;s
            War Memorial Opera House from December 4–27. Tickets are available
            at <a href="https://www.sfballet.org">www.sfballet.org</a>.
          </p>
        </div>
      </article>

      <section className={styles.about} aria-label="About the organisations">
        <div className={styles.aboutInner}>
          <div className={styles.aboutRow}>
            <h2>About YB</h2>
            <div className={styles.aboutCopy}>
              <p>
                YB is a global immersive media company bringing together
                content, production, technology, live experiences, and
                distribution across sport, music, culture, and entertainment.
                Through YB Sports, YB Studios, and YB Tech, the company works
                across the immersive media value chain, from partnerships and
                creative development through production, technology,
                platforms, and distribution. YB also develops and operates
                immersive experiences including Xtadium, Xtadium Music, and
                CultVRe.
              </p>
              <p>
                Formerly known as YBVR, YB has spent nearly a decade
                developing immersive technology and creating live and
                on-demand experiences with partners across the global sports,
                entertainment, culture, and technology industries.
              </p>
            </div>
          </div>

          <div className={styles.aboutRow}>
            <h2>About CultVRe</h2>
            <div className={styles.aboutCopy}>
              <p>
                CultVRe is YB’s immersive cultural platform, created to bring
                audiences closer to world-class performances, cultural
                institutions, and live experiences through spatial storytelling.
              </p>
            </div>
          </div>

          <div className={styles.aboutRow}>
            <h2>About San Francisco Ballet</h2>
            <div className={styles.aboutCopy}>
              <p>
                San Francisco Ballet, led by Artistic Director Tamara Rojo,
                is a world-leading ballet company and a trailblazing
                commissioner, collaborator, and presenter in dance. With a
                deep commitment to new and contemporary works and the
                classical repertoire, SF Ballet is a catalyst for the future
                of ballet, investing in commissions and acquisitions;
                presenting established and emerging choreographers with a
                breadth of viewpoints; uplifting dancers, artists, and
                creatives across disciplines; and cultivating the next
                generation of the world’s top dancers in its School.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contacts} aria-labelledby="media-contacts">
        <div className={styles.contactInner}>
          <div className={styles.contactHeading}>
            <h2 id="media-contacts">Media Contacts</h2>
          </div>

          <div className={styles.contactsGrid}>
            <div className={styles.contactCard}>
              <h3>YB / CultVRe</h3>
              <p className={styles.agency}>Energy PR</p>
              <p>Tel: <a href="tel:+441993823011">01993 823 011</a></p>
              <p>Email: <a href="mailto:YBVR@energypr.co.uk">YBVR@energypr.co.uk</a></p>
              <p>
                <a href="https://ybvr.com/cultvre/">https://ybvr.com/cultvre/</a>
              </p>
              <p>Instagram: @cultvre.app</p>
            </div>

            <div className={styles.contactCard}>
              <h3>San Francisco Ballet</h3>
              <p className={styles.contactQualifier}>San Francisco Bay Area press</p>
              <p>
                <a href="mailto:press@sfballet.org">press@sfballet.org</a>
              </p>
              <p className={styles.contactQualifier}>National + International press</p>
              <p>
                <a href="mailto:sfballet@resnicow.com">sfballet@resnicow.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
