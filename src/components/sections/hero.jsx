import { useState } from "react";
import { ChevronDown, Section, Star, CodeXml } from "lucide-react";
import { SiPython, SiGit, SiLuau, SiCplusplus } from "react-icons/si";
import { Personal_info, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/fadein";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      <RadialGradientBackground varient="hero" />

      {/*Content container The cool thing witht he star*/}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/*Left column - content has the button and title and everything kinda*/}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-[#C9A84C]/10 via-[#C9A84C]/15 to-[#C9A84C]/20 border border-[#C9A84C]/20 rounded-full">
                <CodeXml className="w-4 h-4 scale-125 text-[#C9A84C] fill-[#C9A84C] hover:scale-135 transition-transform duration-300" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {Personal_info.title} | Based {Personal_info.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight max-w-[500px]">
                Cool big word for testing purposes
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8 ">
                Another cool big word for testing purposes Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque dolorum similique
                pariatur perferendis, ducimus minus distinctio magni repellendus
                corrupti ratione laborum optio odio aperiam quas nemo numquam
                natus sapiente maiores.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17.75px] px-[26px] py-[13px] text-base font-medium border border-white hover:scale-110 transition-transform duration-300 ">
                  Contact Me
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-full ">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r  border-white/50 pr-10 last:border-r-0"
                  >
                    <div className="text-2xl font-large text-[#C9A84C] mb-[8px] font-mono ">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug ">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column my cool tuff pic */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group ">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-[#f0e68c]/20 via-[#f0e68c]/10 to-[#f0e68c] animate-spin-slow rounded-2xl "></div>
                </div>

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                  <img
                    src="/Tuff git pfp.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tech logos? I think bro means programming langagues logo */}
                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                      <a
                        href="https://python.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-115 transition-transform duration-300">
                          <SiPython className="w-full h-full text-white hover:text-[#3776AB] transition-colors duration-300" />
                        </div>
                      </a>
                      <a
                        href="https://luau.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-115 transition-transform duration-300">
                          <SiLuau className="w-full h-full text-white hover:text-[#00A2FF] transition-colors duration-300" />
                        </div>
                      </a>
                      <a
                        href="https://git-scm.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-115 transition-transform duration-300">
                          <SiGit className="w-full h-full text-white hover:text-[#F05032] transition-colors duration-300" />
                        </div>
                      </a>
                      <a
                        href="https://cplusplus.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="w-6 h-6 flex items-center justify-center hover:scale-115 transition-transform duration-300">
                          <SiCplusplus className="w-full h-full text-white hover:text-[#00599C] transition-colors duration-300" />
                        </div>
                      </a>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      {/*  Scroll indicator (Green arrow thing pointing down)  */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </button>
    </section>
  );
};

export default Hero;
