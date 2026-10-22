import styles from "./FoxSportsXRArticle.module.css";

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=com.foxsports.android.xr&pcampaignid=web_share";

type Match = {
  date: string;
  event: string;
  time: string;
  past?: boolean;
};

type Sport = {
  name: string;
  abbreviation: string;
  matches: Match[];
};

const schedule: Sport[] = [
  {
    name: "College Football",
    abbreviation: "CFB",
    matches: [
      { date: "Oct 17", event: "Ohio State at Indiana", time: "12:00 PM ET", past: true },
      { date: "Nov 24", event: "Indiana at Michigan", time: "12:00 PM ET" },
      { date: "Nov 28", event: "Michigan at Ohio State", time: "12:00 PM ET" },
      { date: "Dec 5", event: "Big Ten Championship Game", time: "8:00 PM ET" },
    ],
  },
  {
    name: "Women’s Volleyball",
    abbreviation: "WVB",
    matches: [
      { date: "Oct 22", event: "UCLA vs. Nebraska", time: "7:00 PM ET" },
      { date: "Oct 25", event: "Michigan vs. Wisconsin", time: "1:00 PM ET" },
      { date: "Oct 25", event: "Penn State vs. Indiana", time: "3:00 PM ET" },
      { date: "Nov 8", event: "Penn State vs. Wisconsin", time: "4:00 PM ET" },
      { date: "Nov 8", event: "Nebraska vs. Washington", time: "6:30 PM ET" },
    ],
  },
  {
    name: "College Basketball",
    abbreviation: "CBB",
    matches: [
      { date: "Nov 9", event: "Syracuse vs. Indiana", time: "6:30 PM ET" },
      { date: "Nov 9", event: "Illinois State at Purdue", time: "8:30 PM ET" },
      { date: "Nov 10", event: "Virginia Tech vs. Iowa", time: "7:00 PM ET" },
      { date: "Nov 11", event: "Marquette at Michigan", time: "7:00 PM ET" },
      { date: "Nov 13", event: "Northern Iowa at Michigan State", time: "7:00 PM ET" },
    ],
  },
];

export default function FoxSportsXRArticle() {
  return (
    <div className={styles.content}>
      <section aria-labelledby="fox-xr-highlights" className={styles.section}>
        <h3 id="fox-xr-highlights" className={styles.sectionTitle}>
          Game-Changing Highlights
        </h3>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <span className={styles.highlightDate}>AUG 30</span>
            <h4>Landmark Women’s Volleyball Broadcast</h4>
            <p>
              Delivered a major milestone in women's sports, bringing the
              high-stakes clash between No. 1 Nebraska and No. 2 Texas live to
              fans with court-level presence.
            </p>
          </div>
          <div className={styles.highlight}>
            <span className={styles.highlightDate}>OCT 17</span>
            <h4>Top-10 College Football Showcase</h4>
            <p>
              Placed fans on the field for the big Big Ten matchup between #3
              Ohio State and #8 Indiana, capturing every hit and high-pressure
              moment.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="fox-xr-schedule" className={styles.section}>
        <h3 id="fox-xr-schedule" className={styles.sectionTitle}>
          Live &amp; Platform Event Schedule
        </h3>
        <p className={styles.scheduleLead}>
          Our platform pipeline remains active week in and week out. Below is a
          look at upcoming coverage streaming across the FOX Sports XR channel:
        </p>

        <div className={styles.schedule}>
          {schedule.map((sport) => (
            <section key={sport.abbreviation} className={styles.sport}>
              <div className={styles.sportHeading}>
                <span className={styles.sportAbbr}>{sport.abbreviation}</span>
                <h4>{sport.name}</h4>
              </div>
              <ul className={styles.matchList}>
                {sport.matches.map((match, index) => (
                  <li
                    key={`${sport.abbreviation}-${match.date}-${index}`}
                    className={`${styles.match} ${match.past ? styles.past : ""}`}
                  >
                    <span className={styles.matchDate}>{match.date}</span>
                    <span className={styles.matchEvent}>
                      {match.event}
                      {match.past && (
                        <span className={styles.pastLabel}>Past event</span>
                      )}
                    </span>
                    <span className={styles.matchTime}>{match.time}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className={styles.download} aria-labelledby="fox-xr-download">
        <span className={styles.downloadEyebrow}>FOX SPORTS XR</span>
        <h3 id="fox-xr-download">Experience the game from the inside.</h3>
        <p>
          Tune in live across FOX and FS1, or download the Fox Sports XR App on
          Google Play to step into the spatial experience and feel the emotion
          of the venue from the best seat in your house.
        </p>
        <a
          className={styles.downloadButton}
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download FOX Sports XR on Google Play (opens in a new tab)"
        >
          Download FOX Sports XR <span aria-hidden="true">↗</span>
        </a>
        <p className={styles.note}>
          Note: Live game streams are accessible with a participating TV
          provider / Fox subscription; spatial highlights, recaps, and select
          VOD experiences are available free to all users in-app.
        </p>
      </section>
    </div>
  );
}
