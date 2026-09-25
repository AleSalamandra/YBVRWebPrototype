import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";

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


          <div className={styles.socialLinks}>
            <div className={styles.socialItem}>
              <span className={styles.socialNumber}>
                01
              </span>

              <div className={styles.socialContent}>
                <strong>
                  Instagram
                </strong>

                <p>
                  Follow our work, projects and behind the scenes.
                </p>
              </div>

              <span
                className={styles.socialArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>


            <div className={styles.socialItem}>
              <span className={styles.socialNumber}>
                02
              </span>

              <div className={styles.socialContent}>
                <strong>
                  TikTok
                </strong>

                <p>
                  Immersive moments, experiments and culture.
                </p>
              </div>

              <span
                className={styles.socialArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>


            <div className={styles.socialItem}>
              <span className={styles.socialNumber}>
                03
              </span>

              <div className={styles.socialContent}>
                <strong>
                  LinkedIn
                </strong>

                <p>
                  News, projects and company updates.
                </p>
              </div>

              <span
                className={styles.socialArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </div>
        </div>


        <ContactForm />
      </section>
    </main>
  );
}