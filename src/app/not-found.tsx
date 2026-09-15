import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">

      <p className="eyebrow">
        404
      </p>

      <h1>
        Nothing here.
      </h1>

      <Link href="/">
        Back to YB
      </Link>

    </section>
  );
}