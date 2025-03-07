import '../styles/output.css';
import Calculator from "../components/Calculator";
import Header from "../components/Header";
import Footer from "../components/Footer";

// define and export the home page component
export default function Home() {
  return (
    // main serves as the container for the primary content
    <main className="min-h-screen flex items-center justify-center">
      <Calculator />
    </main>
  );
}
