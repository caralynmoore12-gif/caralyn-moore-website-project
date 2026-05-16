"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", target: "hero" },
  { label: "Work", target: "work" },
  { label: "About", target: "about" },
];

export default function MainNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--yellow)",
        padding: scrolled ? "10px 40px" : "18px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "padding 0.3s ease",
      }}
    >
      <button
        onClick={() => scrollTo("hero")}
        className="serif"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.1rem",
          fontWeight: 400,
          color: "var(--dark)",
          letterSpacing: "0.02em",
        }}
      >
        Caralyn Moore
      </button>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map(({ label, target }) => (
          <button
            key={label}
            onClick={() => scrollTo(target)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.875rem",
              color: "var(--dark)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {label}
          </button>
        ))}
        <Link
          href="/fun"
          style={{
            fontSize: "0.875rem",
            color: "var(--dark)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Fun
        </Link>
      </div>
    </nav>
  );
}
