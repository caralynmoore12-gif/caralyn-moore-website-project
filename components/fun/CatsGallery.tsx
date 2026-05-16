const photos = [
  "img_0928.jpg", "img_1193.jpg", "img_1364.jpg", "img_2263.jpg",
  "img_3883.jpg", "img_4294.jpg", "img_8720.jpg", "img_9811.jpg",
];

export default function CatsGallery() {
  return (
    <>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "680px", color: "var(--dark)" }}>
        Florence and Ziggy are, objectively, the best cats who have ever lived — scientists have not confirmed this, but they haven&apos;t denied it either. Florence is the distinguished one: elegant, watchful, and deeply convinced that she runs the household (she does). Ziggy is the chaotic one: loud, affectionate, and committed to sitting on whatever you are currently trying to use. Together they are a perfect team, and their owner is extremely normal about them.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "8px",
        }}
      >
        {photos.map((photo) => (
          <img
            key={photo}
            src={`/cats/${photo}`}
            alt="Florence and Ziggy"
            style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }}
          />
        ))}
      </div>
    </>
  );
}
