"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* Left: text */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 60px 60px",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--mid)",
            marginBottom: "1.5rem",
          }}
        >
          Video Editor & Storyteller
        </p>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            lineHeight: 1.05,
            fontWeight: 400,
            color: "var(--dark)",
            marginBottom: "2rem",
          }}
        >
          Caralyn
          <br />
          Moore
        </h1>
        <div
          style={{
            width: "48px",
            height: "3px",
            backgroundColor: "var(--yellow)",
          }}
        />
      </div>

      {/* Right: headshot */}
      <div
        style={{
          width: "clamp(300px, 45vw, 640px)",
          position: "relative",
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 0.2s",
        }}
      >
        <img
          src="/headshot.jpg"
          alt="Caralyn Moore"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
