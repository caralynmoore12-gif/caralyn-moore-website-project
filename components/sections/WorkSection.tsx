import ProjectCard from "@/components/ui/ProjectCard";

const projects: { title: string; thumbnail?: string; href?: string }[] = [
  // Add project data here when ready
  { title: "Project coming soon" },
  { title: "Project coming soon" },
  { title: "Project coming soon" },
  { title: "Project coming soon" },
  { title: "Project coming soon" },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      style={{
        backgroundColor: "var(--dark)",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "0 60px", marginBottom: "48px" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "12px",
          }}
        >
          Selected work
        </p>
        <h2
          className="serif"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.05,
          }}
        >
          Work
        </h2>
      </div>

      {/* Horizontal scroll carousel */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          paddingLeft: "60px",
          paddingRight: "60px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {projects.map((p, i) => (
          <div key={i} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>

      <style>{`div::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
