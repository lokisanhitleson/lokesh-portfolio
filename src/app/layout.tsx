import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lokesh T - Lead Full Stack Developer",
  description: "Professional portfolio showcasing 11+ years of full-stack development expertise in healthcare, fintech, and Web3 technologies.",
  keywords: "Full Stack Developer, React Native, Node.js, Healthcare, FinTech, Web3",
  openGraph: {
    title: "Lokesh T - Lead Full Stack Developer",
    description: "Experienced full-stack developer specializing in healthcare and fintech solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#05121c" />
      </head>
      <body className="bg-dark text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}