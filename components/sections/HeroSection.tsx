import { COMPACT_H, BANNER_EXTRA_VH } from "@/components/layout/MainNav";

export default function HeroSection() {
  const imageTop = `calc(${COMPACT_H}px + ${BANNER_EXTRA_VH}vh)`;
  const imageHeight = `calc(100dvh - ${COMPACT_H}px - ${BANNER_EXTRA_VH}vh)`;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <img
        src="/headshot.jpg"
        alt="Caralyn Moore"
        style={{
          position: "absolute",
          top: imageTop,
          left: 0,
          right: 0,
          width: "100%",
          height: imageHeight,
          objectFit: "cover",
          objectPosition: "center top",
          display: "block",
        }}
      />
    </section>
  );
}
