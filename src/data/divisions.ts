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

    title:
      "Stories worth stepping into.",

    description:
      "Immersive production and spatial storytelling for sport, culture and entertainment.",

    homeTagline:
      "Stories worth stepping into.",

    homeLogo:
      "/brand/Logo_YBStudios.svg",

    homeMedia: {
      image:
        "/media/studios/image.png",
      objectPosition:
        "center center",
    },
  },

  tech: {
    id: "tech",

    name: "YB Tech",
    shortName: "Tech",

    href: "/tech",

    eyebrow: "YB / Tech",

    title:
      "Technology built for immersive media.",

    description:
      "Platforms, applications and infrastructure designed to deliver immersive experiences at scale.",

    homeTagline:
      "Infrastructure for immersive media.",

    homeLogo:
      "/brand/Logo_YBTech.svg",

    homeMedia: {
      image:
        "/media/tech/image.png",
      objectPosition:
        "center center",
    },
  },

  labs: {
    id: "labs",

    name: "YB Labs",
    shortName: "Labs",

    href: "/labs",

    eyebrow: "YB / Labs",

    title:
      "Exploring what comes next.",

    description:
      "Research and experimentation across spatial computing, AI and emerging forms of media.",

    homeTagline:
      "Experiments for what comes next.",

    homeLogo:
      "/brand/Logo_YBLabs.svg",

    homeMedia: {
      image:
        "/media/labs/image.png",
      objectPosition:
        "center center",
    },
  },

  sports: {
    id: "sports",

    name: "YB Sports",
    shortName: "Sports",

    href: "/sports",

    eyebrow: "YB / Sports",

    title:
      "Closer to the action.",

    description:
      "Immersive experiences connecting teams, rights holders, brands and fans.",

    homeTagline:
      "Bringing fans closer than ever.",

    homeLogo:
      "/brand/Logo_YBSports.svg",

    homeMedia: {
      image:
        "/media/sports/image.png",
      objectPosition:
        "center center",
    },
  },
};

export const divisions =
  Object.values(
    divisionMap
  );