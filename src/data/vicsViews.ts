/**
 * Vic's Views editorial content.
 * These issues live separately from the standard YB News feed.
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

export type VicIssueFeature = {
  eyebrow?: string;
  title?: string;
  text?: string;
  image: string;
  alt?: string;
};

export type VicIssue = {
  slug: string;
  issueNumber: number;
  date: string; // YYYY-MM-DD
  topic: VicTopic;
  title: string;
  excerpt: string;
  intro: string;
  feature?: VicIssueFeature;
  sections: VicIssueSection[];
  links?: { label: string; href: string }[];
};

export const vicIssues: VicIssue[] = [
  {
    slug: "how-can-the-world-be-better-represented-by-technology",
    issueNumber: 1,
    date: "2026-10-22",
    topic: "media",
    title: "How can the world be better represented by technology?",
    excerpt:
      "In this first edition, Victor introduces the question that sits behind much of his curiosity: how technology can better capture, process and present the world around us.",
    intro:
      "In this first edition, I want to introduce the one guiding question behind most of my interests and exploration: “how can the world be better represented by technology”. It may sound like a simple, innocent one, but it can take you through all sorts of rabbit holes across capturing, generating, processing, transmitting and rendering — the entire chain between the point where something occurs, and the point where someone gets to enjoy it on a screen, HMD or whatever output they want.",
    feature: {
      eyebrow: "THE GUIDING QUESTION",
      title: "A better representation of the world.",
      text:
        "Most of the content I will share in this space revolves around a single curiosity: how technology can capture reality better, transform it more intelligently and present it in more compelling ways.",
      image: "/media/vics-views/vic-je-202602.png",
      alt: "Victor speaking in a lecture room.",
    },
    sections: [
      {
        heading: "One question, many rabbit holes",
        paragraphs: [
          "Most of the content I will share in this space will revolve around that one question. The more you pull on it, the more it opens up a surprisingly wide territory of ideas and technologies.",
          "At one end, you have the physical world: events happening, spaces existing, people performing, moments unfolding. At the other end, you have someone experiencing all that through a device. Between those two points lies a fascinating chain of capture, generation, processing, transmission and rendering.",
        ],
        quote:
          "How can the world be better represented by technology?",
      },
      {
        heading: "The Capture Route a.k.a. “Freshest ingredients”",
        paragraphs: [
          "There is far more than meets the eye moving here. Capture is not simply about pointing a camera at something and pressing record. It is about getting the best possible raw material for everything that comes next.",
          "Apple and Blackmagic are pushing toward immersive-specific cameras. XGRIDS is creating capture rigs that combine optical sensing and LiDAR so that spaces can be properly scanned for volumetric representation. We are also seeing custom modifications for 8K cameras that remove the OLPF in pursuit of sharper images. All of this is part of the same effort: better source material for the subsequent cooking of reconstruction.",
        ],
      },
      {
        heading: "The Processing Route a.k.a. “The Kitchen”",
        paragraphs: [
          "This one is branching, but deeply intertwined. There are at least two paths here, and both are exciting in very different ways.",
        ],
        bullets: [
          "You can choose to stay faithful to reality. This is home to one of the most exciting and dynamic research spaces today: 3D and 4D Gaussian Splatting, together with variants of world models such as World Labs’ Atlas, which promises to reconstruct a whole space with just three cameras. And we should not forget compression and streaming — the very core that gave birth to YBVR — where Apple is proposing immersive formats, AV2 is actively being cooked, and HDR is becoming increasingly relevant.",
          "Or you can go down the invent reality route, where generative AI lives, with wildly varying degrees of quality. It is an admittedly smelly route at times, but it should not be dismissed because of that. The work of tools such as Tripo, Rodin and Meshy in 3D reconstruction, or the way generative and reconstruction paths reinforce one another through work like NVIDIA’s Artifixer, quickly reminds you that this space is not only about six-fingered people or gross deepfakes.",
        ],
      },
      {
        heading: "The Presentation Route a.k.a. “The Dish”",
        paragraphs: [
          "This route has been catching headlines lately, with a new wave of devices being announced by Meta, Pico and Google/XREAL. But that is only part of the picture.",
          "There is also Mentra, Even Realities, RayNeo and many others building in the glasses space. Working out how to create software that squeezes the most out of these devices — both from the pure technology perspective and from the UX perspective — is one of the most fun and challenging spaces to work in.",
        ],
      },
      {
        heading: "More to come",
        paragraphs: [
          "These are only some of the rabbit holes opened by that original question. In future editions, I will explore them in more detail, share the things I find genuinely interesting, and try to connect them back to the opportunities they create for YB and the wider industry.",
          "Stay tuned for more in upcoming editions.",
        ],
      },
    ],
  },
];

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
