export default function HeroSection() {
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
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 35%",
          display: "block",
        }}
      />
    </section>
  );
}
