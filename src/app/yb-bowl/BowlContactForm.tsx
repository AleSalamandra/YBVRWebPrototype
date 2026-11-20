"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

import styles from "./Bowl.module.css";

type FormStatus =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function BowlContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const projectType = String(
      formData.get("projectType") || ""
    ).trim();

    const location = String(
      formData.get("location") || ""
    ).trim();

    const originalMessage = String(
      formData.get("message") || ""
    ).trim();

    if (
      !projectType ||
      !location ||
      originalMessage.length < 10
    ) {
      setStatus("error");

      setErrorMessage(
        "Please complete all required fields."
      );

      return;
    }

    formData.set(
      "subject",
      `YB Bowl — ${projectType}`
    );

    formData.set(
      "message",
      [
        "Product enquiry: YB Bowl",
        `Project type: ${projectType}`,
        `Location: ${location}`,
        "",
        "Project details:",
        originalMessage,
      ].join("\n")
    );

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "The message could not be sent. Please try again."
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className={styles.formPanel}>
      <div className={styles.formHeading}>
        Let&apos;s talk about your project.
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        aria-busy={status === "sending"}
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

        <div className={styles.formColumns}>
          <label className={styles.field}>
            <span>Name *</span>

            <input
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              maxLength={100}
              required
            />
          </label>

          <label className={styles.field}>
            <span>Company</span>

            <input
              name="company"
              type="text"
              placeholder="Your company"
              autoComplete="organization"
              maxLength={150}
            />
          </label>
        </div>

        <label className={styles.field}>
          <span>Email *</span>

          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            maxLength={200}
            required
          />
        </label>

        <label className={styles.field}>
          <span>Project type *</span>

          <select
            name="projectType"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select your project type
            </option>

            <option value="Sports & Fan Engagement">
              Sports & Fan Engagement
            </option>

            <option value="Brand Activation">
              Brand Activation
            </option>

            <option value="Culture & Entertainment">
              Culture & Entertainment
            </option>

            <option value="Temporary Installation">
              Temporary Installation
            </option>

            <option value="Permanent Installation">
              Permanent Installation
            </option>

            <option value="Other">
              Other / Not decided yet
            </option>
          </select>
        </label>

        <label className={styles.field}>
          <span>Location *</span>

          <input
            name="location"
            type="text"
            placeholder="City, country or venue"
            maxLength={150}
            required
          />
        </label>

        <label className={styles.field}>
          <span>Tell us about your project *</span>

          <textarea
            name="message"
            placeholder="Tell us about your idea, audience, venue and what you would like to achieve..."
            rows={5}
            minLength={10}
            maxLength={4500}
            required
          />
        </label>

        <p className={styles.privacy}>
          By submitting this form, you agree that YB
          may use the information provided to respond
          to your enquiry. Read our{" "}
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>

        {status === "success" && (
          <p
            className={styles.successMessage}
            role="status"
          >
            Thank you for your interest in YB Bowl.
            Our team will be in touch.
          </p>
        )}

        {status === "error" && (
          <p
            className={styles.errorMessage}
            role="alert"
          >
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={status === "sending"}
        >
          <span>
            {status === "sending"
              ? "Sending..."
              : status === "success"
                ? "Send another enquiry"
                : "Let's talk about your project"}
          </span>

          <span aria-hidden="true">
            {status === "sending" ? "…" : "↗"}
          </span>
        </button>
      </form>
    </div>
  );
}