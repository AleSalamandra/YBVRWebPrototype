"use client";

import Image from "next/image";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./News.module.css";


/* ========================================
   TYPES
======================================== */

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


/* ========================================
   CONSTANTS
======================================== */

const NEWS_IMAGE_SIZES =
  "(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw";


/* ========================================
   HELPERS
======================================== */

function chunkNews(
  news: NewsItem[],
  size: number,
) {
  const rows: NewsItem[][] = [];

  for (
    let index = 0;
    index < news.length;
    index += size
  ) {
    rows.push(
      news.slice(
        index,
        index + size,
      ),
    );
  }

  return rows;
}


/* ========================================
   NEWS GRID
======================================== */

export default function NewsGrid({
  news,
}: NewsGridProps) {
  const [
    activeNewsId,
    setActiveNewsId,
  ] = useState<string | null>(
    null,
  );

  const expandedRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const rows =
    chunkNews(
      news,
      3,
    );


  /* ========================================
     SCROLL TO ARTICLE
  ======================================== */

  useEffect(() => {
    if (!activeNewsId) {
      return;
    }

    const timeout =
      window.setTimeout(
        () => {
          expandedRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        },
        120,
      );

    return () => {
      window.clearTimeout(
        timeout,
      );
    };
  }, [activeNewsId]);


  /* ========================================
     TOGGLE
  ======================================== */

  const toggleNews = (
    id: string,
  ) => {
    setActiveNewsId(
      (current) =>
        current === id
          ? null
          : id,
    );
  };


  /* ========================================
     RENDER
  ======================================== */

  return (
    <div className={styles.newsGrid}>

      {rows.map(
        (
          row,
          rowIndex,
        ) => {

          const activeNews =
            row.find(
              (item) =>
                item.id ===
                activeNewsId,
            );


          return (
            <div
              key={`row-${rowIndex}`}
              className={styles.newsRow}
            >

              {/* ========================================
                  CARDS
              ======================================== */}

              <div
                className={styles.newsRowCards}
              >

                {row.map(
                  (item) => {

                    const isActive =
                      activeNewsId ===
                      item.id;


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
                          toggleNews(
                            item.id,
                          )
                        }
                        aria-expanded={
                          isActive
                        }
                      >

                        {/* IMAGE */}

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
                            className={styles.newsImageOverlay}
                            aria-hidden="true"
                          />

                        </div>


                        {/* CONTENT */}

                        <div
                          className={styles.newsCardContent}
                        >

                          <time
                            className={styles.newsDate}
                          >
                            {item.date}
                          </time>


                          <div
                            className={styles.newsCardBottom}
                          >

                            <h2
                              className={styles.newsTitle}
                            >
                              {item.title}
                            </h2>


                            <div
                              className={styles.newsCardIcon}
                              aria-hidden="true"
                            >
                              <span />
                              <span />
                            </div>

                          </div>

                        </div>

                      </button>
                    );
                  },
                )}

              </div>


              {/* ========================================
                  EXPANDED ARTICLE
              ======================================== */}

              {activeNews && (

                <div
                  ref={expandedRef}
                  className={styles.expandedNews}
                >

                  {/* ========================================
                      BACKGROUND IMAGE
                  ======================================== */}

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
                          activeNews.imagePosition ??
                          "center center",
                      }}
                    />

                    <div
                      className={styles.expandedBackgroundOverlay}
                    />

                    <div
                      className={styles.expandedBackgroundGrain}
                    />

                  </div>


                  {/* ========================================
                      TOP
                  ======================================== */}

                  <div
                    className={styles.expandedTop}
                  >

                    <div
                      className={styles.expandedMeta}
                    >

                      <span>
                        YB News
                      </span>

                      <time>
                        {activeNews.date}
                      </time>

                    </div>


                    <button
                      type="button"
                      className={styles.closeButton}
                      onClick={() =>
                        setActiveNewsId(
                          null,
                        )
                      }
                      aria-label="Close article"
                    >
                      <span />
                      <span />
                    </button>

                  </div>


                  {/* ========================================
                      ARTICLE
                  ======================================== */}

                  <div
                    className={styles.expandedGrid}
                  >

                    <div
                      className={styles.expandedHeadline}
                    >

                      <h2>
                        {activeNews.title}
                      </h2>

                    </div>


                    <article
                      className={styles.article}
                    >

                      <p
                        className={styles.articleIntro}
                      >
                        {activeNews.intro}
                      </p>


                      <div
                        className={styles.articleBody}
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
                              className={styles.articleSection}
                            >

                              <h3>
                                {section.heading}
                              </h3>


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
                                  className={styles.articleList}
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

                      </div>


                      {/* ========================================
                          LINKS
                      ======================================== */}

                      {activeNews.links &&
                        activeNews.links.length > 0 && (

                        <div
                          className={styles.articleLinks}
                        >

                          {activeNews.links.map(
                            (
                              link,
                              index,
                            ) => (
                              <a
                                key={
                                  `${link.href}-${index}`
                                }
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.articleLink}
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
                            ),
                          )}

                        </div>

                      )}

                    </article>

                  </div>

                </div>

              )}

            </div>
          );
        },
      )}

    </div>
  );
}