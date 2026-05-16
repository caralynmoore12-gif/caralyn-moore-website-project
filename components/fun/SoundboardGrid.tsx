"use client";
import { useRef } from "react";

const items = [
  { id: "03", image: "/soundboard/images/03.png", clips: ["/soundboard/clips/03/soundboard clips_blueberries.mp3"] },
  {
    id: "01", image: "/soundboard/images/01.png",
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
  { id: "08", image: "/soundboard/images/08.png", clips: ["/soundboard/clips/08/soundboard clips_palm springs_good leg.mp3"] },
  { id: "04", image: "/soundboard/images/04.png", clips: ["/soundboard/clips/04/soundboard clips_little women_rudest boy.mp3"] },
  {
    id: "02", image: "/soundboard/images/02.png",
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
  { id: "05", image: "/soundboard/images/05.png", clips: ["/soundboard/clips/05/soundboard clips_love island_text.mp3"] },
];

export default function SoundboardGrid() {
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
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          maxWidth: "600px",
        }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => play(item)}
            style={{
              background: "none",
              border: "2px solid transparent",
              padding: "6px",
              cursor: "pointer",
              transition: "border-color 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--dark)";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={item.image} alt="" style={{ width: "100%", display: "block" }} />
          </button>
        ))}
      </div>
      <audio ref={audioRef} />
    </>
  );
}
