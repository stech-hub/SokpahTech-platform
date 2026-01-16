export const metadata = {
  title: "About Me | Akin S. Sokpah",
  description:
    "Learn more about Akin S. Sokpah, Liberian tech founder, software developer, AI innovator, and digital consultant."
};

export default function AboutPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>About Akin S. Sokpah</h1>
        <p style={styles.subtitle}>
          Founder • Software Developer • AI Innovator • Tech Consultant
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Who I Am</h2>
          <p style={styles.text}>
            My name is Akin S. Sokpah. I am a Liberian tech founder and developer
            passionate about building real-world digital solutions that solve
            problems, create opportunities, and scale impact across Africa and
            beyond.
          </p>

          <p style={styles.text}>
            I specialize in building modern websites, web applications,
            dashboards, AI-powered systems, and startup platforms designed for
            performance, security, and growth.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Vision</h3>
            <p style={styles.boxText}>
              To empower Africa and the world through accessible, innovative,
              and scalable technology solutions.
            </p>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Mission</h3>
            <p style={styles.boxText}>
              To design and develop reliable digital platforms that help people,
              startups, and businesses succeed in the modern digital economy.
            </p>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Ambition</h3>
            <p style={styles.boxText}>
              To become a globally recognized tech leader and founder
              originating from Liberia.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.heading}>What I Build</h2>
          <ul style={styles.list}>
            <li>✔ Professional Websites</li>
            <li>✔ Web Applications</li>
            <li>✔ AI Systems & Automation</li>
            <li>✔ Dashboards & Admin Panels</li>
            <li>✔ Startup Platforms</li>
            <li>✔ Tech Consulting & Support</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    padding: "60px 20px",
    background: "linear-gradient(135deg, #FFF1B8, #FFE4F1, #FFD700)",
    minHeight: "100vh"
  },
  hero: {
    textAlign: "center",
    marginBottom: "50px"
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "900",
    color: "#111"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#444",
    marginTop: "10px"
  },
  content: {
    maxWidth: "1000px",
    margin: "0 auto"
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "32px",
    marginBottom: "30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
  },
  heading: {
    fontSize: "1.6rem",
    fontWeight: "800",
    marginBottom: "14px"
  },
  text: {
    color: "#555",
    marginBottom: "12px",
    lineHeight: "1.7"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginBottom: "30px"
  },
  box: {
    background: "#111",
    color: "#fff",
    padding: "26px",
    borderRadius: "14px"
  },
  boxTitle: {
    fontSize: "1.2rem",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#FFD700"
  },
  boxText: {
    color: "#eee"
  },
  list: {
    paddingLeft: "20px",
    color: "#333",
    lineHeight: "1.8",
    fontWeight: "500"
  }
};
