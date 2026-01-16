export const metadata = {
  title: "Dashboard | Akin S. Sokpah",
  description:
    "Client dashboard for projects, services, payments, and support."
};

export default function DashboardPage() {
  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Client Dashboard</h1>
        <p style={styles.subtitle}>
          Manage your projects, services, and payments in one place
        </p>
      </section>

      {/* DASHBOARD GRID */}
      <section style={styles.grid}>
        {/* PROJECTS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📂 My Projects</h3>
          <p style={styles.cardText}>
            Track progress on your websites, apps, and AI systems.
          </p>
          <button style={styles.button}>View Projects</button>
        </div>

        {/* PRODUCTS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🛍 Products</h3>
          <p style={styles.cardText}>
            Access purchased apps, platforms, and services.
          </p>
          <a href="/products" style={styles.buttonLink}>
            View Products
          </a>
        </div>

        {/* BOOKINGS */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📅 Book a Service</h3>
          <p style={styles.cardText}>
            Request new websites, apps, or consulting sessions.
          </p>
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.buttonLink}
          >
            Book on WhatsApp
          </a>
        </div>

        {/* PAYMENTS */}
        <div style={styles.cardAlt}>
          <h3 style={styles.cardTitleDark}>💳 Payments</h3>
          <p style={styles.cardTextDark}>
            Pay securely via Mobile Money or Bank Transfer.
          </p>
          <ul style={styles.paymentList}>
            <li><strong>MoMo:</strong> 0889183557</li>
            <li><strong>Name:</strong> Akin Sokpah</li>
            <li><strong>Bank:</strong> UBA Liberia</li>
            <li><strong>Account:</strong> 53020710015394</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🧑‍💼 Support Center</h3>
          <p style={styles.cardText}>
            Need help? Contact support anytime.
          </p>
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.buttonLink}
          >
            Contact Support
          </a>
        </div>

        {/* AUTH PLACEHOLDER */}
        <div style={styles.cardOutline}>
          <h3 style={styles.cardTitle}>🔐 Account</h3>
          <p style={styles.cardText}>
            Login system coming soon for full access.
          </p>
          <button style={styles.disabled}>Login (Coming Soon)</button>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background:
      "linear-gradient(135deg, #FFD700, #FFE4F1, #FFF4B0)",
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
    color: "#444",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "26px",
    borderRadius: "18px",
    boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
  },
  cardAlt: {
    background: "#FFD700",
    color: "#111",
    padding: "26px",
    borderRadius: "18px",
    boxShadow: "0 18px 45px rgba(0,0,0,0.2)",
  },
  cardOutline: {
    background: "#fff",
    padding: "26px",
    borderRadius: "18px",
    border: "2px dashed #111",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#FFD700",
  },
  cardTitleDark: {
    fontSize: "1.4rem",
    fontWeight: "800",
    marginBottom: "10px",
  },
  cardText: {
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  cardTextDark: {
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  paymentList: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
    fontWeight: "600",
  },
  button: {
    background: "#FFD700",
    color: "#111",
    padding: "10px 18px",
    borderRadius: "999px",
    fontWeight: "800",
    border: "none",
    cursor: "pointer",
  },
  buttonLink: {
    display: "inline-block",
    background: "#FFD700",
    color: "#111",
    padding: "10px 18px",
    borderRadius: "999px",
    fontWeight: "800",
    textDecoration: "none",
  },
  disabled: {
    background: "#ccc",
    color: "#666",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "none",
    cursor: "not-allowed",
  },
};
