import Container from "@/components/ui/Container";

import styles from "./CookiePolicy.module.css";

type Cookie = {
  name: string;
  duration: string;
  description: string;
};

type CookieCategory = {
  number: string;
  title: string;
  description: string;
  cookies: Cookie[];
};

const cookieCategories: CookieCategory[] = [
  {
    number: "01",
    title: "Necessary",
    description:
      "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
    cookies: [
      {
        name: "__cf_bm",
        duration: "1 hour",
        description:
          "This cookie, set by Cloudflare, is used to support Cloudflare Bot Management.",
      },
      {
        name: "_cfuvid",
        duration: "session",
        description:
          "Cloudflare sets this cookie to track users across sessions to optimize user experience by maintaining session consistency and providing personalized services",
      },
      {
        name: "cookieyes-consent",
        duration: "1 year",
        description:
          "CookieYes sets this cookie to remember users' consent preferences so that their preferences are respected on subsequent visits to this site. It does not collect or store any personal information about the site visitors.",
      },
      {
        name: "_GRECAPTCHA",
        duration: "6 months",
        description:
          "Google Recaptcha service sets this cookie to identify bots to protect the website against malicious spam attacks.",
      },
      {
        name: "rc::a",
        duration: "Never Expires",
        description:
          "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
      },
      {
        name: "rc::f",
        duration: "Never Expires",
        description:
          "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
      },
      {
        name: "rc::b",
        duration: "session",
        description:
          "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
      },
      {
        name: "rc::c",
        duration: "session",
        description:
          "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
      },
      {
        name: "VISITOR_PRIVACY_METADATA",
        duration: "6 months",
        description:
          "YouTube sets this cookie to store the user's cookie consent state for the current domain.",
      },
      {
        name: "cookietest",
        duration: "session",
        description:
          "The cookietest cookie is typically used to determine whether the user's browser accepts cookies, essential for website functionality and user experience.",
      },
      {
        name: "csrftoken",
        duration: "1 year 1 month 4 days",
        description:
          "This cookie is associated with Django web development platform for python. Used to help protect the website against Cross-Site Request Forgery attacks",
      },
    ],
  },
  {
    number: "02",
    title: "Functional",
    description:
      "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
    cookies: [
      {
        name: "VISITOR_INFO1_LIVE",
        duration: "6 months",
        description:
          "A cookie set by YouTube to measure bandwidth that determines whether the user gets the new or old player interface.",
      },
      {
        name: "ytidb::LAST_RESULT_ENTRY_KEY",
        duration: "Never Expires",
        description:
          "The cookie ytidb::LAST_RESULT_ENTRY_KEY is used by YouTube to store the last search result entry that was clicked by the user. This information is used to improve the user experience by providing more relevant search results in the future.",
      },
    ],
  },
  {
    number: "03",
    title: "Analytics",
    description:
      "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
    cookies: [
      {
        name: "_ga_*",
        duration: "1 year 1 month 4 days",
        description:
          "Google Analytics sets this cookie to store and count page views.",
      },
      {
        name: "_ga",
        duration: "1 year 1 month 4 days",
        description:
          "Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.",
      },
      {
        name: "__hstc",
        duration: "6 months",
        description:
          "Hubspot set this main cookie for tracking visitors. It contains the domain, initial timestamp (first visit), last timestamp (last visit), current timestamp (this visit), and session number (increments for each subsequent session).",
      },
      {
        name: "hubspotutk",
        duration: "6 months",
        description:
          "HubSpot sets this cookie to keep track of the visitors to the website. This cookie is passed to HubSpot on form submission and used when deduplicating contacts.",
      },
      {
        name: "__hssrc",
        duration: "session",
        description:
          "HubSpot cookie sets this cookie to determine if the visitor has restarted their browser. If this cookie does not exist when HubSpot manages cookies, it is considered a new session.",
      },
      {
        name: "__hssc",
        duration: "1 hour",
        description:
          "HubSpot sets this cookie to keep track of sessions. This is used to determine if HubSpot should increment the session number and timestamps in the __hstc cookie. It contains the domain, viewCount (which increments with each pageview in a session), and session start timestamp.",
      },
      {
        name: "YSC",
        duration: "session",
        description:
          "YSC cookie is set by Youtube and is used to track the views of embedded videos on Youtube pages.",
      },
    ],
  },
  {
    number: "04",
    title: "Advertisement",
    description:
      "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
    cookies: [
      {
        name: "__Secure-ROLLOUT_TOKEN",
        duration: "6 months",
        description:
          "YouTube sets this cookie to manage feature rollout and experimentation. It helps Google control which new features or interface changes are shown to users as part of testing and staged rollouts, ensuring consistent experience for a given user during an experiment.",
      },
      {
        name: "__Secure-YEC",
        duration: "past",
        description:
          "Description is currently not available.",
      },
      {
        name: "__Secure-YNID",
        duration: "6 months",
        description:
          "YouTube cookie used to protect user security and prevent fraud, especially during the login process.",
      },
    ],
  },
  {
    number: "05",
    title: "Uncategorised",
    description:
      "Other uncategorised cookies are those that are being analysed and have not been classified into a category as yet.",
    cookies: [
      {
        name: "__Secure-BUCKET",
        duration: "6 months",
        description:
          "Description is currently not available.",
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>
              Legal
            </p>

            <h1 className={styles.title}>
              Cookie Policy
            </h1>

            <p className={styles.intro}>
              Information about the cookies
              used across YB&apos;s digital
              services.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.content}>
        <Container>
          <div className={styles.categories}>
            {cookieCategories.map(
              (category) => (
                <article
                  key={category.title}
                  className={styles.category}
                >
                  <div
                    className={
                      styles.categoryHeader
                    }
                  >
                    <span
                      className={
                        styles.categoryNumber
                      }
                    >
                      {category.number}
                    </span>

                    <div
                      className={
                        styles.categoryCopy
                      }
                    >
                      <h2
                        className={
                          styles.categoryTitle
                        }
                      >
                        {category.title}
                      </h2>

                      <p
                        className={
                          styles.categoryDescription
                        }
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={
                      styles.tableWrapper
                    }
                  >
                    <table
                      className={styles.table}
                    >
                      <thead>
                        <tr>
                          <th scope="col">
                            Cookie
                          </th>

                          <th scope="col">
                            Duration
                          </th>

                          <th scope="col">
                            Description
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {category.cookies.map(
                          (cookie) => (
                            <tr key={cookie.name}>
                              <td
                                className={
                                  styles.cookieName
                                }
                              >
                                {cookie.name}
                              </td>

                              <td
                                className={
                                  styles.duration
                                }
                              >
                                {
                                  cookie.duration
                                }
                              </td>

                              <td>
                                {
                                  cookie.description
                                }
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </article>
              )
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}