"use client";

import {
  FormEvent,
  useState,
} from "react";

import styles from "@/app/contact/Contact.module.css";


type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";


export default function ContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);


    setStatus("sending");
    setErrorMessage("");


    try {
      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",
            body: formData,
          }
        );


      const result =
        await response.json();


      if (!response.ok) {
        throw new Error(
          result.error ||
          "The message could not be sent."
        );
      }


      form.reset();

      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    }
  }


  return (
    <div className={styles.formColumn}>
      <div className={styles.formHeading}>
        <span>
          Start a conversation
        </span>

        <span
          className={styles.formHeadingLine}
        />
      </div>


      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div
          className={styles.honeypot}
          aria-hidden="true"
        >
          <label>
            Website

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>


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
              maxLength={100}
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
              maxLength={200}
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
            maxLength={150}
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

            <option value="New project">
              A new project
            </option>

            <option value="Partnership">
              Partnership
            </option>

            <option value="YB Sports">
              YB Sports
            </option>

            <option value="YB Studios">
              YB Studios
            </option>

            <option value="YB Tech">
              YB Tech
            </option>

            <option value="Press & media">
              Press & media
            </option>

            <option value="Other">
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
            minLength={10}
            maxLength={5000}
            required
          />
        </label>


        <div className={styles.formFooter}>
          <div>
            <p>
              By sending this form you agree that
              YB may use the information provided
              to respond to your enquiry.
            </p>

            {status === "success" && (
              <p
                className={styles.formSuccess}
                role="status"
              >
                Message sent. We&apos;ll be in touch.
              </p>
            )}

            {status === "error" && (
              <p
                className={styles.formError}
                role="alert"
              >
                {errorMessage}
              </p>
            )}
          </div>


          <button
            type="submit"
            className={styles.submit}
            disabled={status === "sending"}
          >
            <span>
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Message sent"
                  : "Send message"}
            </span>

            <span
              className={styles.submitArrow}
              aria-hidden="true"
            >
              {status === "success"
                ? "✓"
                : "→"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}