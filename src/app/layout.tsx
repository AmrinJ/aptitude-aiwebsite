import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/core/Providers";
import { Navbar } from "@/components/core/Navbar";

import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AptitudeAI | Quantitative & Logical Mastery",
  description: "Next-gen aptitude learning platform with Vedic math simulations, AI classroom teachers, and interactive visual solvers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-slate-900 transition-colors`}>
        <AuthProvider>
          <Providers>
            <Navbar />
            <main className="flex flex-col min-h-[calc(100vh-4rem)]">
              {children}
            </main>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
