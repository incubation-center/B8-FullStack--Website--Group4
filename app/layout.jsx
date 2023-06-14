"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { usePathname } from "next/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proadvisor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const router = usePathname();
  console.log("router", router);
  const pathToHideNav = ["/account", "/account/forgotpassword"];

  return (
    <html lang="en" className="box-border">
      <body className="flex flex-col min-h-screen">
        {(router === "/" ||
          router === "/promotions" ||
          router === "/landingPage") && <Header className="" />}
        <main className="flex-1">{children}</main>
        {(router === "/" ||
          router === "/promotions" ||
          router === "/landingPage") && <Footer className="" />}
      </body>
    </html>
  );
}
