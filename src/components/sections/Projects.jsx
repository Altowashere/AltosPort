import React, { useState, useRef } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Sparkles,
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
  const scrollContainRef = useRef(null);

  const filteredProjects =
    activeCategory == "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Reset carousel when Category changes
  const HandleCategoryChange = (category) => {
    SetActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainRef.current) {
      scrollContainRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainRef.current) {
      const container = scrollContainRef.current;
        const cardwidth = container.offsetWidth / 3;
        container.scrollTo({
            left: cardwidth * index,
            behavior: 'smooth'
        })
    }
  };
  return <div>Projects</div>;
};

export default Projects;
