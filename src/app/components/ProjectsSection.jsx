"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "Terminal Management System",
    description: "A Terminal Management System to aid banks with terminal management (not mobile responsive)",
    image: "/images/projects/tms.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "https://terminalms.netlify.app/",
  },
  {
    id: 2,
    title: "Card Management System",
    description: "A Card Management System to aid banks with card management (not mobile responsive)",
    image: "/images/projects/cms.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "https://cmssnairobi.netlify.app/",
  },

  {
    id: 6,
    title: "Divvly Car hosting application",
    description: "A Car Sharing Application NextJS",
    image: "/images/projects/Car.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kelvinbe/Car-host",
    previewUrl: "https://drive.google.com/file/d/1U4v7tlf84ZuQCbELv8IRG5CoORMDmhe5/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Crypto Dashboards",
    description: "A Crypto Dashboard Application NextJS",
    image: "/images/projects/crypto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kelvinbe/Crypto-Dashboard",
    previewUrl: "https://crypo-dash.vercel.app/",
  },
  {
    id: 4,
    title: "Rick and Morty Peeps",
    description: "A NextJS Web Application using the Rick and Morty API",
    image: "/images/projects/Rick.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kelvinbe/rick-morty",
    previewUrl: "https://rick-morty-seven-pi.vercel.app/",
  },
  

    {
    id: 8,
    title: "Swarm Mobile Application",
    description: "React Native Mobile Application For Realtors",
    image: "/images/projects/play.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kelvinbe/Swarm",
    previewUrl: "https://appho.st/d/NU28lSk0",
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
