import Link from "next/link";

const font = "Comic Sans MS, Comic Sans, cursive";

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: font }}>
      <p style={{ fontSize: "0.85rem", marginBottom: "2rem" }}>
        <Link href="/home" style={{ color: "#333" }}>← Back</Link>
      </p>

      <h1 style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>Cara Baker</h1>
      <p style={{ fontSize: "1rem", color: "#555", marginBottom: "2rem" }}>
        International Super Spy · Video &amp; Film Editor · Cat Mom · Slot Machine Threat
      </p>
      <p style={{ fontSize: "0.85rem", color: "#777", marginBottom: "2.5rem" }}>
        Chicago, IL · Available for covert operations and color grading
      </p>

      <hr style={{ marginBottom: "2rem", border: "none", borderTop: "1px solid #ddd" }} />

      <p style={{ lineHeight: "1.9", fontSize: "1rem" }}>
        Cara Baker is a seasoned video and film editor based in Chicago — by day, she crafts visual stories that make people feel things (mostly good things, sometimes tense things, occasionally <em>wait, what?</em> things); by night, she is a licensed international super spy operating across 47 countries, or at least that&apos;s what her expense reports say. Raised on a strict diet of strong coffee and good storytelling, she discovered her dual calling early: an uncanny ability to find the perfect cut point, and an equally uncanny ability to blend in at international casinos — she once won several hundred dollars at a Vegas slot machine, a victory she considers on par with most field missions and significantly more enjoyable than at least three of them. At home in Chicago, she lives with her husband Matt (supportive, suspiciously good at keeping secrets) and her two cats, Florence and Ziggy (chaotic, cleared for top-secret snuggles); her work has been screened at festivals, broadcast on television, and classified by several agencies whose names she is legally unable to confirm exist.
      </p>
    </div>
  );
}
