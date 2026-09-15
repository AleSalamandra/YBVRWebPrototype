import type { Metadata } from "next";

import DivisionHero from "@/components/sections/DivisionHero";

import { divisionMap } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Tech",
};

export default function TechPage() {
  const division = divisionMap.tech;

  return (
    <DivisionHero
      eyebrow={division.eyebrow}
      title={division.title}
      description={division.description}
    />
  );
}