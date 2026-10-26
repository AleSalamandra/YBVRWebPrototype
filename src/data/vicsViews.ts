/**
 * Vic's Views editorial content.
 * Issues live separately from the standard YB News feed.
 */

export const vicTopics = [
  { id: "ai", label: "AI & Agents", numeral: "01" },
  { id: "xr", label: "Spatial Computing", numeral: "02" },
  { id: "media", label: "Future of Media", numeral: "03" },
  { id: "platforms", label: "Platforms & Systems", numeral: "04" },
  { id: "emerging", label: "Emerging Tech", numeral: "05" },
] as const;

export type VicTopic = (typeof vicTopics)[number]["id"];

export type VicIssueMedia = {
  src: string;
  alt: string;
  caption?: string;
  appearance?: "light" | "dark";
  source?: {
    label: string;
    href?: string;
  };
};

export type VicIssueSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  quote?: string;
  media?: VicIssueMedia;
  /** Insert media immediately after this paragraph (1-based). Otherwise show it at the end. */
  mediaAfterParagraph?: number;
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
      image: "/media/vics-views/vic-ie-202602.jpg",
      alt: "Victor speaking in a lecture room.",
    },
    sections: [
      {
        heading: "One question, many rabbit holes",
        paragraphs: [
          "Most of the content I will share in this space will revolve around that one question. The more you pull on it, the more it opens up a surprisingly wide territory of ideas and technologies.",
          "At one end, you have the physical world: events happening, spaces existing, people performing, moments unfolding. At the other end, you have someone experiencing all that through a device. Between those two points lies a fascinating chain of capture, generation, processing, transmission and rendering.",
        ],
        quote: "How can the world be better represented by technology?",
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
  {
    slug: "deliver-where-it-matters-fov-fovea-and-vision-acuity",
    issueNumber: 2,
    date: "2026-10-26",
    topic: "xr",
    title: "Deliver where it matters: FOV, Fovea, and vision acuity",
    excerpt:
      "From optical illusions and the fovea to foveated streaming and the FOV optimization that helped define YBVR.",
    intro:
      "I'm a big fan of optical illusions, which are only possible because the human brain is quite marvelous in its ability to trick itself — and, therefore, our conscious perception of the world. You can relate this to many aspects of our lives, but for this tech post, I'll focus on how vision is reconstructed. The good news is that technology can benefit enormously from these tricks to deliver much better experiences to people.",
    sections: [
      {
        heading: "Our brains are wonderful tricksters",
        paragraphs: [
          "I'll skim through a few basic, but still fascinating, examples. Filling in blanks, correcting perceived mistakes, keeping us sane — it's amazing how much work happens behind the scenes.",
          "Take the color yellow, for example. A simple, basic color, right? Well, it's not really that simple. On a conventional RGB screen, there isn't a dedicated yellow subpixel: red and green light combine to create our perception of yellow. With clever engineering, we all believe it's there.",
          "Another example: for years, CRT televisions worked by scanning an electron beam across the screen, illuminating points sequentially. And yet, we perceived complete, moving pictures.",
          "Then there are our own eyes' blind spots. We all have them, where the optic nerve exits the retina. But we don't go about our lives noticing a hole off to one side of our visual field. Our brains take care of hiding it from us.",
          "And then there are the Lilac Chaser and the Gray Circle illusion. Try them out! It's truly fascinating to experience something that you know is there simply disappear.",
        ],
      },
      {
        heading: "Only a very, VERY small part is truly sharp",
        paragraphs: [
          "In fact, only a very small part of our vision is truly sharp. Although the entire retina acts as our sensor, the macula is the small central area responsible for much of our detailed central vision. At its center sits the fovea, where our highest visual acuity is concentrated.",
          "Outside that region, visual detail decreases significantly. Yet we don't see seams between those areas: our brains reconstruct a coherent visual experience.",
          "And it's here where things connect to the technology behind immersive experiences.",
        ],
        quote:
          "We don't experience a perfect image from our eyes. We experience an image reconstructed by our brains.",
        mediaAfterParagraph: 1,
        media: {
          src: "/media/vics-views/bcaddf4a-6f97-404e-88a8-a569bed53a2b.png",
          alt: "Diagram showing the retina, macula and fovea in a cross-section of the human eye.",
          caption: "The retina, macula and fovea in the human eye",
          appearance: "light",
        },
      },
      {
        heading: "Foveated rendering: spend processing where it matters",
        paragraphs: [
          "For 3D and immersive experiences, we use these tricks all the time. In fact, the roots of YBVR are firmly attached to trickery of this sort!",
          "Foveated rendering's entire raison d'être is that we can get away with lowering detail outside the region where the eye sees most sharply. This can save a ton of processing overall, concentrating more resources on the part of an image that matters most to our vision.",
          "Many XR headsets have used variations of this trick, and it remains an important component of immersive rendering pipelines.",
          "There is a great visual example by u/f4cepa1m on Reddit, linked below, showing how much detail can be reduced away from the center of attention.",
        ],
        mediaAfterParagraph: 2,
        media: {
          src: "/media/vics-views/cdc3e30e-a698-4aa3-aa2e-13802ffde9ff.png",
          alt: "Comparison of low, medium and high resolution regions in a foveated-rendering example.",
          caption: "Visual example of foveated rendering: high, medium and low resolution regions",
          appearance: "light",
          source: {
            label: "u/f4cepa1m · Reddit",
            href: "https://www.reddit.com/r/oculus/comments/66nfap/made_a_pic_that_shows_how_foveated_rendering/#lightbox",
          },
        },
      },
      {
        heading: "Foveated streaming: the same idea, applied to transmission",
        paragraphs: [
          "Valve's Steam Frame applies a related idea to the video stream between a PC and the headset. They call it foveated streaming: the aim is to focus streamed image quality where the viewer is looking.",
          "With an area as small as the fovea, you really need to know exactly where the user is looking. This is why low-latency eye tracking is essential to getting this approach right.",
        ],
        media: {
          src: "/media/vics-views/foveated-valve.gif",
          alt: "Valve's demonstration of gaze-directed foveated streaming.",
          caption: "Foveated streaming on Steam Frame",
          source: {
            label: "Valve",
            href: "https://store.steampowered.com/hardware/steamframe",
          },
        },
      },
      {
        heading: "YBVR: optimizing the Field of View",
        paragraphs: [
          "Our very own FOV-optimized streaming is based on the fact that we can get away with sending less quality where the user is not looking, as long as we can adapt and switch quickly.",
          "Although this may sound similar, we work on the Field of View (FOV), not directly on the fovea. This means the optimized areas are typically larger.",
          "This allows us to capture many of the quality and bandwidth benefits while making the approach scalable for large concurrent audiences. In future posts, I'll cover more on this!",
        ],
        quote:
          "Fun fact: our original company motto was “Delivering where it matters”, because this was our defining tech at the beginning of our journey!",
        media: {
          src: "/media/vics-views/fov-slide-ybvr.gif",
          alt: "YBVR's Field of View optimized video streaming demonstration.",
          caption: "FOV-optimized streaming",
          source: { label: "YBVR" },
        },
      },
      {
        heading: "A little bit of technological magic",
        paragraphs: [
          "With tricks like these being used all over the place, I often feel like building technology for immersive experiences is much like being a magician!",
        ],
      },
    ],
    links: [
      {
        label: "Foveated rendering visualization — u/f4cepa1m, Reddit",
        href: "https://www.reddit.com/r/oculus/comments/66nfap/made_a_pic_that_shows_how_foveated_rendering/#lightbox",
      },
      {
        label: "Steam Frame — Valve",
        href: "https://store.steampowered.com/hardware/steamframe",
      },
    ],
  },
];

export function getVicIssues(): VicIssue[] {
  return [...vicIssues].sort(
    (a, b) => b.date.localeCompare(a.date) || b.issueNumber - a.issueNumber,
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
