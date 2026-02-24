"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./components/navbar/navbar.css";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpwardRounded } from "@mui/icons-material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toggleOverlay = () => {
    const menuLateral = document.querySelector(".menuLateral");
    const menuBurguerButton = document.querySelector(".menuBurguerButton");
    if (menuLateral?.classList.contains("active")) {
      menuLateral.classList.remove("active");
      menuBurguerButton?.classList.remove("active");
    }
  };

  // Track whether the scroll arrow is needed.
  const [showScroll, setShowScroll] = useState(false);
  // Check the scroll state, re-memoize when scroll state changes.
  const checkScrollTop = useCallback(() => {
    const headerHeight = 350;

    if (
      !showScroll &&
      window.pageYOffset > headerHeight && window.innerWidth < 1024
    ) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= headerHeight) {
      setShowScroll(false);
    }
  }, [showScroll]);
  // Add/remove the event listener when the component is unmounted or the scroll state has changed.
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <header>
            <Navbar />
          </header>
          <main
            className="w-full  flex justify-center  background_layout"
            onClick={toggleOverlay}
          >
            <div className="scrollTop">
              <button
                onClick={scrollTop}
                style={{
                  display: showScroll ? "flex" : "none",
                  position: "fixed",
                  bottom: "4rem",
                  right: "1rem",
                  zIndex: 1000,
                }}
              >
                <ArrowUpwardRounded className="text-white bg-(--marrom-escuro) rounded-full hover:cursor-pointer hover:bg-(--verde-apagado) hover:text-(--marrom-escuro) "  fontSize="large"/>
              </button>
            </div>
            <div className="lg:w-2/3 inside_layout">{children}</div>
          </main>
          <footer className="bottom-0 left-0 w-full" onClick={toggleOverlay}>
            <Footer />
          </footer>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
