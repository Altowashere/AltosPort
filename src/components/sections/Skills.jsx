import React from "react";
import skills from "../../data/skills";
import FadeIn from "../animations/fadein";
import * as Icons from "lucide-react";
import * as Si from "react-icons/si";

const Skills = () => {
  const skillsCategory = {
    //Categorize Skills
    //   "Frontend Development": [ //This is one way to sort the skills so if i learn a lot i can fall back to this
    //     skills.find((s) => s.name === "React.js"),
    //     skills.find((s) => s.name === "TailWind CSS"),
    //     skills.find((s) => s.name === "Html"),
    //     skills.find((s) => s.name === "React.js"),
    //     skills.find((s) => s.name === "JavaScript"),
    //   ].filter(Boolean),
    //   "Backend Development": [
    //     skills.find((s) => s.name === "Python"),
    //     skills.find((s) => s.name === "Java"),
    //     skills.find((s) => s.name === "C++"),
    //     skills.find((s) => s.name === "Luau"),
    //   ].filter(Boolean),
    //   "Tools & Others": [
    //     skills.find((s) => s.name === "Git"),
    //     skills.find((s) => s.name === "Responsive Design"),
    //     skills.find((s) => s.name === "Figma"),
    //     skills.find((s) => s.name === "Vite"),
    //   ].filter(Boolean),
    "Languages & Tools": [
      skills.find((s) => s.name === "Python"), // Expert
      skills.find((s) => s.name === "Java"), // Expert
      skills.find((s) => s.name === "JavaScript"), // Advanced
      skills.find((s) => s.name === "HTML"), // Advanced
      skills.find((s) => s.name === "C++"), // Intermediate
      skills.find((s) => s.name === "React.js"), // Intermediate
      skills.find((s) => s.name === "Luau"), // Beginner
      skills.find((s) => s.name === "Tailwind CSS"), // Beginner
    ].filter(Boolean),
  };

  // Get proficiency percentage
  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 90,
      Advanced: 75,
      Intermediate: 50,
      Beginner: 50,
    };
    return levels[level] || 50;
  };

  // Get Level Color
  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8dff69] bg-[#8dff69]/20 border-[#8dff69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
      Beginner: "text-orange-400 bg-orange-500/20 border-orange-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full mb-6">
              <Icons.Cloud className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-[#C9A84C] font-medium">
                My Skills
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Languages
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              facilis id excepturi, numquam suscipit commodi et aspernatur ea
              incidunt magni odit corrupti corporis rerum in quasi quia
              voluptates nisi aut?
            </p>
          </div>
        </FadeIn>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {Object.entries(skillsCategory).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    {/* fixed: "border-whote/10" → "border-white/10" */}
                    <div className="w-1 h-8 bg-linear-to-b from-[#C9A84C]/30 to-[#C9A84C]/10 rounded-full"></div>
                    {/* fixed: "Text-xl" → "text-xl" */}
                    <h3 className="text-xl font-medium text-white">{category}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => {
                      // fixed: now pulls from react-icons/si instead of lucide
                      const IconComponent = Si[`Si${skill.icon}`] || Icons.Code2;
                      const proficiency = getProficiencyLevel(skill.level);

                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-4 h-4 text-[#C9A84C]" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-white/50">
                                  {skill.experience}
                                </div>
                              </div>
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          {/* fixed: "relative-h-1.5" → "relative h-1.5" */}
                          <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                            {/* fixed: "ronded-full" → "rounded-full" */}
                            <div
                              className="absolute top-0 left-0 h-full bg-linear-to-r from-[#C9A84C]/10 to-[#C9A84C]/80 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#C9A84C]/0 to-[#C9A84C]/5 group-hover:from-[#C9A84C]/5 group-hover:to-[#C9A84C]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;