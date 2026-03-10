import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";

const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[180vh]">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
