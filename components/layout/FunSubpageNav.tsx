import Link from "next/link";

export default function FunSubpageNav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--yellow)",
        padding: "14px 40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link
        href="/fun/home"
        style={{
          color: "var(--dark)",
          textDecoration: "none",
          fontSize: "1.2rem",
          lineHeight: 1,
        }}
        title="Fun House"
      >
        🏠
      </Link>
    </nav>
  );
}
