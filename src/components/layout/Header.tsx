import Link from "next/link";

import Container from "@/components/ui/Container";

import { navigation } from "@/data/navigation";

export default function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">

        <Link
          href="/"
          className="brand"
          aria-label="YB Home"
        >
          YB
        </Link>

        <nav
          className="main-nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="header-contact"
        >
          Contact
        </Link>

      </Container>
    </header>
  );
}