export const metadata = {
  title: "Products & Services | Akin S. Sokpah",
  description:
    "Explore apps, websites, AI platforms, and digital services built by Akin S. Sokpah.",
};

export default function ProductsPage() {
  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Products & Services</h1>
        <p style={styles.subtitle}>
          Real digital products, apps, and platforms built for impact
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section style={styles.grid}>
        {/* BIO NURSE APP */}
        <div style={styles.cardDark}>
          <h3 style={styles.cardTitle}>📱 BioNurse Mobile App</h3>
          <p style={styles.text}>
            A healthcare-focused mobile app designed to assist nurses and
            medical professionals.
          </p>
          <ul style={styles.list}>
            <li>✔ Android APK</li>
            <li>✔ Fast & Lightweight</li>
            <li>✔ Real-world use</li>
          </ul>
          <a
            href="https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk"
            style={styles.buttonGold}
          >
            Download APK
          </a>
        </div>

        {/* AI WEBSITE */}
        <div style={styles.cardLight}>
          <h3 style={styles.cardTitleDark}>🤖 Full Task AI Platform</h3>
          <p style={styles.textDark}>
            An AI-powered website that helps automate tasks and improve
            productivity.
          </p>
          <ul style={styles.listDark}>
            <li>✔ AI-powered</li>
            <li>✔ Cloud-based</li>
            <li>✔ Live production</li>
          </ul>
          <a
            href="https://full-task-ai.vercel.app/"
            target="_blank"
            style={styles.buttonDark}
          >
            Visit AI Website
          </a>
        </div>

        {/* WEBSITE DEVELOPMENT */}
        <div style={styles.cardGold}>
          <h3 style={styles.cardTitleDark}>🌐 Website Development</h3>
          <p style={styles.textDark}>
            Modern, fast, SEO-optimized websites for individuals, startups,
            and businesses.
          </p>
          <ul style={styles.listDark}>
            <li>✔ Business websites</li>
            <li>✔ Landing pages</li>
            <li>✔ GitHub / Vercel deployment</li>
          </ul>
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.buttonDark}
          >
            Order a Website
          </a>
        </div>

        {/* APP DEVELOPMENT */}
        <div style={styles.cardOutline}>
          <h3 style={styles.cardTitle}>📦 App Development</h3>
          <p style={styles.text}>
            Custom mobile and web apps tailored to your business needs.
          </p>
          <ul style={styles.list}>
            <li>✔ Android Apps</li>
            <li>✔ Web Apps</li>
            <li>✔ Dashboard systems</li>
          </ul>
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.buttonGold}
          >
            Build an App
          </a>
        </div>

        {/* CONSULTING */}
        <div style={styles.cardDark}>
          <h3 style={styles.cardTitle}>🧠 Tech Consulting</h3>
          <p style={styles.text}>
            Expert guidance for startups, founders, and businesses.
          </p>
          <ul style={styles.list}>
            <li>✔ Strategy</li>
            <li>✔ System design</li>
            <li>✔ AI & automation</li>
          </ul>
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.buttonGold}
          >
            Book Consulting
          </a>
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
    fontSize: "2.7rem",
    fontWeight: "900",
    color: "#111",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "1.1rem",
    color: "#333",
  },
  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "26px",
  },
  cardDark: {
    background: "#111",
    color: "#fff",
    padding: "28px",
    borderRadius: "20px",
  },
  cardLight: {
    background: "#fff",
    padding: "28px",
    borderRadius: "20px",
  },
  cardGold: {
    background: "#FFD700",
    padding: "28px",
    borderRadius: "20px",
  },
  cardOutline: {
    background: "#fff",
    padding: "28px",
    borderRadius: "20px",
    border: "2px solid #111",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "800",
    marginBottom: "12px",
    color: "#FFD700",
  },
  cardTitleDark: {
    fontSize: "1.4rem",
    fontWeight: "800",
    marginBottom: "12px",
  },
  text: {
    lineHeight: "1.6",
    marginBottom: "14px",
  },
  textDark: {
    lineHeight: "1.6",
    marginBottom: "14px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.7",
    fontWeight: "600",
    marginBottom: "16px",
  },
  listDark: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.7",
    fontWeight: "600",
    marginBottom: "16px",
  },
  buttonGold: {
    display: "inline-block",
    background: "#FFD700",
    color: "#111",
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: "800",
    textDecoration: "none",
  },
  buttonDark: {
    display: "inline-block",
    background: "#111",
    color: "#FFD700",
    padding: "12px 22px",
    borderRadius: "999px",
    fontWeight: "800",
    textDecoration: "none",
  },
};
