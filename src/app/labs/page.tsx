import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Labs",
  description:
    "YB Labs explores emerging technologies, formats and new possibilities for immersive media.",
};


export default function LabsPage() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "var(--page-padding)",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div>
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          YB Labs
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.8rem, 6vw, 7rem)",
            fontWeight: 420,
            lineHeight: 0.96,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          Exploring
          <br />
          what comes next.
        </h1>
      </div>
    </section>
  );
}