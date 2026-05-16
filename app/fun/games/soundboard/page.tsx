import FunSubpageNav from "@/components/layout/FunSubpageNav";
import SoundboardGrid from "@/components/fun/SoundboardGrid";

export default function SoundboardPage() {
  return (
    <>
      <FunSubpageNav />
      <main style={{ padding: "80px 60px 80px" }}>
        <h1 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "2.5rem" }}>
          Soundboard
        </h1>
        <SoundboardGrid />
      </main>
    </>
  );
}
