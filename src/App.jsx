import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import WipBanner from "./components/ui/WipBanner";
import { useEffect } from "react";
import Skills from "../src/components/sections/Skills";
import Projects from "./components/sections/Projects";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black pb-[180vh]">
      <WipBanner />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default App;
