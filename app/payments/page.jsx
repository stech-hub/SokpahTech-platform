export const metadata = {
  title: "Payments | Akin S. Sokpah",
  description:
    "Secure payments via Mobile Money and Bank Transfer for services by Akin S. Sokpah.",
};

export default function PaymentsPage() {
  return (
    <main style={styles.page}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>Payments & Support</h1>
        <p style={styles.subtitle}>
          Simple, secure, and trusted payment options
        </p>
      </section>

      {/* PAYMENT METHODS */}
      <section style={styles.grid}>
        {/* MOBILE MONEY */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📱 Mobile Money (MoMo)</h2>
          <p style={styles.text}>
            Use Mobile Money to pay for services quickly.
          </p>

          <div style={styles.details}>
            <p><strong>Network:</strong> Lonestar MTN</p>
            <p><strong>Number:</strong> 0889 183 557</p>
            <p><strong>Name:</strong> Akin Sokpah</p>
          </div>

          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.button}
          >
            Confirm Payment on WhatsApp
          </a>
        </div>

        {/* BANK */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🏦 Bank Transfer</h2>
          <p style={styles.text}>
            Ideal for business and large transactions.
          </p>

          <div style={styles.details}>
            <p><strong>Bank:</strong> United Bank for Africa (UBA)</p>
            <p><strong>Account Name:</strong> Akin Sokpah</p>
            <p><strong>Account Number:</strong> 53020710015394</p>
            <p><strong>Country:</strong> Liberia</p>
          </div>

          <a
            href="https://wa.me/231777789356"
            target="_blank"
            style={styles.button}
          >
            Send Transfer Proof
          </a>
        </div>
      </section>

      {/* NOTICE */}
      <section style={styles.notice}>
        <p>
          ⚠️ Always confirm payments via WhatsApp to activate your service.
        </p>
      </section>
    </main>
  );
}

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
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#111",
    color: "#fff",
    padding: "32px",
    borderRadius: "26px",
    boxShadow: "0 22px 45px rgba(0,0,0,.25)",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "900",
    marginBottom: "14px",
    color: "#FFD700",
  },
  text: {
    marginBottom: "16px",
    lineHeight: "1.6",
  },
  details: {
    marginBottom: "24px",
    lineHeight: "1.8",
  },
  button: {
    display: "inline-block",
    width: "100%",
    padding: "14px",
    borderRadius: "999px",
    background: "#FFD700",
    color: "#111",
    fontWeight: "900",
    textAlign: "center",
    textDecoration: "none",
  },
  notice: {
    marginTop: "50px",
    textAlign: "center",
    fontWeight: "700",
    color: "#111",
  },
};
