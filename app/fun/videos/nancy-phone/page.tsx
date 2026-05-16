import FunSubpageNav from "@/components/layout/FunSubpageNav";

export default function NancyPhonePage() {
  return (
    <>
      <FunSubpageNav />
      <main
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 60px",
          textAlign: "center",
        }}
      >
        <h1 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, marginBottom: "1.5rem" }}>
          Society of the Nancy Phone
        </h1>
        <p style={{ color: "var(--mid)", fontSize: "1rem", letterSpacing: "0.04em" }}>
          Under construction.
        </p>
      </main>
    </>
  );
}
