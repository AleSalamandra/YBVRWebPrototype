"use client";

import { useState } from "react";
import Link from "next/link";
import {
  formatVicDate,
  vicIntro,
  vicTopics,
  type VicIssue,
  type VicTopic,
} from "@/data/vicsViews";
import styles from "./vics-views.module.css";

type Selection = VicTopic | "all";

type Props = { issues: VicIssue[] };

export default function VicsViewsHub({ issues }: Props) {
  const [selected, setSelected] = useState<Selection>("all");
  const filtered = selected === "all"
    ? issues
    : issues.filter((issue) => issue.topic === selected);
  const latest = issues[0];

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="vic-hero-title">
        <div className={styles.topline}>
          <Link href="/news" className={styles.backLink}>← BACK TO NEWS</Link>
          <span>YB / AN OPEN MIND</span>
          <span className={styles.cadence}>FOUNDER NOTES · FORTNIGHTLY</span>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}><span /> THE TECH THAT MAKES US THINK</p>
            <h1 id="vic-hero-title" className={styles.h1}>
              Vic’s <em>Views</em><span className={styles.period}>.</span>
            </h1>
            <p className={styles.heroStatement}>
              A peek inside a curious mind. Half-formed questions, interesting
              discoveries and technology worth talking about.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.mainCta} href="#dispatches">
                Explore the dispatches <span aria-hidden="true">↘</span>
              </a>
              {latest && (
                <Link className={styles.textCta} href={`/news/vics-views/${latest.slug}`}>
                  Read latest issue ↗
                </Link>
              )}
            </div>
          </div>
          <div className={styles.mind} aria-label="Explore Victor’s technology topics">
            <div className={styles.mindGrid} aria-hidden="true" />
            <div className={styles.orbitOne} aria-hidden="true" />
            <div className={styles.orbitTwo} aria-hidden="true" />
            <div className={styles.orbitThree} aria-hidden="true" />
            <div className={styles.center} aria-hidden="true">
              <span className={styles.centerLetter}>V</span>
              <span className={styles.centerLabel}>THE MIND / 001</span>
            </div>
            {vicTopics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                data-topic={topic.id}
                className={`${styles.ideaNode} ${selected === topic.id ? styles.ideaActive : ""}`}
                onClick={() => {
                  setSelected(topic.id);
                  document.getElementById("dispatches")?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-pressed={selected === topic.id}
                aria-label={`Show dispatches about ${topic.label}`}
              >
                <span>{topic.numeral} /</span> {topic.label}
              </button>
            ))}
            <span className={styles.mindNote}>SELECT A THOUGHT TO EXPLORE ↗</span>
          </div>
        </div>
        <div className={styles.heroFoot}>
          <span>CURATED BY VICTOR, CO-FOUNDER &amp; CTO OF YB</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section id="about-victor" className={styles.intro}>
        <div className={styles.introSide}>
          <span className={styles.sectionNumber}>00 / THE INTRODUCTION</span>
          <span className={styles.bracket}>[ VICTOR / IN HIS OWN WORDS ]</span>
        </div>
        <div className={styles.introMain}>
          <h2>A note from <span>Victor.</span></h2>
          <p>{vicIntro.opening}</p>
          <p>{vicIntro.introduction}</p>
          <div className={styles.signature}>— Victor <span>Co-Founder &amp; CTO, YB</span></div>
        </div>
      </section>

      <section id="dispatches" className={styles.dispatches} aria-labelledby="dispatch-title">
        <div className={styles.dispatchTop}>
          <div>
            <span className={styles.sectionNumber}>01 / THE DISPATCHES</span>
            <h2 id="dispatch-title">Signals from the noise<span>.</span></h2>
          </div>
          <span className={styles.dispatchCount}>
            {issues.length.toString().padStart(2, "0")} PUBLISHED DISPATCHES
          </span>
        </div>
        <div className={styles.filters} aria-label="Filter dispatches by topic">
          <button
            type="button"
            className={selected === "all" ? styles.filterActive : ""}
            onClick={() => setSelected("all")}
            aria-pressed={selected === "all"}
          >
            All thoughts
          </button>
          {vicTopics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              className={selected === topic.id ? styles.filterActive : ""}
              onClick={() => setSelected(topic.id)}
              aria-pressed={selected === topic.id}
            >
              {topic.label}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className={styles.issueList}>
            {filtered.map((issue, i) => (
              <Link
                key={issue.slug}
                href={`/news/vics-views/${issue.slug}`}
                className={styles.issue}
              >
                <span className={styles.issueNumber}>
                  {(i + 1).toString().padStart(2, "0")} / NO.
                  {issue.issueNumber.toString().padStart(2, "0")}
                </span>
                <div className={styles.issueMiddle}>
                  <span className={styles.issueMeta}>
                    {formatVicDate(issue.date)} · {vicTopics.find((t) => t.id === issue.topic)?.label}
                  </span>
                  <h3>{issue.title}</h3>
                  <p>{issue.excerpt}</p>
                </div>
                <span className={styles.issueArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyVisual} aria-hidden="true">
              <span className={styles.emptyCross}>＋</span>
              <span className={styles.emptyCircle} />
              <span className={styles.emptyDot} />
            </div>
            <div className={styles.emptyText}>
              <span className={styles.emptyEyebrow}>AWAITING A NEW SIGNAL</span>
              <h3>{issues.length === 0 ? "The first thought hasn’t landed yet." : "Nothing in this orbit. Yet."}</h3>
              <p>
                {issues.length === 0
                  ? "This is the home of Vic’s Views. The introduction is here; the first dispatch will appear when it is published."
                  : "Try another topic, or explore all published dispatches."}
              </p>
              {selected !== "all" && (
                <button className={styles.reset} type="button" onClick={() => setSelected("all")}>
                  View all thoughts ↗
                </button>
              )}
            </div>
          </div>
        )}
      </section>
      <footer className={styles.footer}>
        <span>VIC’S VIEWS © YB</span>
        <Link href="/news">MORE FROM YB NEWS ↗</Link>
      </footer>
    </main>
  );
}
