import { COMPACT_H, BANNER_EXTRA_VH } from "@/components/layout/MainNav";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        height: "100dvh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Spacer that matches the banner height — keeps photo below the banner */}
      <div
        style={{
          height: `calc(${COMPACT_H}px + ${BANNER_EXTRA_VH}vh)`,
          flexShrink: 0,
        }}
      />

      {/* Photo fills the rest, top of image pinned to top of this area */}
      <div style={{ flex: 1, overflow: "hidden", minHeight: 0 }}>
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
