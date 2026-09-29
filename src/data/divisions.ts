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
      "CREATE THE CONTENT",
      "Premium immersive production, live and original. ",
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
      "POWER THE EXPERIENCE ",
      "Technology, platforms, and distribution for immersive media. ",
    ],
  },
  {
    id: "labs",
    name: "YB Labs",
    href: "/labs",
    image: "/media/home/yblabs.png",
    logo: "/brand/yblabs_logofix.svg",
    descriptionLines: [
      "CONNECT FANS TO THE ACTION",
      "Rights, partnerships, and immersive experiences for sport.",
    ],
  },
];

export const homeDivisions =
  divisions.filter(
    (division) =>
      division.id !== "labs"
  );