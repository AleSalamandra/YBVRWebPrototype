import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";


export default function Footer() {
  const currentYear =
    new Date().getFullYear();


  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <Link
            href="/"
            className="site-footer__brand"
            aria-label="YB — Home"
          >
            <Image
              src="/brand/yb-symbol.svg"
              alt="YB"
              width={64}
              height={64}
              className="site-footer__logo"
            />
          </Link>

          <nav
            className="site-footer__nav"
            aria-label="Footer navigation"
          >
            <Link href="/about">
              About us
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {currentYear} YB
          </span>

          <span>
            Immersive media.
          </span>
        </div>
      </Container>
    </footer>
  );
}