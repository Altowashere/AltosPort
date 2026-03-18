import React from "react";
import { SiGithub, SiDiscord, SiX } from "react-icons/si";
import { Mail } from "lucide-react";
import FadeIn from "../animations/fadein";
import { Social_links, Personal_info } from "../../utils/constants";

const contacts = [
  {
    id: 1,
    label: "GitHub",
    handle: "Altowashere",
    description: "View my GitHub profile →",
    icon: SiGithub,
    href: Social_links.github,
  },
  {
    id: 2,
    label: "Discord",
    handle: "Altowashere",
    description: "DM me on Discord →",
    icon: SiDiscord,
    href: Social_links.discord,
  },
  {
    id: 3,
    label: "Twitter / X",
    handle: "Idk",
    description: "Follow my updates",
    icon: SiX,
    href: Social_links.twitter,
  },
  //   {
  //     id: 4,
  //     label: "Email",
  //     handle: Personal_info.email,
  //     description: "For professional inquiries",
  //     icon: Mail,
  //     href: Social_links.gmail,
  //   },
];

const ContactService = () => {
  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full mb-6">
              <Mail className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-[#C9A84C] font-medium tracking-wider uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl font-normal text-white mb-4">Contact Me</h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              These are the best ways to get in touch — click any card below to reach me
              directly.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <FadeIn key={contact.id} delay={100 + index * 100}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // add h-52 to the <a> className
                  className="group relative w-72 h-52 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#C9A84C]/30 transition-all duration-300 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg group-hover:text-[#C9A84C] transition-colors duration-300">
                      {contact.handle}
                    </p>
                    <p className="text-white/50 text-sm mt-1">
                      {contact.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/5 group-hover:to-[#C9A84C]/5 rounded-3xl transition-all duration-300 pointer-events-none" />
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactService;