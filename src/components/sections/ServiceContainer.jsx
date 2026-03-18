import React from "react";
import { services } from "../../data/services";
import * as Icons from "lucide-react";
import { Wrench } from "lucide-react";
import FadeIn from "../animations/fadein";

const ServiceContainer = () => {
  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px) 
              `, //this created the cool grid like background
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full mb-6">
              <Wrench className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-[#C9A84C] font-medium tracking-wider uppercase">
                What I offEr
              </span>
            </div>
            <h2 className="text-4xl lg:text-4xl font-normal text-white mb-4 max-w-2xl mx-auto">
              Building solutions that are fast, clean, and built to last.
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto ">
              Every project is built with performance, maintainability, and your
              users in mind.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6" >
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#C9A84C]/30 transition-all duration-300 h-full min-h-[280px] flex flex-col ">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-[#C9A84C]" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-b from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/5 group-hover:to-[#C9A84C]/5 rounded-3xl transition-all duration-300 pointer-events-none" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/20 border-[#C9A84C]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ">
                      <IconComponent className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#C9A84C] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-3 ">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-r from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/5 group-hover:to-[#C9A84C]/5 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceContainer;
