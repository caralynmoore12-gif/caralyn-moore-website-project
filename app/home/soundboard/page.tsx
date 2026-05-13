"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const font = "Comic Sans MS, Comic Sans, cursive";

const jailClips = [
  "/audio/jail/soundboard clips_jail_01.mp3",
  "/audio/jail/soundboard clips_jail_02.mp3",
  "/audio/jail/soundboard clips_jail_03.mp3",
  "/audio/jail/soundboard clips_jail_04.mp3",
  "/audio/jail/soundboard clips_jail_05.mp3",
  "/audio/jail/soundboard clips_jail_06.mp3",
  "/audio/jail/soundboard clips_jail_07.mp3",
  "/audio/jail/soundboard clips_jail_08.mp3",
  "/audio/jail/soundboard clips_jail_09.mp3",
];

export default function SoundboardPage() {
  const [shaking, setShaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const shake = () => {
    if (shaking) return;
    setShaking(true);
    const clip = jailClips[Math.floor(Math.random() * jailClips.length)];
    const audio = audioRef.current;
    if (audio) {
      audio.src = clip;
      audio.play();
      audio.onended = () => setShaking(false);
    }
    setTimeout(() => setShaking(false), 800);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", alignItems: "center", justifyContent: "center", fontFamily: font, padding: "2rem" }}>
      <p style={{ fontSize: "0.85rem", alignSelf: "flex-start", marginBottom: "2rem" }}>
        <Link href="/home" style={{ color: "#333" }}>← Back</Link>
      </p>

      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Am I in trouble?</h1>

      <div
        onClick={shake}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #555, #000)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
          animation: shaking ? "shake 0.4s ease" : "none",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#1a1a6e",
          }}
        />
      </div>

      <audio ref={audioRef} />

      <style>{`
        @keyframes shake {
          0%   { transform: rotate(0deg); }
          20%  { transform: rotate(-10deg); }
          40%  { transform: rotate(10deg); }
          60%  { transform: rotate(-8deg); }
          80%  { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
