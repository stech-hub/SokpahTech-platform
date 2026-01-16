export const metadata = {
  title: "Products & Services | Akin S. Sokpah",
  description:
    "Explore apps, websites, AI platforms, and digital services built by Akin S. Sokpah."
};

export default function ProductsPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Products & Services</h1>
        <p style={styles.subtitle}>
          Powerful apps, intelligent systems & digital solutions built for real impact
        </p>
      </section>

      {/* APPS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📱 Mobile Apps</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>BioNurse App</h3>
            <p style={styles.cardText}>
              A healthcare-focused mobile application designed to support nurses
              and medical workflows.
            </p>
            <a
              href="https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk"
              style={styles.download}
            >
              Download APK
            </a>
          </div>
        </div>
      </section>

      {/* WEBSITES */}
      <section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>🌐 Live Websites</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Full Task AI Platform</h3>
            <p style={styles.cardText}>
              An AI-powered productivity platform for task management and automation.
            </p>
            <a
              href="https://full-task-ai.vercel.app/"
              target="_blank"
              style={styles.view}
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🛠 Services</h2>

        <div style={styles.grid}>
          {[
            "Website Development",
            "Mobile App Development",
            "AI Solutions & Automation",
            "Dashboards & Admin Panels",
            "E-Commerce Platforms",
            "UI/UX Design",
            "Tech Consulting",
            "Hosting & Deployment",
            "Maintenance & Support",
          ].map((service) => (
            <div key={service} style={styles.service}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Have an Idea or Project?</h2>
        <p style={styles.ctaText}>
          Let’s turn your idea into a real, scalable digital product.
        </p>
        <a
          href="https://wa.me/231777789356"
          target="_blank"
          style={styles.ctaButton}
        >
          Start on WhatsApp
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
      "linear-gradient(135deg, #FFD700, #FFE4F1, #FFF4B0)",
  },
  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "900",
    color: "#111",
  },
  subtitle: {
    marginTop: "10px",
    color: "#444",
    fontSize: "1.1rem",
  },
  section: {
    maxWidth: "1100px",
    margin: "0 auto 60px",
  },
  sectionAlt: {
    maxWidth: "1100px",
    margin: "0 auto 60px",
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: "1.9rem",
    fontWeight: "800",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "800",
    color: "#FFD700",
    marginBottom: "10px",
  },
  cardText: {
    color: "#eee",
    lineHeight: "1.6",
    marginBottom: "18px",
  },
  download: {
    background: "#25D366",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700",
  },
  view: {
    background: "#FFD700",
    color: "#111",
    padding: "10px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700",
  },
  service: {
    background: "#fff",
    padding: "18px",
    borderRadius: "14px",
    fontWeight: "700",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  cta: {
    textAlign: "center",
    marginTop: "80px",
  },
  ctaTitle: {
    fontSize: "2rem",
    fontWeight: "900",
  },
  ctaText: {
    margin: "12px 0 20px",
    color: "#444",
  },
  ctaButton: {
    background: "#111",
    color: "#FFD700",
    padding: "14px 26px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "800",
  },
};
