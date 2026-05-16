export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "var(--light)",
        padding: "100px 60px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--mid)",
            marginBottom: "12px",
          }}
        >
          Get to know me
        </p>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 400,
            color: "var(--dark)",
            lineHeight: 1.05,
            marginBottom: "48px",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--dark)", marginBottom: "1.5rem" }}>
              Hi, I&apos;m Caralyn! I&apos;ve got a deep love for all things storytelling. I&apos;m a Chicago-based editor, born and raised in Virginia, and a graduate of Northwestern University. With over a decade of experience, I&apos;ve worn many hats – from documentary production associate to feature film editor – but I&apos;d say I&apos;m happiest when I&apos;m getting to tell a good story… or when there&apos;s a good mess to organize.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--dark)" }}>
              In my free time I love watching movies, reading, and spending time with my family.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--dark)", marginBottom: "1.5rem" }}>
              My commercial portfolio includes brands such as Dasani, Walgreens, and Famous Footwear, and I&apos;ve also had the opportunity to work on the feature films <em>All Happy Families</em>, <em>Untapped</em>, <em>Melomaniac</em>, and <em>$Positions</em>.
            </p>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "var(--yellow)",
                padding: "10px 20px",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "var(--dark)",
                marginTop: "8px",
              }}
            >
              Chicago, IL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
