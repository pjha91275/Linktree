import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Geist fonts 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});


export const metadata = {
  title: "Linktree - Your favorite link sharing site",
  description: "We brought a revolution in link sharing",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}
          ${geistMono.variable}
          ${inter.variable}
           antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
