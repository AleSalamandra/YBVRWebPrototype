import ReactiveDissolveLogo from "@/components/effects/ReactiveDissolveLogo";
import Container from "@/components/ui/Container";


export default function HomeHero() {
  return (
    <section className="home-hero">

      <ReactiveDissolveLogo
        src="/brand/yb-symbol.svg"

        logoHeight={0.94}

        interactionRadius={0.25}

        blobReach={125}
        blobIntensity={0.96}

        attractionStrength={84}

        lightIntensity={1}

        sweepDelay={0.8}
        sweepDuration={10}

        renderScale={0.72}
      />

      <div
        className="hero-vignette"
        aria-hidden="true"
      />

      <div
        className="hero-grain"
        aria-hidden="true"
      />

      <Container className="hero-inner">

        <p className="eyebrow">
          YB
        </p>

        <h1>
          We build the future
          <br />
          of immersive media.
        </h1>

        <p className="hero-description">
          Content, technology and experiences
          that bring audiences closer to the
          things they care about.
        </p>

      </Container>

    </section>
  );
}