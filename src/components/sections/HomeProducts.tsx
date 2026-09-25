import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";

import {
  integralProducts,
} from "@/data/products";

import styles from "./HomeProducts.module.css";


export default function HomeProducts() {
  return (
    <section
      className={styles.section}
      aria-labelledby="integral-products-title"
    >
      <Container>

        <h2
          id="integral-products-title"
          className={styles.title}
        >
          Our integral products
        </h2>


        <div className={styles.products}>

          {integralProducts.map(
            (
              product,
              index
            ) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={
                  index === 0
                }
              />
            )
          )}

        </div>

      </Container>
    </section>
  );
}