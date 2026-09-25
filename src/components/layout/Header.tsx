"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";


export default function Header() {
  const pathname = usePathname();


  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };


  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <nav
          className="site-header__nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);


            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  active
                    ? "page"
                    : undefined
                }
                className={[
                  "site-header__nav-link",
                  active
                    ? "is-active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
