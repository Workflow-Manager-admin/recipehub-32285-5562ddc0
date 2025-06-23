"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { theme } from "../app/theme";

const links = [
  { href: "/", label: "Browse Recipes" },
  { href: "/search", label: "Search" },
  { href: "/recipes/new", label: "Add Recipe" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        background: theme.colors.primary,
        color: "#fff",
        borderBottom: `2px solid ${theme.colors.accent}`,
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
      }}
      className="py-3 px-4 flex items-center justify-between sticky top-0 z-10"
      aria-label="Main site navigation header"
    >
      <Link href="/" className="text-2xl font-bold" style={{ color: theme.colors.secondary }}>
        RecipeHub
      </Link>
      <nav>
        <ul className="flex gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-medium transition-colors ${pathname === l.href ? "underline" : ""}`}
                style={{
                  color: theme.colors.background,
                  textDecorationColor: theme.colors.accent
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
