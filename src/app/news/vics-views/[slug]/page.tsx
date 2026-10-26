import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  formatVicDate,
  getVicIssue,
  getVicIssues,
  vicTopics,
  type VicIssueMedia,
} from "@/data/vicsViews";

import styles from "./issue.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getVicIssues().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = getVicIssue(slug);

  if (!issue) return { title: "Vic's Views | YB" };

  return {
    title: `${issue.title} | Vic's Views | YB`,
    description: issue.excerpt,
  };
}

function IssueMedia({ media }: { media: VicIssueMedia }) {
  return (
    <figure className={styles.media}>
      {/* Next Image's automatic optimization is unnecessary for editorial GIFs. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={media.src} alt={media.alt} loading="lazy" />
      {(media.caption || media.source) && (
        <figcaption className={styles.mediaCaption}>
          <span>{media.caption}</span>
          {media.source && (
            <span>
              Source: {media.source.href ? (
                <a href={media.source.href} target="_blank" rel="noopener noreferrer">
                  {media.source.label}
                </a>
              ) : (
                media.source.label
              )}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default async function VicIssuePage({ params }: Props) {
  const { slug } = await params;
  const issue = getVicIssue(slug);

  if (!issue) notFound();

  const topic = vicTopics.find(({ id }) => id === issue.topic);
  const number = String(issue.issueNumber).padStart(2, "0");

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/news/vics-views" className={styles.backLink}>
            <span aria-hidden="true">←</span> All Vic's Views
          </Link>
          <p className={styles.eyebrow}>VIC'S VIEWS <span>—</span> ISSUE {number}</p>
          <h1>{issue.title}</h1>
          <p className={styles.deck}>{issue.excerpt}</p>
          <div className={styles.metadata}>
            <span>{formatVicDate(issue.date)}</span>
            {topic && <span>{topic.label}</span>}
            <span>Victor · YB</span>
          </div>
        </div>
        <div className={styles.heroShape} aria-hidden="true" />
      </header>

      <article className={styles.article}>
        <div className={styles.introduction}>
          <span className={styles.sideLabel}>INTRODUCTION</span>
          <p>{issue.intro}</p>
        </div>

        {issue.feature && (
          <figure className={styles.feature}>
            <div className={styles.featureCopy}>
              {issue.feature.eyebrow && <p className={styles.featureEyebrow}>{issue.feature.eyebrow}</p>}
              {issue.feature.title && <h2>{issue.feature.title}</h2>}
              {issue.feature.text && <p>{issue.feature.text}</p>}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={issue.feature.image} alt={issue.feature.alt || ""} loading="lazy" />
          </figure>
        )}

        <div className={styles.sections}>
          {issue.sections.map((section, index) => (
            <section className={styles.section} key={`${issue.slug}-${index}`}>
              <div className={styles.sectionIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className={styles.sectionContent}>
                {section.heading && <h2>{section.heading}</h2>}

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul className={styles.bullets}>
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <blockquote className={styles.quote}>{section.quote}</blockquote>
                )}

                {section.media && <IssueMedia media={section.media} />}
              </div>
            </section>
          ))}
        </div>

        {issue.links && issue.links.length > 0 && (
          <aside className={styles.resources} aria-label="Sources and further reading">
            <p className={styles.resourcesEyebrow}>SOURCES & FURTHER READING</p>
            <ul>
              {issue.links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>

      <footer className={styles.footer}>
        <Link href="/news/vics-views">← Back to Vic's Views</Link>
        <span>YB / Immersive Media & Technology</span>
      </footer>
    </main>
  );
}
