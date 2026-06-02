export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#ffffff",
        padding: "120px 60px",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "var(--dark)",
            lineHeight: 1.05,
            marginBottom: "2rem",
          }}
        >
          About
        </h2>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "var(--dark)",
            marginBottom: "1.75rem",
          }}
        >
          Chicago-based video and film editor, born in Virginia, educated at Northwestern. Over a decade of work across documentary, commercial, and feature film — brands including Dasani, Walgreens, and Famous Footwear; features including <em>All Happy Families</em>, <em>Untapped</em>, <em>Melomaniac</em>, and <em>$Positions</em>. I&apos;m happiest when there&apos;s a good story to cut — or a good mess to organize.
        </p>

        <div
          style={{
            width: "32px",
            height: "2px",
            backgroundColor: "var(--yellow)",
          }}
        />
      </div>
    </section>
  );
}
