"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import FoxSportsXRArticle from "./FoxSportsXRArticle";
import VicsViewsBanner from "./VicsViewsBanner";
import { foxSportsXRNews } from "./foxSportsXRNews";
import styles from "./News.module.css";

export type NewsSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
};

export type NewsLink = {
  label: string;
  href: string;
};

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  image: string;
  imagePosition?: string;
  intro: string;
  sections: NewsSection[];
  links?: NewsLink[];
};

type NewsGridProps = {
  news: NewsItem[];
};

const NEWS_IMAGE_SIZES =
  "(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw";

function chunkNews(news: NewsItem[], size: number): NewsItem[][] {
  const rows: NewsItem[][] = [];

  for (let index = 0; index < news.length; index += size) {
    rows.push(news.slice(index, index + size));
  }

  return rows;
}

export default function NewsGrid({ news }: NewsGridProps) {
  const [activeNewsId, setActiveNewsId] = useState<string | null>(null);
  const expandedRef = useRef<HTMLDivElement | null>(null);
  const newsGridRef = useRef<HTMLDivElement | null>(null);
  const [heroTarget, setHeroTarget] = useState<HTMLElement | null>(null);

  // Find the existing News hero without replacing page.tsx.
  // The feature is portaled INTO that hero rather than rendered below it.
  useEffect(() => {
    const grid = newsGridRef.current;
    const headings = Array.from(document.querySelectorAll<HTMLElement>("h1, h2"));
    const title = headings.find((el) =>
      /latest\s+news/i.test(el.textContent?.replace(/\s+/g, " ") ?? ""),
    );

    let hero: HTMLElement | null = null;
    let ancestor = title?.parentElement ?? null;

    // Prefer a classed hero/header container (works with CSS modules).
    while (ancestor && ancestor !== document.body) {
      if (ancestor === grid || ancestor.contains(grid)) break;
      const classes = Array.from(ancestor.classList).join(" ");
      if (/hero|newsheader|news-header/i.test(classes)) {
        // Keep walking to target the outer hero, not the inner title column.
        hero = ancestor;
      }
      ancestor = ancestor.parentElement;
    }
    if (title) {
      // If the heading lives in a semantic section/header, prefer that whole
      // block over a nested .heroCopy / .heroText element.
      const candidate = title.closest<HTMLElement>("section, header");
      if (candidate && candidate !== grid && !candidate.contains(grid)) {
        if (!hero || candidate.contains(hero)) hero = candidate;
      }
    }
    if (!hero) return;

    const originalPosition = hero.style.position;
    if (getComputedStyle(hero).position === "static") {
      hero.style.position = "relative";
    }
    hero.setAttribute("data-vics-hero", "true");
    setHeroTarget(hero);
    return () => {
      hero.removeAttribute("data-vics-hero");
      hero.style.position = originalPosition;
    };
  }, []);

  // FOX Sports XR is always the first card, even if page.tsx has not
  // added it to the news array. Filtering also prevents duplicates.
  const newsWithFoxFirst = [
    foxSportsXRNews,
    ...news.filter((item) => item.id !== foxSportsXRNews.id),
  ];
  const rows = chunkNews(newsWithFoxFirst, 3);

  useEffect(() => {
    if (!activeNewsId) return;

    const timeout = window.setTimeout(() => {
      expandedRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 120);

    return () => window.clearTimeout(timeout);
  }, [activeNewsId]);

  const toggleNews = (id: string) => {
    setActiveNewsId((current) => (current === id ? null : id));
  };

  return (
    <div ref={newsGridRef} className={styles.newsGrid}>
      {heroTarget && createPortal(<VicsViewsBanner />, heroTarget)}
      {rows.map((row, rowIndex) => {
        const activeNews = row.find((item) => item.id === activeNewsId);

        return (
          <div key={`row-${rowIndex}`} className={styles.newsRow}>
            {/* News cards */}
            <div className={styles.newsRowCards}>
              {row.map((item) => {
                const isActive = activeNewsId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={[
                      styles.newsCard,
                      isActive ? styles.newsCardActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => toggleNews(item.id)}
                    aria-expanded={isActive}
                  >
                    <div className={styles.newsCardImage}>
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes={NEWS_IMAGE_SIZES}
                        className={styles.newsImage}
                        style={{
                          objectPosition: item.imagePosition ?? "center center",
                        }}
                      />
                      <div
                        className={styles.newsImageOverlay}
                        aria-hidden="true"
                      />
                    </div>

                    <div className={styles.newsCardContent}>
                      <time className={styles.newsDate}>{item.date}</time>
                      <div className={styles.newsCardBottom}>
                        <h2 className={styles.newsTitle}>{item.title}</h2>
                        <div className={styles.newsCardIcon} aria-hidden="true">
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Expanded article: only one open in the selected row */}
            {activeNews && (
              <div ref={expandedRef} className={styles.expandedNews}>
                <div
                  className={styles.expandedBackground}
                  aria-hidden="true"
                >
                  <Image
                    src={activeNews.image}
                    alt=""
                    fill
                    sizes="100vw"
                    className={styles.expandedBackgroundImage}
                    style={{
                      objectPosition:
                        activeNews.imagePosition ?? "center center",
                    }}
                  />
                  <div className={styles.expandedBackgroundOverlay} />
                  <div className={styles.expandedBackgroundGrain} />
                </div>

                <div className={styles.expandedTop}>
                  <div className={styles.expandedMeta}>
                    <span>YB News</span>
                    <time>{activeNews.date}</time>
                  </div>
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => setActiveNewsId(null)}
                    aria-label="Close article"
                  >
                    <span />
                    <span />
                  </button>
                </div>

                <div className={styles.expandedGrid}>
                  <div className={styles.expandedHeadline}>
                    <h2>{activeNews.title}</h2>
                  </div>

                  <article className={styles.article}>
                    <p className={styles.articleIntro}>{activeNews.intro}</p>

                    <div className={styles.articleBody}>
                      {/* Original article sections */}
                      {activeNews.sections.map((section, sectionIndex) => (
                        <section
                          key={`${activeNews.id}-section-${sectionIndex}`}
                          className={styles.articleSection}
                        >
                          <h3>{section.heading}</h3>

                          {section.paragraphs?.map((paragraph, paragraphIndex) => (
                            <p
                              key={`${activeNews.id}-${sectionIndex}-p-${paragraphIndex}`}
                            >
                              {paragraph}
                            </p>
                          ))}

                          {section.bullets && (
                            <ul className={styles.articleList}>
                              {section.bullets.map((bullet, bulletIndex) => (
                                <li
                                  key={`${activeNews.id}-${sectionIndex}-bullet-${bulletIndex}`}
                                >
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          )}

                          {section.paragraphsAfter?.map(
                            (paragraph, paragraphIndex) => (
                              <p
                                key={`${activeNews.id}-${sectionIndex}-after-${paragraphIndex}`}
                              >
                                {paragraph}
                              </p>
                            ),
                          )}
                        </section>
                      ))}

                      {/* Dedicated editorial layout for FOX Sports XR */}
                      {activeNews.id === "fox-sports-xr-2026" && (
                        <FoxSportsXRArticle />
                      )}
                    </div>

                    {/* Existing external links for standard news items */}
                    {activeNews.links && activeNews.links.length > 0 && (
                      <div className={styles.articleLinks}>
                        {activeNews.links.map((link, index) => (
                          <a
                            key={`${link.href}-${index}`}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.articleLink}
                          >
                            <span>{link.label}</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                              <path
                                d="M5 12h13M13 6l6 6-6 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
