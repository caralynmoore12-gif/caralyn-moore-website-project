import FunNav from "@/components/layout/FunNav";

export default function FunHome() {
  return (
    <>
      <FunNav />
      <main
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "80px",
          backgroundColor: "#ffffff",
        }}
      >
        <img
          src="/cat.jpg"
          alt="Florence and Ziggy"
          title="Florence and Ziggy"
          style={{
            width: "min(480px, 90vw)",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            display: "block",
          }}
        />
      </main>
    </>
  );
}
