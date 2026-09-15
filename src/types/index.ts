export type DivisionId =
  | "studios"
  | "tech"
  | "labs"
  | "sports";

export type Division = {
  id: DivisionId;

  name: string;
  shortName: string;

  href: `/${DivisionId}`;

  eyebrow: string;

  title: string;
  description: string;
};