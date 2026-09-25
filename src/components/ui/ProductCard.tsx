import Link from "next/link";

import BackgroundMedia from "@/components/media/BackgroundMedia";

import type {
  ProductCardData,
} from "@/types";

import styles from "./ProductCard.module.css";


type ProductCardProps = {
  product: ProductCardData;

  priority?: boolean;
};


export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  return (
    <article className={styles.product}>

      <div className={styles.card}>

        {product.media && (
          <BackgroundMedia
            imageSrc={product.media.image}
            videoSrc={product.media.video}
            objectPosition={
              product.media.objectPosition
            }
            priority={priority}
            className={styles.media}
          />
        )}


        <div
          className={styles.gradient}
          aria-hidden="true"
        />


        <p className={styles.tagline}>
          {product.tagline}
        </p>


        <img
          src="/brand/yb-symbol.svg"
          alt=""
          className={styles.watermark}
          aria-hidden="true"
        />


        {product.logo && (
          <div className={styles.brand}>

            <img
              src={product.logo}
              alt={product.name}
              className={styles.logo}
            />

          </div>
        )}


        <div className={styles.credits}>

          {product.credits.map(
            (credit) => (
              <div
                key={
                  `${product.id}-${credit.division}`
                }
                className={styles.credit}
              >

                <span
                  className={styles.creditLabel}
                >
                  {credit.label}
                </span>


                <img
                  src={credit.logo}
                  alt={credit.name}
                  className={styles.creditLogo}
                />

              </div>
            )
          )}

        </div>


        <Link
          href={product.href}
          className={styles.cta}
        >
          <span>
            {product.ctaLabel}
          </span>

          <span
            className={styles.arrow}
            aria-hidden="true"
          >
            →
          </span>
        </Link>

      </div>

    </article>
  );
}