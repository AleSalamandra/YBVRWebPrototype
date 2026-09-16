export type DivisionId =
  | "studios"
  | "tech"
  | "labs"
  | "sports";

export type DivisionMedia = {
  image: string;
  video?: string;
  objectPosition?: string;
};

export type Division = {
  id: DivisionId;

  name: string;
  shortName: string;

  href: `/${DivisionId}`;

  eyebrow: string;

  title: string;
  description: string;

  homeTagline: string;
  homeLogo: string;

  homeMedia: DivisionMedia;
};