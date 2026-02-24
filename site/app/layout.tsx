import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gloria Aeterna Recruiting — Your Empire Needs You",
  description:
    "Official recruiting portal for Macedonian Phalanxes and Roman Legions. Competitive denarii packages. Generous land grants. Apply today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="la">
      <body>
        <Navbar />
        <div className="ticker-wrap">
          <div className="ticker">
            <span>&#9876; URGENT: 3,000 sarissa operator positions remaining</span>
            <span>&#9876; NEW: Caesar&apos;s Gallic Campaign now hiring — competitive denarii packages</span>
            <span>&#9876; ALERT: Persian Empire designated &quot;at-will conquest zone&quot; by Senate decree</span>
            <span>&#9876; REMINDER: Loyalty oaths due by the Ides of March</span>
            <span>&#9876; URGENT: 3,000 sarissa operator positions remaining</span>
            <span>&#9876; NEW: Caesar&apos;s Gallic Campaign now hiring — competitive denarii packages</span>
            <span>&#9876; ALERT: Persian Empire designated &quot;at-will conquest zone&quot; by Senate decree</span>
            <span>&#9876; REMINDER: Loyalty oaths due by the Ides of March</span>
          </div>
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
