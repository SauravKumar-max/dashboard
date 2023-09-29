import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Ajargh Kreation Assignment ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F9F9F9]">{children}</body>
    </html>
  );
}
