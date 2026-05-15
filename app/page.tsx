"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const font = "Comic Sans MS, Comic Sans, cursive";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("authenticated") === "true") {
      router.push("/home");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === "dee") {
      setError(false);
      setShowModal(true);
    } else {
      setError(true);
    }
  };

  const handleSorry = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play();
    audio.onended = () => {
      sessionStorage.setItem("authenticated", "true");
      router.push("/home");
    };
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", justifyContent: "center", fontFamily: font }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔒 Enter Password</h1>
      <p style={{ fontSize: "1rem", marginBottom: "1.5rem", color: "#555", fontStyle: "italic" }}>
        The last person we saw get voted out on Survivor 50:
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password..."
          style={{ padding: "0.5rem 1rem", fontSize: "1rem", borderRadius: "8px", border: "2px solid #333", fontFamily: font }}
        />
        <button
          type="submit"
          style={{ padding: "0.5rem 1.5rem", fontSize: "1rem", borderRadius: "8px", background: "#333", color: "white", cursor: "pointer", fontFamily: font, border: "none" }}
        >
          Enter
        </button>
        {error && <p style={{ color: "red", margin: 0 }}>Wrong! Try again.</p>}
      </form>

      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
          <div style={{ background: "white", padding: "2.5rem", borderRadius: "16px", textAlign: "center", maxWidth: "420px", fontFamily: font }}>
            <p style={{ fontSize: "1.4rem", marginBottom: "1.75rem", lineHeight: "1.6" }}>
              Whoa, buddy, not so fast. This is personal property.
            </p>
            <button
              onClick={handleSorry}
              style={{ padding: "0.5rem 1.5rem", fontSize: "1rem", borderRadius: "8px", background: "#333", color: "white", cursor: "pointer", fontFamily: font, border: "none" }}
            >
              I&apos;m sorry.
            </button>
          </div>
        </div>
      )}

      <audio ref={audioRef} src="/audio/entry/soundboard clips_over the garden wall_just kidding happy halloween.mp3" />
    </div>
  );
}
