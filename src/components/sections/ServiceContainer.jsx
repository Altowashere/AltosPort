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
        <div className="" />
        <div className="" />
      </div>

      <div
        className=""
        style={{
          backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
              `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="">
        <FadeIn delay={0}>
          <div className="">
            <div className="">
              <Wrench className=""/>
              <span className="">Temp value</span>
            </div>
            <h2 className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              quam nulla voluptatem. Cum, temporibus fuga natus recusandae
              incidunt perspiciatis fugit amet! Tempora recusandae itaque soluta
              enim. Aliquam nihil totam ut!
            </h2>
          </div>
        </FadeIn>

        <div className="">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = Icons[services.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="">
                  <div className="">
                    <div className="">
                      <IconComponent className="" />
                    </div>
                  </div>

                  <div className="">
                    <h3 className="">{service.title}</h3>
                    <p className="">{service.description}</p>
                  </div>

                  <div className="" />
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="">
          {services.slice(2).map((service, incex) => {
            const IconComponent = Icons[services.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="">
                  <div className="">
                    <div className="">
                      <IconComponent className="" />
                    </div>
                  </div>

                  <div>
                    <h3 className="">{service.title}</h3>
                    <p className="">{service.description}</p>
                  </div>

                  <div className="" />
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
