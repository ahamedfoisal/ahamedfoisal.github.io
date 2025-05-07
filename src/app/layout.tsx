import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahamed Foisal - Portfolio",
  description: "Personal portfolio showcasing my work, experience, and skills",
  keywords: ["portfolio", "developer", "software engineer", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth bg-light text-dark dark:bg-dark dark:text-light ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
