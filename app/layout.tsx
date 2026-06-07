import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import TerminalCLI from "@/components/TerminalCLI";

export const metadata: Metadata = {
  title: "Jeswel Bacolod Villamor — IT Portfolio",
  description: "IT Support, Network Technician & Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grid-bg min-h-screen">
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <TerminalCLI />
      </body>
    </html>
  );
}
