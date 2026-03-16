import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import WipBanner from "./components/ui/WipBanner";


const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[180vh]">
      {/* <WipBanner />  */}
      <Navbar />
      <main>
        <Hero />
        <About/>
      </main>
    </div>
  );
};

export default App;
