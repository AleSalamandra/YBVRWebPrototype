import DivisionCard from "@/components/ui/DivisionCard";

import {
  homeDivisions,
} from "@/data/divisions";


export default function HomeDivisions() {
  return (
    <section
      id="divisions"
      className="home-divisions"
    >

      <div className="home-divisions__heading">

        <h2>
          One company. Four ways to shape media
        </h2>

      </div>


      <div className="home-divisions__grid">

        {homeDivisions.map(
          (
            division,
            index
          ) => (
            <DivisionCard
              key={division.id}
              division={division}
              priority={index < 2}
            />
          )
        )}

      </div>

    </section>
  );
}