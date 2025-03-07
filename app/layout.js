import "../styles/output.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Neon Calculator",
  description: "a responsive neon calculator built with next.js and tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {/* header is rendered outside main */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
