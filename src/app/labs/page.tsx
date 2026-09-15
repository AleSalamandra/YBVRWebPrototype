import type { Metadata } from "next";

import DivisionHero from "@/components/sections/DivisionHero";

import { divisionMap } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Labs",
};

export default function LabsPage() {
  const division = divisionMap.labs;

  return (
    <DivisionHero
      eyebrow={division.eyebrow}
      title={division.title}
      description={division.description}
    />
  );
}