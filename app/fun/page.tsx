"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FunGate() {
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem("fun-auth") === "true") {
      router.push("/fun/home");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() === "ZiggyBoomer") {
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
      sessionStorage.setItem("fun-auth", "true");
      router.push("/fun/home");
    };
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: "2rem",
      }}
    >
      <p
        className="serif"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--mid)",
          marginBottom: "1rem",
        }}
      >
        Password required
      </p>
      <h1
        className="serif"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 400,
          marginBottom: "2.5rem",
          color: "var(--dark)",
          textAlign: "center",
        }}
      >
        The Princess and the Frog
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "320px" }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          autoFocus
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "1rem",
            border: "2px solid var(--dark)",
            outline: "none",
            fontFamily: "inherit",
            backgroundColor: "#ffffff",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            backgroundColor: "var(--yellow)",
            color: "var(--dark)",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Enter
        </button>
        {error && (
          <p style={{ color: "#cc0000", fontSize: "0.85rem" }}>
            Incorrect password.
          </p>
        )}
      </form>

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            padding: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "3rem",
              maxWidth: "420px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <p
              className="serif"
              style={{
                fontSize: "1.4rem",
                fontWeight: 400,
                marginBottom: "2rem",
                lineHeight: 1.5,
                color: "var(--dark)",
              }}
            >
              Whoa, buddy, not so fast. This is personal property.
            </p>
            <button
              onClick={handleSorry}
              style={{
                padding: "12px 32px",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                backgroundColor: "var(--yellow)",
                color: "var(--dark)",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
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
