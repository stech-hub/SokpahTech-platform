export const metadata = {
  title: "Support Center | Akin S. Sokpah",
  description:
    "Get help, contact support, and request assistance for services, products, and platforms."
};

export default function SupportPage() {
  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Support Center</h1>
        <p style={styles.subtitle}>
          We’re here to help you with services, products, payments, and technical support
        </p>
      </section>

      {/* SUPPORT OPTIONS */}
      <section style={styles.grid}>
        {/* WHATSAPP */}
        <div style={styles.cardDark}>
          <h3 style={styles.cardTitle}>📞 WhatsApp Support</h3>
          <p style={styles.cardText}>
            Fast response for bookings, payments, and urgent issues.
          </p>
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.buttonGold}
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* EMAIL */}
        <div style={styles.cardLight}>
          <h3 style={styles.cardTitleDark}>📧 Email Support</h3>
          <p style={styles.cardTextDark}>
            Send detailed requests or project briefs via email.
          </p>
          <p><strong>Primary:</strong> sokpahakinsaye@gmail.com</p>
          <p><strong>Backup:</strong> sok1911@outlook.com</p>
        </div>

        {/* PAYMENTS */}
        <div style={styles.cardGold}>
          <h3 style={styles.cardTitleDark}>💳 Payment Help</h3>
          <p style={styles.cardTextDark}>
            Having issues with payment? Use the details below.
          </p>
          <ul style={styles.list}>
            <li><strong>MoMo:</strong> 0889183557</li>
            <li><strong>Name:</strong> Akin Sokpah</li>
            <li><strong>Bank:</strong> UBA Liberia</li>
            <li><strong>Account:</strong> 53020710015394</li>
          </ul>
        </div>

        {/* FAQ */}
        <div style={styles.cardOutline}>
          <h3 style={styles.cardTitle}>❓ Common Questions</h3>
          <ul style={styles.faq}>
            <li>✔ How do I book a website or app?</li>
            <li>✔ How long does a project take?</li>
            <li>✔ How do I make payment?</li>
            <li>✔ Can I get ongoing support?</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div style={styles.cardDark}>
          <h3 style={styles.cardTitle}>🔐 Security & Trust</h3>
          <p style={styles.cardText}>
            We protect client data and follow secure development practices.
          </p>
          <p>✔ Secure payments</p>
          <p>✔ Confidential communication</p>
          <p>✔ Trusted delivery</p>
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
    color: "#333",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  cardDark: {
    background: "#111",
    color: "#fff",
    padding: "26px",
    borderRadius: "18px",
  },
  cardLight: {
    background: "#fff",
    padding: "26px",
    borderRadius: "18px",
  },
  cardGold: {
    background: "#FFD700",
    padding: "26px",
    borderRadius: "18px",
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
    marginBottom: "12px",
    color: "#FFD700",
  },
  cardTitleDark: {
    fontSize: "1.4rem",
    fontWeight: "800",
    marginBottom: "12px",
  },
  cardText: {
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  cardTextDark: {
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  buttonGold: {
    display: "inline-block",
    background: "#FFD700",
    color: "#111",
    padding: "12px 20px",
    borderRadius: "999px",
    fontWeight: "800",
    textDecoration: "none",
  },
  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
    fontWeight: "600",
  },
  faq: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
  },
};
