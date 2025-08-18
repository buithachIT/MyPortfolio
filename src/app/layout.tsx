import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";
import Navbar from '@/components/Navbar';
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from '@vercel/analytics/next';
import ProgressBarProvider from '@/contexts/ProgressBarProvider';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Portfolio - Bùi Công Thạch",
  description: "Portfolio cá nhân - FE Developer, UI/UX Enthusiast",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased bg-white text-black dark:bg-darkbg dark:text-darktext`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            <ProgressBarProvider>{children}</ProgressBarProvider>

            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
