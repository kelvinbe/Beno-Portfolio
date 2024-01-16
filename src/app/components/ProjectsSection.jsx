"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Swarm Mobile Application",
    description: "React Native Mobile Application For Realtors",
    image: "/images/projects/play.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kelvinbe/Swarm",
    previewUrl: "https://play.google.com/store/apps/details?id=com.kelvinkb.swarm&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "Gaming ZOne",
    description: "React Project for displaying games",
    image: "/images/projects/Uliu.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kelvinbe/GamingZone",
    previewUrl: "https://gamezoneke.netlify.app/",
  },
  {
    id: 3,
    title: "RoseFarm E-commerce Application",
    description: "React Ecommerce Web Application to sell farm produce",
    image: "/images/projects/ecom.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kelvinbe/RoseFarmFront",
    previewUrl: "https://rosefarm.netlify.app/",
  },
  {
    id: 4,
    title: "Wedding Web Application",
    description: "A wedding web app to raise funds",
    image: "/images/projects/wedd.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kelvinbe/vicswedding",
    previewUrl: "https://vicweds.web.app/",
  },
  {
    id: 5,
    title: "Kula Fiti Food Delivery Application",
    description: "React Native Project",
    image: "/images/projects/mob.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kelvinbe/Eats",
    previewUrl: "https://play.google.com/store/apps/details?id=com.kelvinkb.blank",
  },
  {
    id: 6,
    title: "Jipange Mobile Application",
    description: "React Native Pomodoro Application",
    image: "/images/projects/pomo.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kelvinbe/react-native-pomodoro",
    previewUrl: "https://play.google.com/store/apps/details?id=my.jipange.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
