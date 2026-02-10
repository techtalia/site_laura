import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laura Leal Psi",
  description: "Psicóloga Clínica | CRP: 06/221731",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
        <header>
          <Navbar />
        </header>
        <main className="w-full  flex justify-center  background_layout">
          <div className="w-2/3 inside_layout">
            {children}
          </div>
        </main> 
        <footer className="bottom-0 left-0 w-full">
          <Footer />
        </footer>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
