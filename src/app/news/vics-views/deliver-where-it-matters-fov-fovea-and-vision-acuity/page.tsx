import type { Metadata } from "next";
import Link from "next/link";
import styles from "./issue.module.css";

export const metadata: Metadata = {
  title: "Deliver where it matters: FOV, Fovea, and vision acuity | Vic's Views | YB",
  description:
    "How optical illusions, foveated rendering, Steam Frame and YBVR's field-of-view optimized streaming help immersive tech deliver quality where it matters.",
};

const frameSource = "https://store.steampowered.com/hardware/steamframe";
const redditSource =
  "https://www.reddit.com/r/oculus/comments/66nfap/made_a_pic_that_shows_how_foveated_rendering/#lightbox";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function GifFigure({
  src,
  alt,
  label,
  credit,
  creditUrl,
}: {
  src: string;
  alt: string;
  label: string;
  credit: string;
  creditUrl?: string;
}) {
  return (
    <figure className={styles.mediaFigure}>
      {/* Animated GIFs are intentionally served unoptimized to retain animation. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={styles.gif} loading="lazy" />
      <figcaption className={styles.figcaption}>
        <span>{label}</span>
        <span>
          Source: {creditUrl ? <ExternalLink href={creditUrl}>{credit}</ExternalLink> : credit}
        </span>
      </figcaption>
    </figure>
  );
}

export default function DeliverWhereItMattersIssue() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Link className={styles.backLink} href="/news/vics-views">
            <span aria-hidden="true">←</span> All Vic&apos;s Views
          </Link>
          <div className={styles.eyebrow}>VIC&apos;S VIEWS <span className={styles.eyebrowDot}>•</span> ISSUE 02</div>
          <h1>Deliver where it matters: <em>FOV, Fovea,</em> and vision acuity</h1>
          <p className={styles.deck}>
            What our eyes don&apos;t see — and what immersive technology can do with that.
          </p>
          <div className={styles.heroRule} />
          <div className={styles.byline}>A perspective on immersive technology from YB</div>
        </div>
        <span className={styles.heroOrb} aria-hidden="true" />
      </header>

      <article className={styles.article}>
        <section className={styles.prose} aria-label="Introduction">
          <p className={styles.lead}>
            I&apos;m a big fan of optical illusions. They&apos;re possible because the human brain is
            marvelous in its ability to trick itself — and, by extension, our conscious
            perception of the world. That can tell us a lot about life, but for this tech
            post, I&apos;ll focus on how vision is reconstructed.
          </p>
          <p>
            The good news is that technology can benefit enormously from these tricks,
            helping us deliver much better experiences to people.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="vision-illusions">
          <div className={styles.sectionLabel}>01 / OUR EYES, OUR BRAINS</div>
          <div className={styles.prose}>
            <h2 id="vision-illusions">A little bit of visual magic.</h2>
            <p>
              I&apos;ll skim through a few basic — but still fascinating — examples. Filling
              in blanks, correcting perceived mistakes, keeping us sane: it&apos;s amazing.
            </p>
          </div>
          <div className={styles.exampleGrid}>
            <div className={styles.exampleCard}>
              <div className={`${styles.cardSymbol} ${styles.yellowSymbol}`} aria-hidden="true" />
              <h3>Yellow isn&apos;t quite what it seems.</h3>
              <p>
                A simple, basic color, right? On a typical RGB screen, there&apos;s no dedicated
                yellow subpixel. By combining red and green light, clever engineering
                convinces our visual system that yellow is right there.
              </p>
            </div>
            <div className={styles.exampleCard}>
              <div className={`${styles.cardSymbol} ${styles.scanSymbol}`} aria-hidden="true" />
              <h3>A moving picture, one point at a time.</h3>
              <p>
                Traditional CRT televisions scanned one line at a time with an electron
                beam. Yet we perceived complete, continuously moving pictures.
              </p>
            </div>
            <div className={styles.exampleCard}>
              <div className={`${styles.cardSymbol} ${styles.blindSymbol}`} aria-hidden="true" />
              <h3>The blind spot you never notice.</h3>
              <p>
                Each eye has a blind spot where the optic nerve exits the retina, off to
                the side of our central gaze. But we don&apos;t walk around noticing a hole
                in our view: our visual system effectively hides it.
              </p>
            </div>
            <div className={styles.exampleCard}>
              <div className={`${styles.cardSymbol} ${styles.lilacSymbol}`} aria-hidden="true" />
              <h3>Now you see it. Now you don&apos;t.</h3>
              <p>
                Try the <ExternalLink href="https://optical.toys/lilac-chaser/">Lilac Chaser</ExternalLink>
                {" "}or explore <ExternalLink href="https://en.wikipedia.org/wiki/Troxler%27s_fading">Troxler fading</ExternalLink>.
                It&apos;s truly fascinating to sense something disappearing while knowing
                it&apos;s still there.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="sharp-vision">
          <div className={styles.sectionLabel}>02 / VISUAL ACUITY</div>
          <div className={styles.prose}>
            <h2 id="sharp-vision">Only a very, <em>very</em> small part is truly sharp.</h2>
            <p>
              Although the whole retina is our sensor, the macula is the much smaller
              region that handles central vision. At its center is the fovea, where
              fine detail is resolved most precisely.
            </p>
            <p>
              We don&apos;t see seams between these areas. Our visual system stitches
              everything together into one apparently coherent picture.
            </p>
          </div>
          <div className={styles.acuity} aria-label="From broad visual field to fine central detail">
            <div className={styles.acuityItem}>
              <span className={styles.acuityNumber}>01</span>
              <span className={styles.acuityShapeWide} aria-hidden="true" />
              <strong>Retina</strong>
              <span>Wide visual field</span>
            </div>
            <div className={styles.acuityArrow} aria-hidden="true">→</div>
            <div className={styles.acuityItem}>
              <span className={styles.acuityNumber}>02</span>
              <span className={styles.acuityShapeMedium} aria-hidden="true" />
              <strong>Macula</strong>
              <span>Central vision</span>
            </div>
            <div className={styles.acuityArrow} aria-hidden="true">→</div>
            <div className={styles.acuityItem}>
              <span className={styles.acuityNumber}>03</span>
              <span className={styles.acuityShapeSmall} aria-hidden="true" />
              <strong>Fovea</strong>
              <span>Highest visual acuity</span>
            </div>
          </div>
          <p className={styles.figureNote}>Conceptual illustration of relative visual functions; not to anatomical scale.</p>
        </section>

        <section className={styles.section} aria-labelledby="foveated-rendering">
          <div className={styles.sectionLabel}>03 / IMMERSIVE TECH</div>
          <div className={styles.prose}>
            <h2 id="foveated-rendering">That&apos;s where the tech angle begins.</h2>
            <p>
              In 3D and immersive experiences, we use perceptual tricks all the time.
              In fact, YBVR&apos;s roots are firmly attached to trickery of exactly this sort.
            </p>
            <h3>Foveated rendering</h3>
            <p>
              Foveated rendering exists because we can get away with reducing detail
              outside the regions where the eye sees most sharply. This can save a lot
              of processing, concentrating rendering effort where it matters most.
              Variations of this technique have been used across XR headsets and
              remain an important part of immersive rendering pipelines.
            </p>
            <p>
              <ExternalLink href={redditSource}>See a visual example of foveated rendering</ExternalLink>
              {" "}shared by u/f4cepa1m on Reddit.
            </p>
            <h3>Foveated streaming — Steam Frame</h3>
            <p>
              Valve&apos;s recently launched <em>Steam Frame</em> applies a related idea
              to the direct video stream between a PC and the headset. Valve calls it
              <strong> foveated streaming</strong>: it prioritizes streamed image quality
              where the viewer is looking.
            </p>
            <p>
              The fovea covers such a small area that accurate gaze position matters
              enormously. For gaze-contingent streaming like this, low-latency eye
              tracking is essential.
            </p>
          </div>
          <GifFigure
            src="/media/vics-views/foveated-valve.gif"
            alt="Valve Steam Frame animation demonstrating higher-resolution streaming around the viewer's gaze."
            label="Foveated streaming / Steam Frame"
            credit="Valve"
            creditUrl={frameSource}
          />
        </section>

        <section className={styles.section} aria-labelledby="ybvr-fov">
          <div className={styles.sectionLabel}>04 / YBVR DNA</div>
          <div className={styles.prose}>
            <h2 id="ybvr-fov">Our own take: FOV-optimized streaming.</h2>
            <p>
              YBVR&apos;s own FOV-optimized streaming is based on a similar observation:
              we can get away with delivering less quality where the user isn&apos;t
              looking, as long as we adapt and switch quickly enough.
            </p>
            <p>
              There&apos;s one important distinction. We optimize for the
              <strong> field of view (FOV)</strong>, not the fovea. The optimized regions
              are therefore typically larger. That gives us many of the perceived
              quality benefits while making the approach scalable to large concurrent
              audiences. I&apos;ll share more about that in future posts.
            </p>
          </div>
          <GifFigure
            src="/media/vics-views/fov-slide-ybvr.gif"
            alt="YBVR animation illustrating adaptive field-of-view optimized immersive video streaming."
            label="FOV-optimized streaming / YBVR"
            credit="YBVR"
          />
          <aside className={styles.callout}>
            <div className={styles.calloutLabel}>FUN FACT</div>
            <p>
              Our original company motto was <em>“Delivering where it matters”</em> —
              because this technology defined us at the beginning of our journey.
            </p>
          </aside>
        </section>

        <section className={`${styles.section} ${styles.outro}`} aria-label="Closing thought">
          <p>With tricks like these being used all over the place, I often feel like building tech for immersive is much like <em>being a magician.</em></p>
          <div className={styles.endMark}>✳</div>
        </section>
      </article>

      <footer className={styles.footer}>
        <Link href="/news/vics-views">← Back to Vic&apos;s Views</Link>
        <span>YB / Immersive media &amp; technology</span>
      </footer>
    </main>
  );
}
