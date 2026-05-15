import Link from "next/link";

const font = "Comic Sans MS, Comic Sans, cursive";

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
        <Link href="/home/about" className="rainbow-link">About Me</Link>
        <span style={{ fontFamily: font, fontSize: "0.85rem" }}>|</span>
        <Link href="/home/cats" className="rainbow-link">My Cats</Link>
        <span style={{ fontFamily: font, fontSize: "0.85rem" }}>|</span>
        <Link href="/home/soundboard" className="rainbow-link">Soundboard</Link>
        <span style={{ fontFamily: font, fontSize: "0.85rem" }}>|</span>
        <Link href="/home/videos" className="rainbow-link">My Videos</Link>
      </nav>

      <style>{`
        .rainbow-link {
          color: #333;
          text-decoration: none;
          font-size: 0.85rem;
          font-family: ${font};
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .rainbow-link:hover {
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red);
          background-size: 200% auto;
          animation: shimmer 1s linear infinite;
        }
        @keyframes shimmer {
          from { background-position: 0% center; }
          to   { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}
