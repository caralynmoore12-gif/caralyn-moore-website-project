"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// These constants are also used by HeroSection to align the photo
export const COMPACT_H = 44;       // px — collapsed nav height
export const BANNER_EXTRA_VH = 16; // vh — extra height that collapses to 0

const SCROLL_RANGE = 300;

const navLinks = [
  { label: "Home", target: "hero" },
  { label: "Work", target: "work" },
  { label: "About", target: "about" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function MainNav() {
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const onScroll = () => setRatio(Math.min(window.scrollY / SCROLL_RANGE, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - ratio * 2);
  const compactNameOpacity = Math.max(0, (ratio - 0.6) / 0.4);
  const bannerVh = BANNER_EXTRA_VH * (1 - ratio);

  const linkStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "0.75rem",
    color: "var(--dark)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 500,
    fontFamily: "inherit",
    textDecoration: "none",
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
        overflow: "hidden",
      }}
    >
      {/* Compact row */}
      <div
        style={{
          height: `${COMPACT_H}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
        }}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="serif"
          style={{
            ...linkStyle,
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
            textTransform: "none",
            opacity: compactNameOpacity,
            transition: "opacity 0.15s ease",
          }}
        >
          Caralyn Moore
        </button>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map(({ label, target }) => (
            <button key={label} onClick={() => scrollTo(target)} style={linkStyle}>
              {label}
            </button>
          ))}
          <Link href="/fun" style={linkStyle}>Fun</Link>
        </div>
      </div>

      {/* Collapsing extra banner */}
      <div
        style={{
          height: `${bannerVh}vh`,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 48px 32px",
          opacity: heroOpacity,
          transform: `translateY(${-ratio * 16}px)`,
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mid)",
            marginBottom: "0.6rem",
          }}
        >
          Video Editor &amp; Storyteller
        </p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            fontWeight: 400,
            color: "var(--dark)",
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          Caralyn Moore
        </h1>
      </div>
    </nav>
  );
}
