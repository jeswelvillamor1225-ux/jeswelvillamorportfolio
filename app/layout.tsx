import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Alex Mercer — IT Portfolio",
  description: "Full-Stack Developer & Systems Architect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grid-bg min-h-screen">
        <Cursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
