import React, { useState, useRef, useEffect } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/projectcard";
import FadeIn from "../animations/fadein";

const Projects = () => {
  const [activeCategory, SetActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  // Tracks whether a scroll animation is currently in progress.
  // Used to debounce button clicks so spamming can't break the loop logic.
  const isScrolling = useRef(false);

  // Number of cards to clone at each end of the carousel.
  // We prepend the last 3 cards and append the first 3 cards so that
  // when the user scrolls past either edge, there's always a real-looking
  // card to scroll into before we silently snap back to the real list.
  const CLONE_COUNT = 3;

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Only clone and loop when there are more than 3 projects.
  // With 3 or fewer, cloning would duplicate the same cards visibly on screen.
  const shouldLoop = filteredProjects.length > 3;
  const lastClones = shouldLoop ? filteredProjects.slice(-CLONE_COUNT) : [];
  const firstClones = shouldLoop ? filteredProjects.slice(0, CLONE_COUNT) : [];
  const loopProjects = shouldLoop
    ? [...lastClones, ...filteredProjects, ...firstClones]
    : filteredProjects;

  // Any time the active category changes, we silently reset the scroll position
  // to be past the prepended clones so real index 0 is the first visible card.
  // We use scrollLeft (instant, no animation) so the user never sees the jump.
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const firstCard = container.querySelector(".snap-start");
    const cardWidth = firstCard
      ? firstCard.offsetWidth + 24
      : container.offsetWidth / 3;
    // Only offset by CLONE_COUNT if we're actually using clones
    container.scrollLeft = shouldLoop ? cardWidth * CLONE_COUNT : 0;
    setCurrentIndex(0);
  }, [activeCategory]);

  // Reset carousel when Category changes
  const HandleCategoryChange = (category) => {
    SetActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".snap-start");
      const cardWidth = firstCard
        ? firstCard.offsetWidth + 24
        : container.offsetWidth / 3;
      // Only add the clone offset if looping is active
      container.scrollTo({
        left: cardWidth * (index + (shouldLoop ? CLONE_COUNT : 0)),
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const nextIndex = currentIndex + 1;
    // If a scroll is already in progress, ignore the click entirely
    if (isScrolling.current) return;
    isScrolling.current = true;
    setTimeout(() => (isScrolling.current = false), 350); // Unlock after animation finishes

    if (nextIndex > maxIndex) {
      // We're at the last real card. Smoothly scroll into the appended first-clone,
      // which looks identical to real index 0. Once the animation finishes (~350ms),
      // we silently jump scroll back to the actual real index 0 position.
      // The user sees a smooth scroll forward, then never sees the reset.
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".snap-start");
      const cardWidth = firstCard
        ? firstCard.offsetWidth + 24
        : container.offsetWidth / 3;

      container.scrollTo({
        left: cardWidth * (CLONE_COUNT + maxIndex + 1),
        behavior: "smooth",
      });

      setTimeout(() => {
        // Temporarily disable smooth scrolling so the silent reset is instant.
        // Without this the browser would animate the snap-back and expose the trick.
        container.style.scrollBehavior = "auto";
        container.scrollLeft = cardWidth * CLONE_COUNT;
        container.style.scrollBehavior = "";
        setCurrentIndex(0);
      }, 350); // 350ms matches the browser smooth scroll duration
    } else {
      scrollToIndex(nextIndex);
    }
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    const prevIndex = currentIndex - 1;
    if (isScrolling.current) return;
    isScrolling.current = true;
    setTimeout(() => (isScrolling.current = false), 350); // Unlock after animation finishes

    if (prevIndex < 0) {
      // We're at the first real card. Smoothly scroll into the prepended last-clone,
      // which looks identical to the real last card. After the animation we silently
      // jump to the actual real last card position so looping works both ways.
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector(".snap-start");
      const cardWidth = firstCard
        ? firstCard.offsetWidth + 24
        : container.offsetWidth / 3;

      container.scrollTo({
        left: cardWidth * (CLONE_COUNT - 1),
        behavior: "smooth",
      });

      setTimeout(() => {
        // Same instant-reset trick as nextSlide — disable smooth scroll briefly,
        // jump to real last position, then re-enable. User never sees the snap.
        container.style.scrollBehavior = "auto";
        container.scrollLeft = cardWidth * (maxIndex + CLONE_COUNT);
        container.style.scrollBehavior = "";
        setCurrentIndex(maxIndex);
      }, 350); // 350ms matches the browser smooth scroll duration
    } else {
      scrollToIndex(prevIndex);
    }
  };

  // Category icon Mapping
  const categoryIcons = {
    All: Target,
    Frontend: Globe,
    Backend: Palette,
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-sm text-[#C9A84C] font-medium">
                My work
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, beatae perspiciatis inventore, totam sunt distinctio
              maiores praesentium recusandae blanditiis saepe atque numquam
              repellendus quod, corrupti doloremque. Consequuntur culpa
              architecto eius.
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
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#C9A84C]/10 opacity-100"
                      : "bg-white/5 border border-white/10 group-hover:bg-white/10"
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
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              {/* Render loopProjects instead of filteredProjects.
                  loopProjects = [clones of last 3] + [real cards] + [clones of first 3]
                  The key uses both project.id and the loop index i because cloned cards
                  share the same id as their originals — using i makes each key unique. */}
              <div
                className={`flex gap-6 pb-4 ${!shouldLoop ? "justify-center" : ""}`}
              >
                {loopProjects.map((project, i) => (
                  <div
                    key={`${project.id}-${i}`}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            {/* Nav Arrows */}
            {filteredProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  // Removed disabled — buttons are never disabled since
                  // wrapping is now handled inside prevSlide/nextSlide
                  disabled={false}
                  className="flex absolute -left-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
                  aria-label="Previous Projects"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  // Removed disabled — buttons are never disabled since
                  // wrapping is now handled inside prevSlide/nextSlide
                  disabled={false}
                  className="flex absolute -right-5 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
                  aria-label="Next Projects"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
            {/* Nav Dots */}
            {filteredProjects.length > 3 && (
              // Fix: added flex layout so dots actually render visibly
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({
                  length: Math.max(0, filteredProjects.length - 2),
                }).map((_, index) => (
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
