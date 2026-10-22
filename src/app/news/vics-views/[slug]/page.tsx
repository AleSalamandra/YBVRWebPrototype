import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatVicDate,
  getVicIssue,
  getVicIssues,
  vicTopics,
} from "@/data/vicsViews";
import styles from "./issue.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getVicIssues().map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const issue = getVicIssue(slug);
  if (!issue) return { title: "Issue not found | Vic’s Views" };
  return {
    title: `${issue.title} | Vic’s Views | YB`,
    description: issue.excerpt,
  };
}

export default async function VicIssuePage({ params }: Props) {
  const { slug } = await params;
  const issue = getVicIssue(slug);
  if (!issue) notFound();

  const allIssues = getVicIssues();
  const index = allIssues.findIndex((item) => item.slug === slug);
  const next = allIssues[index + 1];
  const topic = vicTopics.find((item) => item.id === issue.topic)?.label;

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.navigation}>
          <Link href="/news/vics-views">← ALL VIC’S VIEWS</Link>
          <span>YB / THE DISPATCHES</span>
        </div>
        <div className={styles.heroBody}>
          <div className={styles.issueMeta}>
            <span>ISSUE {issue.issueNumber.toString().padStart(2, "0")}</span>
            <span>{topic?.toUpperCase()}</span>
            <time dateTime={issue.date}>{formatVicDate(issue.date)}</time>
          </div>
          <h1>{issue.title}</h1>
          <p className={styles.excerpt}>{issue.excerpt}</p>
          <div className={styles.byline}><span className={styles.avatar}>V</span><span>WORDS BY <strong>VICTOR</strong><small>Co-Founder &amp; CTO, YB</small></span></div>
        </div>
      </header>

      <article className={styles.article}>
        <p className={styles.opening}>{issue.intro}</p>
        {issue.sections.map((section, index) => (
          <section key={`${issue.slug}-section-${index}`} className={styles.section}>
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${issue.slug}-${index}-p-${paragraphIndex}`}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}</ul>
            )}
            {section.quote && <blockquote>{section.quote}</blockquote>}
          </section>
        ))}
        {issue.links && issue.links.length > 0 && (
          <aside className={styles.sources}>
            <h2>Links &amp; further reading</h2>
            {issue.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </aside>
        )}
      </article>
      <footer className={styles.footer}>
        <div><span>KEEP THINKING</span><h2>More from Vic’s Views<span>.</span></h2></div>
        <Link className={styles.backButton} href="/news/vics-views">All dispatches ↗</Link>
        {next && <Link className={styles.nextIssue} href={`/news/vics-views/${next.slug}`}>NEXT READ — {next.title} ↗</Link>}
      </footer>
    </main>
  );
}
