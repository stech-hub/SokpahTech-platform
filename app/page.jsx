export default function HomePage() {
  return (
    <section style={{ padding: "3rem 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "gold" }}>
        Akin S. Sokpah
      </h1>

      <p style={{ fontSize: "1.1rem", maxWidth: "700px", lineHeight: "1.7" }}>
        Founder • Software Developer • AI Innovator  
        <br /><br />
        I build premium websites, mobile apps, dashboards, and AI-powered
        platforms that help individuals, startups, and businesses grow in
        Africa and globally.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="https://wa.me/231777789356"
          target="_blank"
          style={{
            background: "linear-gradient(45deg, gold, hotpink, yellow)",
            padding: "0.7rem 1.2rem",
            borderRadius: "8px",
            color: "#000",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Hire Me on WhatsApp
        </a>

        <a
          href="/products"
          style={{
            border: "1px solid gold",
            padding: "0.7rem 1.2rem",
            borderRadius: "8px",
            color: "gold",
            textDecoration: "none",
          }}
        >
          View My Products
        </a>
      </div>
    </section>
  );
}
