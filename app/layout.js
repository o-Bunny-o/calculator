import React from 'react'; 
import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Orbitron } from "next/font/google";

// add font to app
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Neon Calculator",
  description: "a responsive neon calculator built with next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
