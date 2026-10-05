import type { Metadata } from "next";

import Container from "@/components/ui/Container";

import NewsGrid, {
  type NewsItem,
} from "./NewsGrid";

import styles from "./News.module.css";


export const metadata: Metadata = {
  title: "News | YB",
  description:
    "Latest news, projects, partnerships and developments from YB.",
};


/* ========================================
   NEWS DATA
======================================== */

const news: NewsItem[] = [

  /* ========================================
     01 — EUROLEAGUE FINAL FOUR
  ======================================== */

  {
    id: "euroleague-final-four-vr",

    date: "DATE TBC",

    title:
      "EuroLeague Final Four returns to VR on Xtadium",

    image:
      "/media/news/CARTEL_EUROLIGUE.png",

    imagePosition:
      "center center",

    intro:
      "Fans across Europe and the United States will be able to relive the EuroLeague Final Four through immersive content on Xtadium and EuroLeague TV VR, bringing the atmosphere, action and moments beyond the game closer than ever.",

    sections: [
      {
        heading:
          "Relive the Final Four in VR",

        paragraphs: [
          "The EuroLeague Final Four represents the pinnacle of European basketball, bringing together elite clubs, passionate supporters and one of the most electric atmospheres in global sport.",

          "This year, fans will once again be able to experience the event through immersive content created to bring them closer to the action, the atmosphere and the moments beyond the game itself.",
        ],

        bullets: [
          "Full immersive replays of both semifinal games and the Final, available shortly after each game concludes.",
          "Immersive highlights capturing key moments from all three games.",
          "Behind-the-scenes and promotional content captured on-site in Athens.",
        ],
      },

      {
        heading:
          "Bringing fans closer to the action",

        paragraphs: [
          "As sports experiences continue to evolve, fans increasingly expect access that goes beyond traditional viewing.",

          "The ongoing collaboration between Xtadium and EuroLeague explores new ways to connect audiences with basketball through immersive storytelling, premium replay experiences and behind-the-scenes moments that extend beyond the traditional broadcast.",

          "By making content available shortly after the final buzzer, supporters can relive the biggest moments of the tournament while the emotion, atmosphere and intensity are still fresh.",
        ],
      },

      {
        heading:
          "Available on Xtadium and EuroLeague TV VR",

        paragraphs: [
          "EuroLeague Final Four immersive content will be available through Xtadium and EuroLeague TV VR across Europe and the United States.",
        ],

        bullets: [
          "Meta Quest",
          "Android",
          "iOS",
        ],

        paragraphsAfter: [
          "The EuroLeague Final Four begins on May 22, with immersive content available shortly after each game.",
        ],
      },
    ],

    links: [
      {
        label:
          "Download Xtadium",

        href:
          "https://www.meta.com/experiences/xtadium-immersive-sports-streaming-in-vr/7281839885191361/",
      },
    ],
  },


  /* ========================================
     02 — XTADIUM SPAIN
  ======================================== */

  {
    id: "xtadium-spain",

    date: "DATE TBC",

    title:
      "Xtadium launches in Spain on Meta Quest",

    image:
      "/media/news/YBVR_Xtadium-1.webp",

    imagePosition:
      "center center",

    intro:
      "Xtadium is now available in Spain, bringing immersive sports experiences to fans through Meta Quest and opening a new way to connect with stadiums, clubs, events and matchday moments.",

    sections: [
      {
        heading:
          "Experience sport in VR from Spain",

        paragraphs: [
          "Xtadium was created to bring fans closer to the emotion, energy and atmosphere of sport.",

          "Instead of simply watching from a screen, fans can step inside immersive sports environments and explore moments from entirely new perspectives.",
        ],

        bullets: [
          "Step inside iconic stadiums and sporting environments.",
          "Experience matchday build-up, fan energy and atmosphere.",
          "Go behind the scenes with clubs and events.",
          "Relive key moments through immersive highlights and storytelling.",
          "Discover sports content through first-person 180° viewing.",
        ],

        paragraphsAfter: [
          "This is not about watching more. It is about experiencing more.",
        ],
      },

      {
        heading:
          "A global VR sports platform",

        paragraphs: [
          "With more than nine years of experience in immersive streaming and over 750,000 downloads, Xtadium continues its international expansion with Spain as its fourth major market.",

          "Built for the next generation of sports entertainment, Xtadium works with clubs, leagues, events, broadcasters and technology partners to deliver immersive sports experiences directly to fans.",

          "Its growing content library includes experiences featuring some of the world's most recognisable clubs and events, including Manchester City and Paris Saint-Germain.",
        ],
      },

      {
        heading:
          "Built for Meta Quest",

        paragraphs: [
          "Xtadium is designed for Meta Quest devices, including Meta Quest 2, Meta Quest 3 and Meta Quest Pro.",

          "By combining immersive video with interactive features, Xtadium gives fans a new way to connect with sport — exploring different perspectives, experiencing scale and atmosphere, and accessing content in a more emotional and engaging way than traditional viewing.",
        ],
      },

      {
        heading:
          "Free to download",

        paragraphs: [
          "Xtadium is free to download from the Meta Quest Store. Fans in Spain can now access immersive sports experiences directly from their headset, making VR sports more accessible than ever.",

          "The launch in Spain marks another step in Xtadium's mission to bring immersive sports experiences to fans around the world.",
        ],
      },
    ],

    links: [
      {
        label:
          "Download Xtadium",

        href:
          "https://www.meta.com/experiences/xtadium-immersive-sports-streaming-in-vr/7281839885191361/",
      },
    ],
  },


  /* ========================================
     03 — MANCHESTER CITY
  ======================================== */

  {
    id: "manchester-city-space",

    date: "DATE TBC",

    title:
      "Step inside Manchester City with City Space on Xtadium",

    image:
      "/media/news/Header_Xtadium-web.webp",

    imagePosition:
      "center center",

    intro:
      "City Space gives Manchester City supporters a new way to connect with the Club, bringing iconic moments, behind-the-scenes perspectives and immersive 180° content directly into Meta Quest.",

    sections: [
      {
        heading:
          "A different view of Manchester City",

        paragraphs: [
          "Sometimes the best seat at the Etihad Stadium isn't the one you expected.",

          "Available on Meta Quest headsets, City Space allows supporters to relive iconic Manchester City moments and explore immersive content from both the men's and women's teams.",

          "From celebrations and matchday atmosphere to behind-the-scenes perspectives, the experience places supporters closer to the players, the crowd and the energy surrounding the Club.",
        ],
      },

      {
        heading:
          "Watch Manchester City content in VR",

        paragraphs: [
          "Xtadium combines traditional 2D video with immersive experiences, allowing supporters to revisit moments from perspectives that are impossible through a conventional broadcast.",

          "New content is added over time, giving fans fresh moments and perspectives to discover whenever they return to City Space.",
        ],
      },

      {
        heading:
          "How to enter City Space",

        bullets: [
          "Put on a compatible Meta Quest headset.",
          "Download and open Xtadium.",
          "Enter City Space.",
          "Choose from highlights, immersive experiences and exclusive footage.",
          "Explore the available perspectives and experience Manchester City from inside the environment.",
        ],
      },

      {
        heading:
          "More than football",

        paragraphs: [
          "Xtadium extends beyond Manchester City with a growing catalogue of immersive sports content and experiences.",

          "As new partnerships and formats are added, the platform continues to explore how immersive media can give sports fans a different relationship with the moments that matter.",
        ],
      },
    ],

    links: [
      {
        label:
          "Explore City Space",

        href:
          "https://www.mancity.com/cityspace",
      },

      {
        label:
          "Download Xtadium",

        href:
          "https://www.meta.com/experiences/xtadium-immersive-sports-streaming-in-vr/7281839885191361/",
      },
    ],
  },


  /* ========================================
     04 — META QUEST
  ======================================== */

  {
    id: "meta-quest-3-guide",

    date: "DATE TBC",

    title:
      "Meta Quest 3 vs Quest 3S: what matters for immersive sports",

    image:
      "/media/news/Xtadium-Hero-1.jpg",

    imagePosition:
      "center center",

    intro:
      "Meta Quest 3 and Quest 3S bring modern standalone VR to a wider audience. Here is what separates the two headsets — and what those differences mean when experiencing immersive sports through platforms like Xtadium.",

    sections: [
      {
        heading:
          "What makes Meta Quest 3 stand out",

        paragraphs: [
          "Meta Quest 3 combines higher-resolution displays, pancake optics and full-colour mixed reality in a compact standalone headset designed for immersive entertainment.",
        ],

        bullets: [
          "Dual LCD displays at approximately 2064 × 2208 pixels per eye.",
          "Pancake lenses designed to improve clarity across the display.",
          "Continuous interpupillary distance adjustment.",
          "Full-colour passthrough for mixed-reality experiences.",
        ],
      },

      {
        heading:
          "Quest 3 vs Quest 3S",

        paragraphs: [
          "Both devices use the Snapdragon XR2 Gen 2 platform, include 8 GB of RAM and access the same Meta Quest software ecosystem, but their optics and displays create different experiences.",
        ],

        bullets: [
          "Quest 3 offers higher display resolution and a wider field of view.",
          "Quest 3 uses pancake lenses while Quest 3S uses Fresnel optics.",
          "Quest 3 provides continuous IPD adjustment while Quest 3S uses preset positions.",
          "Quest 3S is positioned as the more accessible entry point, while Quest 3 focuses on higher visual quality and optical comfort.",
        ],
      },

      {
        heading:
          "What happened to Oculus?",

        paragraphs: [
          "Oculus began as an independent virtual reality company before being acquired by Facebook in 2014.",

          "The Oculus brand later became the foundation of Meta's VR ecosystem and its hardware is now sold under the Meta Quest name. The Oculus name is still commonly used when referring to Meta's VR devices.",
        ],
      },

      {
        heading:
          "Why hardware matters for VR sports",

        paragraphs: [
          "In immersive media, the headset directly shapes the experience. Display clarity, optics, tracking and comfort influence how convincingly users can feel present inside virtual environments.",

          "Platforms such as Xtadium use that hardware to bring sports content into immersive spaces, allowing audiences to experience scale, atmosphere and first-person perspectives beyond a traditional flat-screen broadcast.",
        ],
      },
    ],

    links: [
      {
        label:
          "Experience Xtadium",

        href:
          "https://www.meta.com/experiences/xtadium-immersive-sports-streaming-in-vr/7281839885191361/",
      },
    ],
  },


  /* ========================================
     05 — YOUTUBE
  ======================================== */

  {
    id: "youtube-in-xtadium",

    date: "DATE TBC",

    title:
      "Watch YouTube differently inside Xtadium",

    image:
      "/media/news/Xtadium_MetaQuest_Sports.jpg",

    imagePosition:
      "center center",

    intro:
      "YouTube already brings together sport, music, creators, documentaries and culture. Inside Xtadium, that familiar content can be experienced on a much bigger canvas within an immersive environment.",

    sections: [
      {
        heading:
          "YouTube inside Xtadium",

        paragraphs: [
          "From viral creators and sports highlights to documentaries, interviews, podcasts and music, YouTube has become one of the world's most diverse video destinations.",

          "Xtadium gives that content a different setting: users can discover and watch YouTube video from inside a virtual environment rather than through a conventional screen.",
        ],

        bullets: [
          "Watch video on a large virtual screen.",
          "Browse content from inside an immersive environment.",
          "Explore sports, music, documentaries, interviews and creator content.",
        ],

        paragraphsAfter: [
          "The YouTube video itself remains 2D. The immersive element comes from the environment and viewing experience built around it.",
        ],
      },

      {
        heading:
          "How to watch YouTube with Meta Quest",

        bullets: [
          "Turn on your Meta Quest headset.",
          "Open Xtadium from your app library.",
          "Find the YouTube space inside Xtadium.",
          "Select the video you want to watch.",
          "Experience it on a virtual screen inside the environment.",
        ],
      },

      {
        heading:
          "A bigger viewing experience",

        paragraphs: [
          "Watching YouTube inside Xtadium is not only about making the screen larger. The surrounding environment changes the context in which content is experienced.",

          "Sports highlights, music performances, interviews and documentaries can all sit inside spaces designed to make viewing feel more intentional, cinematic and immersive.",

          "The video remains familiar. The space around it becomes something new.",
        ],
      },
    ],

    links: [
      {
        label:
          "Open Xtadium",

        href:
          "https://www.meta.com/experiences/xtadium-immersive-sports-streaming-in-vr/7281839885191361/",
      },
    ],
  },


  /* ========================================
     06 — EUROLEAGUE HIGHLIGHTS
  ======================================== */

  {
    id: "euroleague-highlights-vr",

    date: "DATE TBC",

    title:
      "Relive EuroLeague basketball highlights in immersive VR",

    image:
      "/media/news/Final-Four-Kaunas_2-e1684330426179.jpg",

    imagePosition:
      "center center",

    intro:
      "Virtual reality gives basketball fans a different relationship with the game — replacing the distant screen with a viewing experience designed to bring the scale, energy and intensity of the arena closer.",

    sections: [
      {
        heading:
          "EuroLeague highlights from a new perspective",

        paragraphs: [
          "Sitting courtside without leaving home is becoming possible through immersive sports experiences.",

          "Xtadium transforms traditional highlight viewing into a VR basketball experience, allowing fans to revisit major plays from perspectives designed to feel closer to the court and the surrounding atmosphere.",
        ],
      },

      {
        heading:
          "Bringing EuroLeague to fans through Xtadium",

        paragraphs: [
          "EuroLeague content has been part of Xtadium's growing catalogue of immersive sports experiences.",

          "The platform is designed around immersive sports viewing, giving audiences a way to experience games, highlights and sporting environments beyond the fixed perspective of traditional television.",
        ],
      },

      {
        heading:
          "Memorable EuroLeague moments",

        paragraphs: [
          "Recent EuroLeague seasons have produced championship runs, decisive shots, standout individual performances and some of the strongest atmospheres in European basketball.",
        ],

        bullets: [
          "Championship runs and decisive Final Four moments.",
          "Elite ball movement, buzzer-beaters and standout performances.",
          "Rising stars and MVP-level performances.",
          "Immersive highlights designed to bring viewers closer to the court.",
        ],
      },

      {
        heading:
          "A broader vision for VR sports",

        paragraphs: [
          "Basketball is only one part of Xtadium's broader immersive sports catalogue.",

          "The platform continues to explore experiences across multiple sports, using immersive video to bring fans closer to athletes, venues and moments that would otherwise be impossible to experience from that perspective.",

          "The passion, competition and atmosphere remain the same. VR simply changes how close the audience can get.",
        ],
      },
    ],

    links: [
      {
        label:
          "Watch on Xtadium",

        href:
          "https://www.meta.com/experiences/xtadium-immersive-sports-streaming-in-vr/7281839885191361/",
      },
    ],
  },
];


/* ========================================
   PAGE
======================================== */

export default function NewsPage() {
  return (
    <main className={styles.page}>

      {/* ========================================
          HERO
      ======================================== */}

      <section className={styles.hero}>

        <Container className={styles.heroInner}>

          <p className={styles.heroKicker}>
            YB / News
          </p>

          <h1 className={styles.heroTitle}>
            Latest
            <br />
            news.
          </h1>

          <p className={styles.heroDescription}>
            Projects, partnerships, technology
            and everything happening across YB.
          </p>

        </Container>

      </section>


      {/* ========================================
          NEWS GRID
      ======================================== */}

      <section className={styles.newsSection}>

        <Container>

          <div className={styles.sectionHeader}>

            <span>
              Latest news
            </span>

            <span>
              {news.length
                .toString()
                .padStart(2, "0")}
            </span>

          </div>


          <NewsGrid
            news={news}
          />

        </Container>

      </section>

    </main>
  );
}