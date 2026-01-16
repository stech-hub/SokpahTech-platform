import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* LOGO */}
        <a href="/" style={styles.logo}>
          Akin<span style={styles.logoAccent}>S.</span>
        </a>

        {/* DESKTOP MENU */}
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/projects" style={styles.link}>Projects</a>
          <a href="/products" style={styles.link}>Products</a>
          <a href="/dashboard" style={styles.link}>Dashboard</a>
          <a href="/support" style={styles.link}>Support</a>
          <a href="/contact" style={styles.cta}>Hire Me</a>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} style={styles.menuBtn}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={styles.mobileMenu}>
          <a href="/" style={styles.mobileLink}>Home</a>
          <a href="/about" style={styles.mobileLink}>About</a>
          <a href="/projects" style={styles.mobileLink}>Projects</a>
          <a href="/products" style={styles.mobileLink}>Products</a>
          <a href="/dashboard" style={styles.mobileLink}>Dashboard</a>
          <a href="/support" style={styles.mobileLink}>Support</a>
          <a href="/contact" style={styles.mobileCta}>Hire Me</a>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    background: "linear-gradient(90deg, #FFD700, #FF69B4, #FACC15)",
    padding: "14px 0",
    position: "sticky",
    top: 0,
    zIndex: 999
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontSize: "1.6rem",
    fontWeight: "900",
    textDecoration: "none",
    color: "#111"
  },
  logoAccent: {
    color: "#fff"
  },
  nav: {
    display: "flex",
    gap: "18px"
  },
  link: {
    textDecoration: "none",
    color: "#111",
    fontWeight: "600"
  },
  cta: {
    background: "#111",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "700"
  },
  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer"
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    padding: "20px",
    gap: "14px"
  },
  mobileLink: {
    textDecoration: "none",
    color: "#111",
    fontWeight: "600"
  },
  mobileCta: {
    background: "#111",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "700"
  }
};
