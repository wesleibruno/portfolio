import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/animated-background";
import { Footer } from "@/components/footer";
import { CursorTrail } from "@/components/cursor-trail";
import { ScrollProgress } from "@/components/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weslei Bruno | Portfólio",
  description: "Portfólio moderno construído com Next.js 16, Tailwind e shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}>
        <ThemeProvider>
          <ScrollProgress />
          <AnimatedBackground />
          <CursorTrail />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
