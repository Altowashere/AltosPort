import React, { useState } from "react";
import { Download, Code2, Cloud } from "lucide-react";
import {
  SiReact,
  SiPython,
  SiLuau,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { Personal_info, About_STATS } from "../../utils/constants";
import FadeIn from "../animations/fadein";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
const About = () => {
  //skills
  const skills = [
    { name: "React.js", icon: SiReact, color: "#000000" }, //prob will get claude to find me a better color to fit with bg.
    { name: "Python", icon: SiPython, color: "#000000" },
    { name: "Luau", icon: SiLuau, color: "#000000" },
    { name: "C++", icon: SiCplusplus, color: "#000000" },
    { name: "JavaScript", icon: SiJavascript, color: "#000000" },
    { name: "Html", icon: SiHtml5, color: "#000000" },
    { name: "TailWindCss", icon: SiTailwindcss, color: "#000000" },
  ];
  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-y-8">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#C9A84C]/30 bg-[#C9A84C]/10 rounded-full w-fit">
                  <Code2 className="w-6 h-7 text-[#C9A84C]" />
                  <span className="text-medium text-[#C9A84C] font-medium">
                    About Me
                  </span>
                  <Cloud className="w-6 h-6 text-[#C9A84C] fill-white" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Crafting Code,{" "}
                  <span className="text-[#C9A84C]">Building Ideas</span>
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {Personal_info.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base text-white/70 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8">
                {About_STATS.map((stat, index) => (
                  <div key={index} className="relative pl-5">
                    <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-[#C9A84C] via-[#C9A84C]/50 to-[#C9A84C]/20 rounded-full" />
                    <div className="text-3xl font-normal text-white mb-2 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/60 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <button
                onClick={() => window.open(Personal_info.resume, "_blank")}
                className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#d4b05a] hover:scale-102 text-black rounded-full px-8 py-4 text-base font-mono transition-all duration-300 w-fit"
              >
                <Download className="w-4 h-4" />
                Temporary
              </button>
            </FadeIn>
          </div>
          {/* Right Column -info grid  */}
          {/* Right Column -info grid  */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-[#C9A84C]/10 to-[#C9A84C]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#C9A84C]/10 rounded-xl">
                      <Code2 className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        Expertise
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        Chat gpt will fill this out later 😛
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-[#C9A84C]/10 to-[#C9A84C]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <div className="p-3 bg-[#C9A84C]/10 rounded-xl w-fit mb-4">
                    <Cloud className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Clean Code
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Chat gpt will fill this out later 😛
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-[#C9A84C]/10 to-[#C9A84C]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <div className="p-3 bg-[#C9A84C]/10 rounded-xl w-fit mb-4">
                    <Download className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Performance
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Chat gpt will fill this out later 😛
                  </p>
                </div>
              </div>

              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-[#C9A84C]/10 to-[#C9A84C]/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#C9A84C]/60 mb-1">
                        N/A
                      </div>
                      <div className="text-xs text-white/60">
                        Temporary Value
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#C9A84C]/60 mb-1">
                        N/A
                      </div>
                      <div className="text-xs text-white/60">
                        Temporary Value
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#C9A84C]/60 mb-1">
                        N/A
                      </div>
                      <div className="text-xs text-white/60">
                        Temporary Value
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
