import type { Metadata } from "next";

import DivisionHero from "@/components/sections/DivisionHero";

import { divisionMap } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Sports",
};

export default function SportsPage() {
  const division = divisionMap.sports;

  return (
    <DivisionHero
      eyebrow={division.eyebrow}
      title={division.title}
      description={division.description}
    />
  );
}