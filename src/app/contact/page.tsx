import type { Metadata } from "next";

import styles from "./Contact.module.css";


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with YB to talk about immersive media, technology, sports and partnerships.",
};


export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div
        className={styles.background}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div
        className={styles.ghostTitle}
        aria-hidden="true"
      >
        CONTACT
      </div>


      <section className={styles.contact}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />

            Contact
          </div>


          <div className={styles.intro}>
            <h1>
              Let&apos;s build
              <br />
              what comes next.
            </h1>

            <p>
              Have a project, partnership or idea in mind?
              Tell us what you&apos;re working on and we&apos;ll
              find the right way to build it together.
            </p>
          </div>


          <div className={styles.contactTopics}>
            <div className={styles.topic}>
              <span className={styles.topicNumber}>
                01
              </span>

              <div>
                <strong>
                  New projects
                </strong>

                <p>
                  Immersive content, spatial experiences
                  and new formats.
                </p>
              </div>

              <span
                className={styles.topicArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>


            <div className={styles.topic}>
              <span className={styles.topicNumber}>
                02
              </span>

              <div>
                <strong>
                  Partnerships
                </strong>

                <p>
                  Sports, entertainment, technology
                  and distribution.
                </p>
              </div>

              <span
                className={styles.topicArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>


            <div className={styles.topic}>
              <span className={styles.topicNumber}>
                03
              </span>

              <div>
                <strong>
                  Press & media
                </strong>

                <p>
                  Company information, interviews
                  and media enquiries.
                </p>
              </div>

              <span
                className={styles.topicArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </div>
        </div>


        <div className={styles.formColumn}>
          <div className={styles.formHeading}>
            <span>
              Start a conversation
            </span>

            <span className={styles.formHeadingLine} />
          </div>


          <form
            className={styles.form}
          >
            <div className={styles.twoColumns}>
              <label className={styles.field}>
                <span>
                  Name
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>


              <label className={styles.field}>
                <span>
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>


            <label className={styles.field}>
              <span>
                Company
              </span>

              <input
                type="text"
                name="company"
                placeholder="Company or organisation"
                autoComplete="organization"
              />
            </label>


            <label className={styles.field}>
              <span>
                I&apos;d like to talk about
              </span>

              <select
                name="subject"
                defaultValue=""
                required
              >
                <option
                  value=""
                  disabled
                >
                  Select a topic
                </option>

                <option value="project">
                  A new project
                </option>

                <option value="partnership">
                  Partnership
                </option>

                <option value="sports">
                  YB Sports
                </option>

                <option value="studios">
                  YB Studios
                </option>

                <option value="tech">
                  YB Tech
                </option>

                <option value="press">
                  Press & media
                </option>

                <option value="other">
                  Something else
                </option>
              </select>
            </label>


            <label
              className={[
                styles.field,
                styles.messageField,
              ].join(" ")}
            >
              <span>
                Message
              </span>

              <textarea
                name="message"
                placeholder="Tell us a little about what you have in mind..."
                rows={7}
                required
              />
            </label>


            <div className={styles.formFooter}>
              <p>
                By sending this form you agree that
                YB may use the information provided
                to respond to your enquiry.
              </p>

              <button
                type="submit"
                className={styles.submit}
              >
                <span>
                  Send message
                </span>

                <span
                  className={styles.submitArrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}