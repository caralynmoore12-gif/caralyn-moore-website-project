"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay slightly so it appears after intro animation exits
    const t = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Full-bleed headshot */}
      <img
        src="/headshot.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />

      {/* Gradient for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        }}
      />

      {/* Text overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 60px 56px",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(12px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <h1
          className="serif"
          style={{
            fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            color: "#ffffff",
            marginBottom: "0.6rem",
            letterSpacing: "-0.01em",
          }}
        >
          Caralyn Moore
        </h1>
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Video Editor & Storyteller
        </p>
      </div>
    </section>
  );
}
