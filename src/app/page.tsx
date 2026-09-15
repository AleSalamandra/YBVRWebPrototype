import Link from "next/link";

import HomeHero from "@/components/sections/HomeHero";
import Container from "@/components/ui/Container";

import { divisions } from "@/data/divisions";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="divisions-section">
        <Container>

          <p className="eyebrow">
            One company. Four disciplines.
          </p>

          <div className="divisions-grid">

            {divisions.map((division) => (
              <Link
                key={division.id}
                href={division.href}
                className="division-card"
              >

                <span className="division-name">
                  {division.shortName}
                </span>

                <span
                  className="division-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </Link>
            ))}

          </div>

        </Container>
      </section>
    </>
  );
}