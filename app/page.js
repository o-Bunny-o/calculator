import React from "react";
import Calculator from "../components/Calculator";

// define and export the home page component
export default function Home() {
  return (
    // main serves as the container for the primary content
    <main className="flex items-center justify-center">
      <Calculator />
    </main>
  );
}
