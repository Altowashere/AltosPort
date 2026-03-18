import React from "react";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/sections/LandingPage";
import About from "./components/sections/about";
import WipBanner from "./components/ui/WipBanner";
import { useEffect } from "react";
import Skills from "../src/components/sections/Skills";
import Projects from "./components/sections/Projects";
import ServiceContainer from "./components/sections/ServiceContainer";
import ContactService from "./components/sections/ContactService";
import Footer from "./components/layout/Footer"
const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <WipBanner />
      <Navbar />
      <main>
        <LandingPage />
        <About />
        <Skills />
        <Projects />
        <ServiceContainer />
        <ContactService />
      </main>
      <Footer />
    </div>
  );
};

export default App;
