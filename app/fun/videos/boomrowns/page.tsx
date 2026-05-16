import FunSubpageNav from "@/components/layout/FunSubpageNav";

export default function BoomrownsPage() {
  return (
    <>
      <FunSubpageNav />
      <main style={{ padding: "80px 60px" }}>
        <h1 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "3rem" }}>
          Boomrowns!
        </h1>

        {/* Video embeds go here */}
        <p style={{ color: "var(--mid)", fontSize: "1rem" }}>Videos coming soon.</p>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "0.85rem",
          color: "var(--mid)",
          borderTop: "1px solid #e5e5e5",
          marginTop: "4rem",
        }}
      >
        F is for Friends who do stuff together!
      </footer>
    </>
  );
}
