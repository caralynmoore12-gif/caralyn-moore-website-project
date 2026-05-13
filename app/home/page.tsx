import Link from "next/link";

const font = "Comic Sans MS, Comic Sans, cursive";

const navStyle: React.CSSProperties = {
  color: "#333",
  textDecoration: "none",
  fontSize: "0.85rem",
  fontFamily: font,
};

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontFamily: font, fontSize: "2.5rem" }}>
        Hi, I&apos;m Caralyn Moore!
      </h1>
      <p style={{ fontFamily: font, fontSize: "1.5rem", marginTop: "1rem" }}>
        And I love my husband Matt very much for helping me set this up!
      </p>
      <p style={{ fontFamily: font, fontSize: "1.5rem", marginTop: "1rem" }}>
        With Claude Code, anything is possible.
      </p>
      <img
        src="/cat.jpg"
        alt="Florence and Ziggy"
        title="These are my cats, Florence and Ziggy!"
        style={{ marginTop: "1.5rem", maxWidth: "400px", borderRadius: "8px" }}
      />
      <nav style={{ marginTop: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Link href="/home/about" style={navStyle}>About Me</Link>
        <span style={{ fontFamily: font, fontSize: "0.85rem" }}>|</span>
        <Link href="/home/cats" style={navStyle}>My Cats</Link>
        <span style={{ fontFamily: font, fontSize: "0.85rem" }}>|</span>
        <Link href="/home/soundboard" style={navStyle}>Soundboard</Link>
        <span style={{ fontFamily: font, fontSize: "0.85rem" }}>|</span>
        <Link href="/home/videos" style={navStyle}>My Videos</Link>
      </nav>
    </div>
  );
}
