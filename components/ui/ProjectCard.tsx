"use client";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  thumbnail?: string;
  href?: string;
}

export default function ProjectCard({ title, thumbnail, href }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "280px",
        aspectRatio: "16 / 9",
        flexShrink: 0,
        backgroundColor: "#1c1c1c",
        position: "relative",
        overflow: "hidden",
        cursor: href ? "pointer" : "default",
      }}
    >
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: hovered ? 0.5 : 0.8,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          padding: "16px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <p
          style={{
            fontSize: "0.9rem",
            color: "#ffffff",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  }
  return inner;
}
