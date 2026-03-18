import React, { useState, useRef } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Sparkles,
  Target,
  Globe,
  Palette,
  Cloud,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/projectcard";
import FadeIn from "../animations/fadein";

const Projects = () => {
  const [activeCategory, SetActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  // The card being slid in during animation — null when idle.
  // We render 4 cards total during a transition (3 visible + 1 entering/exiting),
  // which makes it look like only one individual card moves at a time.
  const [extraCard, setExtraCard] = useState(null);

  // Which side the extra card is added to.
  // 'right' = next slide (extra card enters from right)
  // 'left'  = prev slide (extra card enters from left)
  const [extraSide, setExtraSide] = useState("right");

  // The current horizontal offset of the 4-card row in pixels.
  // 0 = showing the first 3 cards, -step = showing the last 3 cards.
  const [slideX, setSlideX] = useState(0);

  // When true, CSS transition is active so the slide animates.
  // When false, we can reposition the row instantly without the user seeing it.
  const [sliding, setSliding] = useState(false);

  // Ref for the overflow-hidden wrapper — used to measure width for step distance.
  const containerRef = useRef(null);

  // Prevents clicks while a slide animation is in progress.
  const isAnimating = useRef(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Reset carousel when Category changes
  const HandleCategoryChange = (category) => {
    SetActiveCategory(category);
    setCurrentIndex(0);
    // Instantly reset slide position with no animation when switching categories
    setExtraCard(null);
    setSliding(false);
    setSlideX(0);
  };

  // Only loop when there are more than 3 projects
  const shouldLoop = filteredProjects.length > 3;

  // Returns exactly 3 real projects based on currentIndex using modulo.
  // No cloning — always fresh real data so stale fields can never bleed through.
  const getVisibleProjects = () => {
    const len = filteredProjects.length;
    if (len === 0) return [];
    if (len <= 3) return filteredProjects;
    return [0, 1, 2].map(
      (offset) => filteredProjects[(currentIndex + offset) % len],
    );
  };

  // During animation we render 4 cards so only one card appears to move.
  // extra card is prepended (left) or appended (right) to the 3 visible ones.
  // When idle, just the normal 3.
  const renderProjects = extraCard
    ? extraSide === "right"
      ? [...getVisibleProjects(), extraCard] // [A, B, C, entering]
      : [extraCard, ...getVisibleProjects()] // [entering, A, B, C]
    : getVisibleProjects();

  // One slide step = one card width + one gap.
  // With 3 cards in a container of width W and gap-6 (24px each gap):
  // cardWidth = (W - 2*24) / 3, step = cardWidth + 24 = (W + 24) / 3
  const getStep = () =>
    containerRef.current ? (containerRef.current.offsetWidth + 24) / 3 : 400;

  const animate = (indexUpdater, dir) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const len = filteredProjects.length;
    const step = getStep();

    if (dir === 1) {
      // NEXT: add the incoming card to the right → [A, B, C, D]
      // Row starts at slideX=0 showing [A,B,C], then slides left to show [B,C,D].
      const newCard = filteredProjects[(currentIndex + 3) % len];
      setExtraCard(newCard);
      setExtraSide("right");
      setSlideX(0);
      setSliding(false);

      // Double rAF ensures the 4-card row renders at x=0 before we start sliding.
      // Without this React may batch the updates and skip the starting position.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSliding(true);
          setSlideX(-step); // slide left by one card — D enters, A exits
        });
      });
    } else {
      // PREV: add the incoming card to the left → [Z, A, B, C]
      // Row starts at slideX=-step (so [A,B,C] are visible, Z is off-screen left),
      // then slides right to 0 so [Z,A,B] are visible — Z enters, C exits.
      const newCard = filteredProjects[(currentIndex - 1 + len) % len];
      setExtraCard(newCard);
      setExtraSide("left");
      setSliding(false);
      setSlideX(-step); // instant placement — Z is off-screen, [A,B,C] visible

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSliding(true);
          setSlideX(0); // slide right — Z enters from left, C exits right
        });
      });
    }

    // After the 300ms slide finishes: update the index, clean up the extra card.
    // getVisibleProjects() with the new index returns exactly the 3 cards
    // that are now visible, so the switch from 4 cards back to 3 is seamless.
    setTimeout(() => {
      indexUpdater();
      setExtraCard(null);
      setSliding(false);
      setSlideX(0);
      isAnimating.current = false;
    }, 300); // must match the CSS transition duration below
  };

  const nextSlide = () => {
    animate(
      () => setCurrentIndex((prev) => (prev + 1) % filteredProjects.length),
      1,
    );
  };

  const prevSlide = () => {
    animate(
      () =>
        setCurrentIndex(
          (prev) =>
            (prev - 1 + filteredProjects.length) % filteredProjects.length,
        ),
      -1,
    );
  };

  // Jump directly to a specific index via dots — instant, no slide animation
  const scrollToIndex = (index) => {
    if (isAnimating.current) return;
    setCurrentIndex(index);
    setExtraCard(null);
    setSlideX(0);
  };

  // Category icon Mapping
  const categoryIcons = {
    All: Target,
    Frontend: Palette,
    Backend: Cloud,
    "Full Stack": Zap,
  };

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-[#C9A84C]/20 opacity-20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full mb-6 hover:scale-102 transition-all duration-300">
              <Briefcase className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-[#C9A84C] font-medium ">
                My work
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Here's a collection of things I've built — from quick experiments
              to projects I'm genuinely proud of. Each one taught me something
              new.
            </p>
          </div>
        </FadeIn>

        {/* Category filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => HandleCategoryChange(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-[background-color] duration-300 ${
                    activeCategory === category
                      ? "border hover:border-white/10 bg-[#C9A84C]/10 opacity-100"
                      : "bg-white/5  group-hover:bg-white/10"
                  }`}
                />
                <div className="relative flex items-center gap-2">
                  {React.createElement(categoryIcons[category], {
                    className: "w-4 h-4",
                  })}
                  <span className="text-sm">{category}</span>
                </div>

                {activeCategory === category && (
                  <div className="absolute inset-0 rounded-full bg-[#C9A84C] blur-xl opacity-50 -z-10" />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Carousel */}
        <FadeIn delay={200}>
          <div className="relative mx-10 lg:mx-14">
            {/* overflow-hidden clips the 4-card row so only 3 are ever visible.
                ref measures the container width to compute the slide step distance. */}
            <div className="overflow-hidden" ref={containerRef}>
              {/* This is the row that physically moves during animation.
                  sliding toggles the CSS transition on/off so we can instant-reset
                  the starting position before each animation without a visible jump. */}
              <div
                style={{
                  transform: `translateX(${slideX}px)`,
                  transition: sliding ? "transform 300ms ease" : "none",
                }}
              >
                <div
                  className={`flex gap-6 pb-4 ${!shouldLoop ? "justify-center" : ""}`}
                >
                  {/* Use project.id as key — all 4 cards during animation are real
                      unique projects so ids are always distinct, no stale data. */}
                  {renderProjects.map((project) => (
                    <div
                      key={project.id}
                      className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
                    >
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Nav Arrows — only shown when looping is active */}
            {shouldLoop && (
              <>
                <button
                  onClick={prevSlide}
                  className="flex absolute -left-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
                  aria-label="Previous Projects"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  className="flex absolute -right-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
                  aria-label="Next Projects"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Nav Dots — one dot per project, highlights the current start index */}
            {shouldLoop && (
              <div className="flex justify-center gap-2 mt-6">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-[#C9A84C] w-6 h-2"
                        : "bg-white/30 w-2 h-2 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
