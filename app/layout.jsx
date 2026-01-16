import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Akin S. Sokpah | Founder • Developer • AI Innovator",
  description:
    "Premium technology solutions, apps, websites, dashboards, and AI systems built by Akin S. Sokpah from Liberia to the world.",
  keywords: [
    "Akin Sokpah",
    "Liberia developer",
    "African tech founder",
    "AI developer",
    "Web development",
    "Apps",
    "Dashboards",
    "Tech consulting"
  ],
  openGraph: {
    title: "Akin S. Sokpah | Official Platform",
    description:
      "Apps, websites, dashboards, AI systems, and consulting services.",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Akin S. Sokpah",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
