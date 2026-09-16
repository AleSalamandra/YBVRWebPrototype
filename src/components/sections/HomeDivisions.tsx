import Link from "next/link";

import BackgroundMedia from "@/components/ui/BackgroundMedia";
import Container from "@/components/ui/Container";

import {
  divisions,
} from "@/data/divisions";

export default function HomeDivisions() {
  return (
    <section
      className="home-divisions"
      aria-labelledby="home-divisions-title"
    >
      <div className="home-divisions-sequence">

        <section className="home-divisions-step home-divisions-step--intro">
          <div className="home-divisions-sticky">
            <Container className="home-divisions-intro">

              <p className="eyebrow">
                02 / What is YB
              </p>

              <h2 id="home-divisions-title">
                One company.
                <br />
                Four ways to shape
                <br />
                immersive media.
              </h2>

            </Container>
          </div>
        </section>


        {divisions.map(
          (
            division,
            index
          ) => {
            const panelNumber =
              String(
                index + 1
              ).padStart(
                2,
                "0"
              );

            return (
              <section
                key={division.id}
                className={[
                  "home-divisions-step",
                  `home-divisions-step--${division.id}`,
                ].join(" ")}
              >
                <div className="home-divisions-sticky home-division-panel">

                  <BackgroundMedia
                    imageSrc={
                      division
                        .homeMedia
                        .image
                    }
                    videoSrc={
                      division
                        .homeMedia
                        .video
                    }
                    objectPosition={
                      division
                        .homeMedia
                        .objectPosition
                    }
                    priority={
                      index === 0
                    }
                    className="home-division-panel__media"
                  />

                  <div
                    className="home-division-panel__scrim"
                    aria-hidden="true"
                  />

                  <div
                    className="home-division-panel__texture"
                    aria-hidden="true"
                  />

                  <Container className="home-division-panel__content">

                    <div className="home-division-panel__meta">
                      <span>
                        {panelNumber}
                        {" / "}
                        04
                      </span>

                      <span>
                        {division.name}
                      </span>
                    </div>

                    <div className="home-division-panel__main">

                      <div className="home-division-panel__brand">
                        <img
                          src={
                            division.homeLogo
                          }
                          alt={
                            division.name
                          }
                          className="home-division-panel__logo"
                        />
                      </div>

                      <div className="home-division-panel__copy">

                        <p>
                          {
                            division.homeTagline
                          }
                        </p>

                        <Link
                          href={
                            division.href
                          }
                          className="home-division-panel__link"
                        >
                          <span>
                            Explore{" "}
                            {division.name}
                          </span>

                          <span
                            aria-hidden="true"
                            className="home-division-panel__arrow"
                          >
                            ↗
                          </span>
                        </Link>

                      </div>

                    </div>

                  </Container>

                </div>
              </section>
            );
          }
        )}

      </div>
    </section>
  );
}