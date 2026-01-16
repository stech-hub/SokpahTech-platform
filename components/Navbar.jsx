"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Booking", href: "/booking" },
    { name: "Payments", href: "/payments" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          Akin<span>.</span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/231777789356"
            target="_blank"
            className="hire-btn"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
