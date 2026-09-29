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
  {
    id: "news-01",
    date: "September 29, 2026",
    title:
      "News headline goes here",
    image:
      "/media/news/news_01.jpg",
    intro:
      "A short introduction to the story goes here. It should summarize the announcement in one or two concise sentences.",
    body: [
      "This is placeholder copy for the full article. Replace it with the final news content when the story is ready to publish.",
      "The expanded layout is designed to support several paragraphs while keeping the page within the same editorial grid.",
    ],
  },

  {
    id: "news-02",
    date: "September 18, 2026",
    title:
      "A second YB news headline",
    image:
      "/media/news/news_02.jpg",
    intro:
      "A concise introduction explaining the context and relevance of this piece of news.",
    body: [
      "Add the complete article here. The content can include project announcements, product releases, partnerships, company updates or research developments.",
      "Longer stories can simply add more paragraphs to the body array.",
    ],
  },

  {
    id: "news-03",
    date: "September 04, 2026",
    title:
      "Another announcement from YB",
    image:
      "/media/news/news_03.jpg",
    intro:
      "Short introductory copy for the third story.",
    body: [
      "Full article copy goes here.",
      "The rest of the news cards remain in the grid and move down when this story is opened.",
    ],
  },

  {
    id: "news-04",
    date: "August 21, 2026",
    title:
      "News headline number four",
    image:
      "/media/news/news_04.jpg",
    intro:
      "A short summary or standfirst for this story.",
    body: [
      "Full article content goes here.",
      "This structure can be replaced later by CMS content without changing the visual component.",
    ],
  },

  {
    id: "news-05",
    date: "August 07, 2026",
    title:
      "News headline number five",
    image:
      "/media/news/news_05.jpg",
    intro:
      "Introductory paragraph for this news item.",
    body: [
      "Full article content goes here.",
    ],
  },

  {
    id: "news-06",
    date: "July 24, 2026",
    title:
      "News headline number six",
    image:
      "/media/news/news_06.jpg",
    intro:
      "Introductory paragraph for this news item.",
    body: [
      "Full article content goes here.",
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
          NEWS
      ======================================== */}

      <section className={styles.newsSection}>

        <Container>

          <div className={styles.sectionHeader}>

            <span>
              Latest news
            </span>

            <span>
              {news.length.toString().padStart(2, "0")}
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