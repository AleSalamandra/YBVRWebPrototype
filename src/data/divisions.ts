export type DivisionCardData = {
  id: string;
  name: string;
  href: string;
  image: string;
  logo: string;
  descriptionLines: [string, string];
};

export const divisions: DivisionCardData[] = [
  {
    id: "studios",
    name: "YB Studios",
    href: "/studios",
    image: "/media/home/ybstudios.png",
    logo: "/brand/ybstudios_logofix.svg",
    descriptionLines: [
      "Stories",
      "Without limits",
    ],
  },
  {
    id: "tech",
    name: "YB Tech",
    href: "/tech",
    image: "/media/home/ybtech.png",
    logo: "/brand/ybtech_logofix.svg",
    descriptionLines: [
      "Tools",
      "For new realities",
    ],
  },
  {
    id: "sports",
    name: "YB Sports",
    href: "/sports",
    image: "/media/home/ybsports.png",
    logo: "/brand/ybsports_logofix.svg",
    descriptionLines: [
      "A more",
      "Immersive game",
    ],
  },
  {
    id: "labs",
    name: "YB Labs",
    href: "/labs",
    image: "/media/home/yblabs.png",
    logo: "/brand/yblabs_logofix.svg",
    descriptionLines: [
      "Ideas",
      "Into new worlds",
    ],
  },
];

export const homeDivisions =
  divisions.filter(
    (division) =>
      division.id !== "labs"
  );