export type DivisionId =
  | "studios"
  | "tech"
  | "sports"
  | "labs";


export type NavigationItem = {
  label: string;
  href: string;
};


export type MediaSource = {
  image: string;
  video?: string;
  objectPosition?: string;
};


export type DivisionCardData = {
  id: DivisionId;

  name: string;

  href: string;

  image: string;

  logo: string;

  descriptionLines: [
    string,
    string
  ];

  objectPosition?: string;
};


export type ProductCredit = {
  label: string;

  division: DivisionId;

  name: string;

  logo: string;
};


export type ProductCardData = {
  id: string;

  name: string;

  tagline: string;

  href: string;

  ctaLabel: string;

  media?: MediaSource;

  symbol?: string;

  logo?: string;

  credits: ProductCredit[];
};