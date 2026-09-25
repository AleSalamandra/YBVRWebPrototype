import fs from "node:fs/promises";
import path from "node:path";

import PartnersCarousel from "./HomePartnersCarousel";
import styles from "./HomePartners.module.css";


const ALLOWED_EXTENSIONS = new Set([
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
]);


function getPartnerName(filename: string) {
  return path
    .parse(filename)
    .name
    .replace(/[-_]+/g, " ")
    .trim();
}


export default async function HomePartners() {
  const partnersDirectory = path.join(
    process.cwd(),
    "public",
    "brand",
    "external"
  );


  let files: string[] = [];


  try {
    files = await fs.readdir(partnersDirectory);
  } catch {
    return null;
  }


  const partners = files
    .filter((filename) => {
      const extension = path
        .extname(filename)
        .toLowerCase();

      return ALLOWED_EXTENSIONS.has(extension);
    })
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
    .map((filename) => ({
      src: `/brand/external/${filename}`,
      alt: getPartnerName(filename),
    }));


  if (partners.length === 0) {
    return null;
  }


  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Proudly collaborating with
        </h2>
      </div>

      <PartnersCarousel partners={partners} />
    </section>
  );
}