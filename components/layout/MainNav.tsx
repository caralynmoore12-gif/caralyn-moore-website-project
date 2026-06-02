"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", target: "hero" },
  { label: "Work", target: "work" },
  { label: "About", target: "about" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const linkStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "0.8rem",
  color: "var(--dark)",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  fontWeight: 500,
  fontFamily: "inherit",
};

export default function MainNav() {
  const { scrollY } = useScroll();

  // Banner collapses from ~40vh to 58px over first 320px of scroll
  const navHeight = useTransform(scrollY, [0, 320], ["42vh", "58px"]);

  // Hero name/title fades and rises away
  const heroOpacity = useTransform(scrollY, [0, 180], [1, 0]);
  const heroY = useTransform(scrollY, [0, 180], [0, -24]);

  // Compact name fades in after banner is mostly collapsed
  const compactNameOpacity = useTransform(scrollY, [180, 300], [0, 1]);

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--yellow)",
        height: navHeight,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top row: compact name (fades in) + nav links (always visible) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: "58px",
          flexShrink: 0,
        }}
      >
        <motion.button
          onClick={() => scrollTo("hero")}
          className="serif"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            color: "var(--dark)",
            opacity: compactNameOpacity,
            fontFamily: "inherit",
          }}
        >
          Caralyn Moore
        </motion.button>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map(({ label, target }) => (
            <button key={label} onClick={() => scrollTo(target)} style={linkStyle}>
              {label}
            </button>
          ))}
          <Link
            href="/fun"
            style={{ ...linkStyle, textDecoration: "none", display: "inline" }}
          >
            Fun
          </Link>
        </div>
      </div>

      {/* Hero banner content: large name + title, fades out on scroll */}
      <motion.div
        style={{
          padding: "0 48px 52px",
          opacity: heroOpacity,
          y: heroY,
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mid)",
            marginBottom: "0.75rem",
          }}
        >
          Video Editor &amp; Storyteller
        </p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 400,
            color: "var(--dark)",
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          Caralyn Moore
        </h1>
      </motion.div>
    </motion.nav>
  );
}
