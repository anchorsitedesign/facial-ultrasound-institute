import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dawn Naylor",
  description: "International Facial Ultrasound Educator & Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}