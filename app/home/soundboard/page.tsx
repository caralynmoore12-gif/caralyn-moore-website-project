"use client";
import { useRef } from "react";
import Link from "next/link";

const font = "Comic Sans MS, Comic Sans, cursive";

const items = [
  { id: "03", image: "/soundboard/images/03.png", clips: ["/soundboard/clips/03/soundboard clips_blueberries.mp3"] },
  {
    id: "01",
    image: "/soundboard/images/01.png",
    clips: [
      "/soundboard/clips/01/soundboard clips_jail_01.mp3",
      "/soundboard/clips/01/soundboard clips_jail_02.mp3",
      "/soundboard/clips/01/soundboard clips_jail_03.mp3",
      "/soundboard/clips/01/soundboard clips_jail_04.mp3",
      "/soundboard/clips/01/soundboard clips_jail_05.mp3",
      "/soundboard/clips/01/soundboard clips_jail_06.mp3",
      "/soundboard/clips/01/soundboard clips_jail_07.mp3",
      "/soundboard/clips/01/soundboard clips_jail_08.mp3",
      "/soundboard/clips/01/soundboard clips_jail_09.mp3",
    ],
  },
  { id: "05", image: "/soundboard/images/05.png", clips: ["/soundboard/clips/05/soundboard clips_love island_text.mp3"] },
  { id: "04", image: "/soundboard/images/04.png", clips: ["/soundboard/clips/04/soundboard clips_little women_rudest boy.mp3"] },
  {
    id: "02",
    image: "/soundboard/images/02.png",
    clips: [
      "/soundboard/clips/02/soundboard clips_rock facts_01.mp3",
      "/soundboard/clips/02/soundboard clips_rock facts_02.mp3",
      "/soundboard/clips/02/soundboard clips_rock facts_03.mp3",
      "/soundboard/clips/02/soundboard clips_rock facts_04.mp3",
    ],
  },
  { id: "09", image: "/soundboard/images/09.png", clips: ["/soundboard/clips/09/soundboard clips_twilight_aro laugh.mp3"] },
  { id: "07", image: "/soundboard/images/07.png", clips: ["/soundboard/clips/07/soundboard clips_over the garden wall_aint that just the way.mp3"] },
  { id: "06", image: "/soundboard/images/06.png", clips: ["/soundboard/clips/06/soundboard clips_moonstruck_bring me the big knife.mp3"] },
  { id: "08", image: "/soundboard/images/08.png", clips: ["/soundboard/clips/08/soundboard clips_palm springs_good leg.mp3"] },
];

export default function SoundboardPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const indexRef = useRef<Record<string, number>>({});

  const play = (item: typeof items[number]) => {
    const current = indexRef.current[item.id] ?? 0;
    const clip = item.clips[current % item.clips.length];
    indexRef.current[item.id] = (current + 1) % item.clips.length;

    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = clip;
    audio.play();
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: font }}>
      <p style={{ fontSize: "0.85rem", marginBottom: "2rem" }}>
        <Link href="/home" style={{ color: "#333" }}>← Back</Link>
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => play(item)}
            style={{
              background: "none",
              border: "2px solid transparent",
              borderRadius: "12px",
              padding: "0.5rem",
              cursor: "pointer",
              transition: "border-color 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#333";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            <img
              src={item.image}
              alt={`soundboard item ${item.id}`}
              style={{ width: "100%", borderRadius: "8px", display: "block" }}
            />
          </button>
        ))}
      </div>

      <audio ref={audioRef} />
    </div>
  );
}
