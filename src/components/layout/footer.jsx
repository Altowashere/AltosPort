import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Mail,
  MapPin,
  Heart,
  Code2,
} from "lucide-react";
import { SiDiscord, SiSpacex } from "react-icons/si";
import { Personal_info, Social_links, NAV_LINKS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/fadein";

const Footer = () => {
  const SocialIcons = {
    github: Github,
    twitter: Twitter,
    discord: SiDiscord,
  };
  const discordLinkHolder = Social_links.discord;
  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C9A84C]/10 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C9A84C]/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <FadeIn delay={0}>
            <div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-[#C9A84C]/80 via-[#C9A84C] to-[#C9A84C]/80 bg-clip-text text-transparent mb-4">
                {Personal_info.name.split("")[0]}
              </h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                {Personal_info.tagline}
              </p>

              <div className="space-y-3">
                <a
                  href={discordLinkHolder}
                  target="_blank" //Creates a new tab.
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:-[#C9A84C]/30 transition-all duration-300 "
                >
                  <div className="p-2 bg-[#C9A84C]/10 rounded-lg">
                    <Mail className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {Personal_info.email}
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:-[#C9A84C]/30 transition-all duration-300">
                  <div className="p-2 bg-[#C9A84C]/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <span className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                    Based {Personal_info.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-white/60 hover:text-[#C9A84C] transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-[#C9A84C] group-hover:w-2 transition-all duration-300" />
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Socials</h4>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Get in touch with me through my socials.
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(Social_links).map(([platform, url]) => {
                  const Icon = SocialIcons[platform];
                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#C9A84C]/50 hover:scale-110 transition-all duration-300"
                      aria-label={`Connect on ${platform}`}
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-[#C9A84C] transition-colors duration-300" />
                      <div className="absolute inset-0 bg-linear-to-br from-[#C9A84C]/0 to-[#C9A84C]/0 group-hover:from-[#C9A84C]/10 group-hover:to-[#C9A84C]/10 rounded-xl transition-all duration-300 pointer-events-none" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} Alto. All rights reserved
              </p>
              <p className="flex items-center gap-2 text-white/50 text-sm">
                Built with{" "}
                <Code2 className="w-4 h-4 text-[#C9A84C] fill-[#C9A84C] animate-pulse" />{" "}
                using React & TailWind CSS
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
