export const metadata = {
  title: "Products | Akin S. Sokpah",
  description:
    "Explore apps, AI platforms, and digital products built by Akin S. Sokpah including BioNurse App and Full Task AI."
};

export default function ProductsPage() {
  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Products & Platforms</h1>
        <p style={styles.subtitle}>
          Real-world applications and AI-powered systems built for impact.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section style={styles.grid}>
        {/* BioNurse App */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>BioNurse App</h2>
          <p style={styles.cardText}>
            A healthcare support application designed to help users manage
            health information and medical workflows efficiently.
          </p>

          <ul style={styles.list}>
            <li>📱 Android APK</li>
            <li>🩺 Health-focused</li>
            <li>⚡ Fast & lightweight</li>
          </ul>

          <a
            href="https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk"
            style={styles.primaryBtn}
            download
          >
            Download APK
          </a>
        </div>

        {/* Full Task AI */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Full Task AI</h2>
          <p style={styles.cardText}>
            An AI-powered platform that helps users complete tasks, automate
            workflows, and increase productivity using intelligent systems.
          </p>

          <ul style={styles.list}>
            <li>🤖 AI Automation</li>
            <li>🌍 Web-based</li>
            <li>🚀 Scalable platform</li>
          </ul>

          <a
            href="https://full-task-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.secondaryBtn}
          >
            Visit AI Website
          </a>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, #FFF7E6, #FFE4F1, #FFF1B8)",
    minHeight: "100vh"
  },
  header: {
    textAlign: "center",
    marginBottom: "50px"
  },
  title: {
    fontSize: "2.6rem",
    fontWeight: "900",
    marginBottom: "10px",
    color: "#111"
  },
  subtitle: {
    maxWidth: "600px",
    margin: "0 auto",
    color: "#444",
    fontSize: "1.1rem"
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px"
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  cardTitle: {
    fontSize: "1.6rem",
    fontWeight: "800",
    marginBottom: "12px"
  },
  cardText: {
    color: "#555",
    marginBottom: "16px"
  },
  list: {
    marginBottom: "24px",
    paddingLeft: "20px",
    color: "#333"
  },
  primaryBtn: {
    background: "linear-gradient(90deg, #FFD700, #FF69B4)",
    color: "#111",
    padding: "14px",
    textAlign: "center",
    borderRadius: "10px",
    fontWeight: "800",
    textDecoration: "none"
  },
  secondaryBtn: {
    background: "#111",
    color: "#fff",
    padding: "14px",
    textAlign: "center",
    borderRadius: "10px",
    fontWeight: "800",
    textDecoration: "none"
  }
};
