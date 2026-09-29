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

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  image: string;
  intro: string;
  body: string[];
};


type NewsGridProps = {
  news: NewsItem[];
};


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
     SCROLL TO OPEN ARTICLE
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
        (row, rowIndex) => {

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

              <div
                className={
                  styles.newsRowCards
                }
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

                        <div
                          className={
                            styles.newsCardImage
                          }
                        >

                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="
                              (max-width: 760px) 100vw,
                              (max-width: 1100px) 50vw,
                              33vw
                            "
                            className={
                              styles.newsImage
                            }
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
                            className={
                              styles.newsDate
                            }
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
                  },
                )}

              </div>


              {activeNews && (

                <div
                  ref={expandedRef}
                  className={
                    styles.expandedNews
                  }
                >

                  <div
                    className={
                      styles.expandedTop
                    }
                  >

                    <div
                      className={
                        styles.expandedMeta
                      }
                    >

                      <span>
                        News
                      </span>

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
                        {
                          activeNews.title
                        }
                      </h2>

                    </div>


                    <article
                      className={
                        styles.article
                      }
                    >

                      <p
                        className={
                          styles.articleIntro
                        }
                      >
                        {
                          activeNews.intro
                        }
                      </p>


                      <div
                        className={
                          styles.articleBody
                        }
                      >

                        {activeNews.body.map(
                          (
                            paragraph,
                            index,
                          ) => (
                            <p
                              key={
                                `${activeNews.id}-${index}`
                              }
                            >
                              {
                                paragraph
                              }
                            </p>
                          ),
                        )}

                      </div>

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