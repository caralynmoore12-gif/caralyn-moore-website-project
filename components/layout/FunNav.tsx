"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const videoLinks = [
  { label: "Home Videos", href: "/fun/videos/home-videos" },
  { label: "Boomrowns", href: "/fun/videos/boomrowns" },
  { label: "Society of the Nancy Phone", href: "/fun/videos/nancy-phone" },
  { label: "Cats", href: "/fun/videos/cats" },
];

const gameLinks = [
  { label: "Soundboard", href: "/fun/games/soundboard" },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "0.875rem",
          color: "var(--dark)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {label}
        <span style={{ fontSize: "0.6rem", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "var(--yellow)",
            minWidth: "220px",
            padding: "8px 0",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          }}
        >
          {items.map(({ label: l, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 20px",
                fontSize: "0.8rem",
                color: "var(--dark)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              {l}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FunNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (label: string, href: string) => (
    <Link
      key={href}
      href={href}
      style={{
        fontSize: "0.875rem",
        color: "var(--dark)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        fontWeight: 500,
        textDecoration: "none",
      }}
    >
      {label}
    </Link>
  );

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
      <Link href="/fun/home" className="serif" style={{ fontSize: "1.1rem", color: "var(--dark)", textDecoration: "none" }}>
        Fun Site
      </Link>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {navLink("Boooring", "/")}
        {navLink("Fun House", "/fun/home")}
        <Dropdown label="Videos" items={videoLinks} />
        <Dropdown label="Games" items={gameLinks} />
      </div>
    </nav>
  );
}
