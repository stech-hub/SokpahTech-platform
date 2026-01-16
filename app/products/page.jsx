export const metadata = {
  title: "Products | Akin S. Sokpah",
  description:
    "Apps, websites, AI platforms, and digital services built by Akin S. Sokpah.",
};

export default function ProductsPage() {
  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Products & Services</h1>
        <p style={styles.subtitle}>
          Real digital products built for impact, growth, and innovation
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section style={styles.grid}>
        {/* APP */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📱 BioNurse Mobile App</h2>
          <p style={styles.text}>
            A healthcare support application designed to assist nurses and
            health workers with digital tools.
          </p>

          <ul style={styles.list}>
            <li>✔ Android APK</li>
            <li>✔ Lightweight & Fast</li>
            <li>✔ Offline Friendly</li>
          </ul>

          <a
            href="https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk"
            target="_blank"
            style={styles.primaryButton}
          >
            Download APK
          </a>
        </div>

        {/* AI WEBSITE */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🤖 Full Task AI Platform</h2>
          <p style={styles.text}>
            An AI-powered productivity and automation platform built to help
            users complete tasks faster.
          </p>

          <ul style={styles.list}>
            <li>✔ AI Task Automation</li>
            <li>✔ Web-based Platform</li>
            <li>✔ Fast & Secure</li>
          </ul>

          <a
            href="https://full-task-ai.vercel.app/"
            target="_blank"
            style={styles.primaryButton}
          >
            Visit AI Website
          </a>
        </div>

        {/* SERVICES */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>💼 Digital Services</h2>
          <p style={styles.text}>
            Professional services tailored for startups, businesses, and
            individuals.
          </p>

          <ul style={styles.list}>
            <li>✔ Website Development</li>
            <li>✔ Web Apps & Dashboards</li>
            <li>✔ AI Solutions</li>
            <li>✔ Consulting & Training</li>
          </ul>

          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.secondaryButton}
          >
            Request a Service
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Have an idea or project?</h2>
        <p>Let’s build something powerful together.</p>

        <a
          href="https://wa.me/231777789356"
          target="_blank"
          style={styles.ctaButton}
        >
          Message Me on WhatsApp
        </a>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background:
      "linear-gradient(135deg, #FFD700, #FFE4F1, #FFFACD)",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "2.8rem",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "32px",
    borderRadius: "28px",
    boxShadow: "0 24px 50px rgba(0,0,0,.28)",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "900",
    marginBottom: "12px",
    color: "#FFD700",
  },
  text: {
    marginBottom: "16px",
    lineHeight: "1.6",
  },
  list: {
    marginBottom: "22px",
    lineHeight: "1.8",
    paddingLeft: "16px",
  },
  primaryButton: {
    display: "block",
    padding: "14px",
    borderRadius: "999px",
    background: "#FFD700",
    color: "#111",
    fontWeight: "900",
    textAlign: "center",
    textDecoration: "none",
    marginBottom: "10px",
  },
  secondaryButton: {
    display: "block",
    padding: "14px",
    borderRadius: "999px",
    background: "#FF69B4",
    color: "#111",
    fontWeight: "900",
    textAlign: "center",
    textDecoration: "none",
  },
  cta: {
    marginTop: "70px",
    textAlign: "center",
    fontWeight: "700",
  },
  ctaButton: {
    display: "inline-block",
    marginTop: "16px",
    padding: "16px 36px",
    borderRadius: "999px",
    background: "#111",
    color: "#FFD700",
    fontWeight: "900",
    textDecoration: "none",
  },
};
