/**
 * Vic's Views editorial content.
 * The regular YB News stories live elsewhere: these issues are NOT included
 * in the NewsGrid news array.
 *
 * Add one record to `vicIssues` for each approved fortnightly dispatch.
 * The banner and hub update automatically when a new issue is added.
 */

export const vicTopics = [
  { id: "ai", label: "AI & Agents", numeral: "01" },
  { id: "xr", label: "Spatial Computing", numeral: "02" },
  { id: "media", label: "Future of Media", numeral: "03" },
  { id: "platforms", label: "Platforms & Systems", numeral: "04" },
  { id: "emerging", label: "Emerging Tech", numeral: "05" },
] as const;

export type VicTopic = (typeof vicTopics)[number]["id"];

export type VicIssueSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
};

export type VicIssue = {
  slug: string;
  issueNumber: number;
  date: string; // YYYY-MM-DD
  topic: VicTopic;
  title: string;
  excerpt: string;
  intro: string;
  sections: VicIssueSection[];
  links?: { label: string; href: string }[];
};

// No newsletter articles were supplied yet. Do NOT add dummy posts here.
export const vicIssues: VicIssue[] = [];

export function getVicIssues(): VicIssue[] {
  return [...vicIssues].sort(
    (a, b) =>
      b.date.localeCompare(a.date) || b.issueNumber - a.issueNumber,
  );
}

export function getLatestVicIssue(): VicIssue | undefined {
  return getVicIssues()[0];
}

export function getVicIssue(slug: string): VicIssue | undefined {
  return vicIssues.find((issue) => issue.slug === slug);
}

export function formatVicDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export const vicIntro = {
  opening:
    "Hi all, and welcome to Vic's Views, a small space where I will be sharing some bite-sized reflections and perspectives around the technology topics that excites me personally, and YB as a group.",
  introduction:
    "Ah! Nearly forgot to introduce myself: I'm Victor, co-founder and CTO of YB group, I have been here since the very beginning of our adventure back in 2016, created all our initial tech stack and wrote our patents, and I'm always curious about checking out the latest and greatest of tech developments to bring into YB's products and offerings.",
};
