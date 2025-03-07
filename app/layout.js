import React from 'react'; 
import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Neon Calculator",
  description: "a responsive neon calculator built with next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
