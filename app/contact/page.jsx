export const metadata = {
  title: "Contact | Akin S. Sokpah",
  description:
    "Contact Akin S. Sokpah for website development, apps, AI solutions, consulting, and digital services."
};

export default function ContactPage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Contact Me</h1>
        <p style={styles.subtitle}>
          Let’s build something powerful together
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Get In Touch</h2>
          <p style={styles.text}>
            Whether you need a website, mobile app, AI system, dashboard,
            consulting, or long-term tech support — I’m ready to help.
          </p>

          <div style={styles.buttons}>
            <a
              href="https://wa.me/231777789356"
              target="_blank"
              style={styles.whatsapp}
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:sokpahakinsaye@gmail.com"
              style={styles.email}
            >
              Send Email
            </a>
          </div>
        </div>

        <div style={styles.grid}>
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>WhatsApp</h3>
            <p style={styles.boxText}>+231 777 789 356</p>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Email</h3>
            <p style={styles.boxText}>sokpahakinsaye@gmail.com</p>
          </div>

          <div style={styles.box}>
            <h3 style={styles.boxTitle}>Availability</h3>
            <p style={styles.boxText}>
              Open for freelance, contracts, partnerships & consulting
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    padding: "60px 20px",
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #FFD700, #FFE4F1, #FFF1B8)"
  },
  hero: {
    textAlign: "center",
    marginBottom: "50px"
  },
  title: {
    fontSize: "2.6rem",
    fontWeight: "900",
    color: "#111"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#444",
    marginTop: "8px"
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  card: {
    background: "#fff",
    padding: "34px",
    borderRadius: "18px",
    marginBottom: "30px",
    boxShadow: "0 20px 45px rgba(0,0,0,0.1)"
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "800",
    marginBottom: "12px"
  },
  text: {
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "20px"
  },
  buttons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap"
  },
  whatsapp: {
    background: "#25D366",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: "700",
    textDecoration: "none"
  },
  email: {
    background: "#111",
    color: "#FFD700",
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: "700",
    textDecoration: "none"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px"
  },
  box: {
    background: "#111",
    padding: "26px",
    borderRadius: "16px",
    color: "#fff"
  },
  boxTitle: {
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#FFD700",
    marginBottom: "8px"
  },
  boxText: {
    color: "#eee"
  }
};
