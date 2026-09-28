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
            const hasChildren =
              item.children &&
              item.children.length > 0;

            if (hasChildren) {
              const parentActive =
                item.href
                  ? isActive(item.href)
                  : false;

              const childActive =
                item.children?.some((child) =>
                  isActive(child.href)
                ) ?? false;

              const active =
                parentActive ||
                childActive;

              return (
                <div
                  key={item.label}
                  className={[
                    "site-header__dropdown-wrapper",
                    active ? "is-active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      aria-current={
                        parentActive
                          ? "page"
                          : undefined
                      }
                      aria-haspopup="true"
                      className={[
                        "site-header__nav-link",
                        "site-header__dropdown-trigger",
                        active ? "is-active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      aria-haspopup="true"
                      className={[
                        "site-header__nav-link",
                        "site-header__dropdown-trigger",
                        active ? "is-active" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item.label}
                    </button>
                  )}

                  <div className="site-header__dropdown">
                    {item.children?.map((child) => {
                      const childIsActive =
                        isActive(child.href);

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          aria-current={
                            childIsActive
                              ? "page"
                              : undefined
                          }
                          className={[
                            "site-header__dropdown-link",
                            childIsActive
                              ? "is-active"
                              : "",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            if (!item.href) {
              return null;
            }

            const active =
              isActive(item.href);

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
                  active ? "is-active" : "",
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