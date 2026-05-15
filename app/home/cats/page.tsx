import Link from "next/link";

const font = "Comic Sans MS, Comic Sans, cursive";

const photos = [
  "img_0928.jpg",
  "img_1193.jpg",
  "img_1364.jpg",
  "img_2263.jpg",
  "img_3883.jpg",
  "img_4294.jpg",
  "img_8720.jpg",
  "img_9811.jpg",
];

export default function CatsPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem", fontFamily: font }}>
      <p style={{ fontSize: "0.85rem", marginBottom: "2rem" }}>
        <Link href="/home" style={{ color: "#333" }}>← Back</Link>
      </p>

      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>My Cats 🐱</h1>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.9", marginBottom: "2.5rem" }}>
        Florence and Ziggy are, objectively, the best cats who have ever lived — scientists have not confirmed this, but they haven&apos;t denied it either. Florence is the distinguished one: elegant, watchful, and deeply convinced that she runs the household (she does). Ziggy is the chaotic one: loud, affectionate, and committed to sitting on whatever you are currently trying to use. Together, they are a perfect team, and their owner is extremely normal about them.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
        {photos.map((photo) => (
          <img
            key={photo}
            src={`/cats/${photo}`}
            alt="Florence and Ziggy"
            style={{ width: "100%", borderRadius: "10px", objectFit: "cover", aspectRatio: "1 / 1" }}
          />
        ))}
      </div>
    </div>
  );
}
