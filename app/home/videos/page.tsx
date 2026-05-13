import Link from "next/link";

const font = "Comic Sans MS, Comic Sans, cursive";

export default function VideosPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center", justifyContent: "center", fontFamily: font, padding: "2rem" }}>
      <p style={{ fontSize: "0.85rem", alignSelf: "flex-start", marginBottom: "2rem" }}>
        <Link href="/home" style={{ color: "#333" }}>← Back</Link>
      </p>

      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>My Videos 🎬</h1>

      <div style={{ width: "100%", maxWidth: "800px", aspectRatio: "16 / 9" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3Y-xMRedCQ8"
          title="My Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "12px", border: "none" }}
        />
      </div>
    </div>
  );
}
