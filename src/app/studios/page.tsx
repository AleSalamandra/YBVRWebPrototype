import type { Metadata } from "next";

import DivisionHero from "@/components/sections/DivisionHero";

import { divisionMap } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Studios",
};

export default function StudiosPage() {
  const division = divisionMap.studios;

  return (
    <DivisionHero
      eyebrow={division.eyebrow}
      title={division.title}
      description={division.description}
    />
  );
}