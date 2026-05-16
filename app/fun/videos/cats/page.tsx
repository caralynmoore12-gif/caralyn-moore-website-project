import FunSubpageNav from "@/components/layout/FunSubpageNav";
import CatsGallery from "@/components/fun/CatsGallery";

export default function CatsPage() {
  return (
    <>
      <FunSubpageNav />
      <main style={{ paddingTop: "80px", padding: "80px 60px 80px" }}>
        <h1 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "2rem" }}>
          My Cats
        </h1>
        <CatsGallery />
      </main>
    </>
  );
}
