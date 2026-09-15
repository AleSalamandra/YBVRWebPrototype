import type {
  Division,
  DivisionId,
} from "@/types";

export const divisionMap: Record<
  DivisionId,
  Division
> = {
  studios: {
    id: "studios",

    name: "YB Studios",
    shortName: "Studios",

    href: "/studios",

    eyebrow: "YB / Studios",

    title: "Stories worth stepping into.",

    description:
      "Immersive production and spatial storytelling for sport, culture and entertainment.",
  },

  tech: {
    id: "tech",

    name: "YB Tech",
    shortName: "Tech",

    href: "/tech",

    eyebrow: "YB / Tech",

    title: "Technology built for immersive media.",

    description:
      "Platforms, applications and infrastructure designed to deliver immersive experiences at scale.",
  },

  labs: {
    id: "labs",

    name: "YB Labs",
    shortName: "Labs",

    href: "/labs",

    eyebrow: "YB / Labs",

    title: "Exploring what comes next.",

    description:
      "Research and experimentation across spatial computing, AI and emerging forms of media.",
  },

  sports: {
    id: "sports",

    name: "YB Sports",
    shortName: "Sports",

    href: "/sports",

    eyebrow: "YB / Sports",

    title: "Closer to the action.",

    description:
      "Immersive experiences connecting teams, rights holders, brands and fans.",
  },
};

export const divisions = Object.values(
  divisionMap
);