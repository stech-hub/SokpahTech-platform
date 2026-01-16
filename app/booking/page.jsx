export const metadata = {
  title: "Book a Service | Akin S. Sokpah",
  description:
    "Book a professional service with Akin S. Sokpah — websites, apps, AI solutions, consulting, and training.",
};

export default function BookingPage() {
  const whatsappBase =
    "https://wa.me/231777789356?text=";

  function book(service) {
    const message = encodeURIComponent(
      `Hello Akin, I want to book this service: ${service}`
    );
    window.open(whatsappBase + message, "_blank");
  }

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Book a Service</h1>
        <p style={styles.subtitle}>
          Choose a service and book instantly via WhatsApp
        </p>
      </section>

      {/* SERVICES */}
      <section style={styles.grid}>
        {services.map((s) => (
          <div key={s.name} style={styles.card}>
            <h3 style={styles.cardTitle}>{s.icon} {s.name}</h3>
            <p style={styles.text}>{s.desc}</p>
            <p style={styles.price}>{s.price}</p>
            <button
              style={styles.button}
              onClick={() => book(s.name)}
            >
              Book Now
            </button>
          </div>
        ))}
      </section>

      {/* NOTE */}
      <section style={styles.note}>
        <p>
          💡 Payments are accepted via <strong>Mobile Money</strong> or
          <strong> Bank Transfer</strong> after confirmation.
        </p>
      </section>
    </main>
  );
}

const services = [
  {
    name: "Website Development",
    desc: "Modern, responsive, SEO-optimized websites.",
    price: "Starting from $150",
    icon: "🌐",
  },
  {
    name: "Mobile App Development",
    desc: "Android apps for startups and businesses.",
    price: "Starting from $300",
    icon: "📱",
  },
  {
    name: "AI Solutions",
    desc: "AI automation, tools, and intelligent systems.",
    price: "Starting from $200",
    icon: "🤖",
  },
  {
    name: "Dashboard & Admin Systems",
    desc: "Secure dashboards for managing data and users.",
    price: "Starting from $180",
    icon: "📊",
  },
  {
    name: "Tech Consulting",
    desc: "Strategy, planning, and system design guidance.",
    price: "$30 / session",
    icon: "🧠",
  },
  {
    name: "Training & Mentorship",
    desc: "Learn web, AI, and real-world tech skills.",
    price: "Negotiable",
    icon: "🎓",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background:
      "linear-gradient(135deg, #FFD700, #FFE4F1, #FFF8C5)",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "2.6rem",
    fontWeight: "900",
    color: "#111",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "1.1rem",
    color: "#333",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "26px",
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "28px",
    borderRadius: "22px",
    boxShadow: "0 20px 40px rgba(0,0,0,.25)",
  },
  cardTitle: {
    fontSize: "1.35rem",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#FFD700",
  },
  text: {
    lineHeight: "1.6",
    marginBottom: "14px",
  },
  price: {
    fontWeight: "800",
    marginBottom: "18px",
    color: "#FFE4F1",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "999px",
    border: "none",
    background: "#FFD700",
    color: "#111",
    fontWeight: "900",
    cursor: "pointer",
  },
  note: {
    marginTop: "50px",
    textAlign: "center",
    fontWeight: "600",
    color: "#111",
  },
};
