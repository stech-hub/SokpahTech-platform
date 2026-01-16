import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Akin S. Sokpah | Software Developer & AI Innovator",
  description:
    "Premium websites, apps, AI solutions, dashboards, and digital products built by Akin S. Sokpah from Liberia.",
  keywords: [
    "Akin Sokpah",
    "Liberia Software Developer",
    "AI Developer Africa",
    "Web Development",
    "Mobile Apps",
    "Dashboards",
  ],
  openGraph: {
    title: "Akin S. Sokpah",
    description:
      "Building modern websites, apps, dashboards, and AI systems for Africa and the world.",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Akin S. Sokpah",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
