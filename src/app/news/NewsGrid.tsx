
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import FoxSportsXRArticle from "./FoxSportsXRArticle";
import { foxSportsXRNews } from "./foxSportsXRNews";
import { beyondTheScreenNews } from "./beyondTheScreenNews";

import styles from "./News.module.css";

// ========================================
// TYPES
// ========================================

export type NewsSection = {
  heading?: string;
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

// ========================================
// CONFIGURATION
// ========================================

const NEWS_IMAGE_SIZES =
  "(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw";

// Featured editorial order.
// These stories always appear before the
// remaining news from page.tsx.

const featuredNews: NewsItem[] = [
  beyondTheScreenNews,
  foxSportsXRNews,
];

// ========================================
// HELPERS
// ========================================

function chunkNews(
  news: NewsItem[],
  size: number,
): NewsItem[][] {
  const rows: NewsItem[][] = [];

  for (
    let index = 0;
    index < news.length;
    index += size
  ) {
    rows.push(news.slice(index, index + size));
  }

  return rows;
}

function orderNews(news: NewsItem[]): NewsItem[] {
  const featuredIds = new Set(
    featuredNews.map((item) => item.id),
  );

  return [
    ...featuredNews,
    ...news.filter(
      (item) => !featuredIds.has(item.id),
    ),
  ];
}

// ========================================
// COMPONENT
// ========================================

export default function NewsGrid({
  news,
}: NewsGridProps) {
  const [activeNewsId, setActiveNewsId] =
    useState<string | null>(null);

  const expandedRef =
    useRef<HTMLDivElement | null>(null);

  const orderedNews = orderNews(news);
  const rows = chunkNews(orderedNews, 3);

  // ========================================
  // SCROLL TO EXPANDED ARTICLE
  // ========================================

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
    setActiveNewsId((current) =>
      current === id ? null : id,
    );
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <div className={styles.newsGrid}>
      {rows.map((row, rowIndex) => {
        const activeNews = row.find(
          (item) => item.id === activeNewsId,
        );

        return (
          <div
            key={`row-${rowIndex}`}
            className={styles.newsRow}
          >
            {/* ==============================
                NEWS CARDS
            ============================== */}

            <div className={styles.newsRowCards}>
              {row.map((item) => {
                const isActive =
                  activeNewsId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={[
                      styles.newsCard,
                      isActive
                        ? styles.newsCardActive
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() =>
                      toggleNews(item.id)
                    }
                    aria-expanded={isActive}
                  >
                    <div
                      className={styles.newsCardImage}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes={NEWS_IMAGE_SIZES}
                        className={styles.newsImage}
                        style={{
                          objectPosition:
                            item.imagePosition ??
                            "center center",
                        }}
                      />

                      <div
                        className={
                          styles.newsImageOverlay
                        }
                        aria-hidden="true"
                      />
                    </div>

                    <div
                      className={
                        styles.newsCardContent
                      }
                    >
                      <time
                        className={styles.newsDate}
                      >
                        {item.date}
                      </time>

                      <div
                        className={
                          styles.newsCardBottom
                        }
                      >
                        <h2
                          className={
                            styles.newsTitle
                          }
                        >
                          {item.title}
                        </h2>

                        <div
                          className={
                            styles.newsCardIcon
                          }
                          aria-hidden="true"
                        >
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ==============================
                EXPANDED ARTICLE
            ============================== */}

            {activeNews && (
              <div
                ref={expandedRef}
                className={styles.expandedNews}
              >
                {/* Background image */}

                <div
                  className={
                    styles.expandedBackground
                  }
                  aria-hidden="true"
                >
                  <Image
                    src={activeNews.image}
                    alt=""
                    fill
                    sizes="100vw"
                    className={
                      styles.expandedBackgroundImage
                    }
                    style={{
                      objectPosition:
                        activeNews.imagePosition ??
                        "center center",
                    }}
                  />

                  <div
                    className={
                      styles.expandedBackgroundOverlay
                    }
                  />

                  <div
                    className={
                      styles.expandedBackgroundGrain
                    }
                  />
                </div>

                {/* Article top */}

                <div
                  className={styles.expandedTop}
                >
                  <div
                    className={
                      styles.expandedMeta
                    }
                  >
                    <span>YB News</span>

                    <time>
                      {activeNews.date}
                    </time>
                  </div>

                  <button
                    type="button"
                    className={
                      styles.closeButton
                    }
                    onClick={() =>
                      setActiveNewsId(null)
                    }
                    aria-label="Close article"
                  >
                    <span />
                    <span />
                  </button>
                </div>

                {/* Article layout */}

                <div
                  className={
                    styles.expandedGrid
                  }
                >
                  <div
                    className={
                      styles.expandedHeadline
                    }
                  >
                    <h2>
                      {activeNews.title}
                    </h2>
                  </div>

                  <article
                    className={styles.article}
                  >
                    {/* Introduction */}

                    <p
                      className={
                        styles.articleIntro
                      }
                    >
                      {activeNews.intro}
                    </p>

                    {/* Article body */}

                    <div
                      className={
                        styles.articleBody
                      }
                    >
                      {activeNews.sections.map(
                        (
                          section,
                          sectionIndex,
                        ) => (
                          <section
                            key={
                              `${activeNews.id}-section-${sectionIndex}`
                            }
                            className={
                              styles.articleSection
                            }
                          >
                            {section.heading && (
                              <h3>
                                {section.heading}
                              </h3>
                            )}

                            {section.paragraphs?.map(
                              (
                                paragraph,
                                paragraphIndex,
                              ) => (
                                <p
                                  key={
                                    `${activeNews.id}-${sectionIndex}-p-${paragraphIndex}`
                                  }
                                >
                                  {paragraph}
                                </p>
                              ),
                            )}

                            {section.bullets && (
                              <ul
                                className={
                                  styles.articleList
                                }
                              >
                                {section.bullets.map(
                                  (
                                    bullet,
                                    bulletIndex,
                                  ) => (
                                    <li
                                      key={
                                        `${activeNews.id}-${sectionIndex}-bullet-${bulletIndex}`
                                      }
                                    >
                                      {bullet}
                                    </li>
                                  ),
                                )}
                              </ul>
                            )}

                            {section.paragraphsAfter?.map(
                              (
                                paragraph,
                                paragraphIndex,
                              ) => (
                                <p
                                  key={
                                    `${activeNews.id}-${sectionIndex}-after-${paragraphIndex}`
                                  }
                                >
                                  {paragraph}
                                </p>
                              ),
                            )}
                          </section>
                        ),
                      )}

                      {/* FOX editorial component */}

                      {activeNews.id ===
                        "fox-sports-xr-2026" && (
                        <FoxSportsXRArticle />
                      )}
                    </div>

                    {/* ==============================
                        ARTICLE LINKS
                    ============================== */}

                    {activeNews.links &&
                      activeNews.links.length >
                        0 && (
                        <div
                          className={
                            styles.articleLinks
                          }
                        >
                          {activeNews.links.map(
                            (link, index) => {
                              const isExternal =
                                /^https?:\/\//.test(
                                  link.href,
                                );

                              return (
                                <a
                                  key={
                                    `${link.href}-${index}`
                                  }
                                  href={link.href}
                                  target={
                                    isExternal
                                      ? "_blank"
                                      : undefined
                                  }
                                  rel={
                                    isExternal
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                  className={
                                    styles.articleLink
                                  }
                                >
                                  <span>
                                    {link.label}
                                  </span>

                                  <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
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
                              );
                            },
                          )}
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
