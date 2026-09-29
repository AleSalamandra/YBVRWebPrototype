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
              PREMIUM IMMERSIVE EXPERIENCES
            </strong>

            <span>
              CONTENT • PRODUCTION • TECHNOLOGY 
            </span>

            <span>
              FROM CREATION TO DISTRIBUTION
            </span>
          </div>
        </div>

        <div className="home-hero__headline">
          <h1>
            WE BRING AUDIENCES CLOSER
            <br />
            TO THE MOMENTS THAT MATTER
          </h1>

          <p>
           Immersive content, production, technology, and distribution across sport, culture, and music.
          </p>
        </div>
      </Container>
    </section>
  );
}
