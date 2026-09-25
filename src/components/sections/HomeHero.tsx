import Image from "next/image";

import BackgroundMedia from "@/components/media/BackgroundMedia";
import Container from "@/components/ui/Container";


export default function HomeHero() {
  return (
    <section className="home-hero">
      <BackgroundMedia
        imageSrc="/media/home/background.png"
        objectPosition="center center"
        priority
        className="home-hero__media"
      />

      <div
        className="home-hero__overlay"
        aria-hidden="true"
      />

      <div
        className="home-hero__grain"
        aria-hidden="true"
      />

      <Container className="home-hero__content">
        <div className="home-hero__identity">
          <Image
            src="/brand/yb-symbol.svg"
            alt="YB"
            width={120}
            height={120}
            priority
            className="home-hero__symbol"
          />

          <div
            className="home-hero__identity-divider"
            aria-hidden="true"
          />

          <div className="home-hero__identity-copy">
            <strong>
              Immersive experiences
            </strong>

            <span>
              A global media company
            </span>

            <span>
              for an expanded world
            </span>
          </div>
        </div>

        <div className="home-hero__headline">
          <h1>
            We build the future
            <br />
            of immersive experiences
          </h1>

          <p>
            Entertainment is becoming spatial.
            We&apos;re building what comes next.
          </p>
        </div>
      </Container>
    </section>
  );
}
