"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Work",
    id: "work",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Jr Developer at Orteo Payment Systems Limited - <span>2019 - 2020</span>
        </li>
        <li>
          Software Developer at The Silver Logic - <span>2020 - 2021</span>
        </li>
        <li>
          Freelance Developer Woked on various projects - <span>2021 - 2022</span>
        </li>
        <li>
         Frontend Software Developer at Niebex Software - <span>2022 - 2023</span>
        </li>
        <li>
         Freelance Software Developer - <span>2024 - now</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Andela Bootcamp - <span>2019</span>
        </li>
        <li>
          Bachelors Of Business and Information Technology - <span>St Pauls University Nairobi, 2016</span>
        </li>
        <li>
          Diploma in Information Technology - <span>St Pauls University Nairobi, 2015</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          NextJS - <span>Implementation from figma or any other design tool</span>
        </li>
        <li>
          Typescript - <span>Building Applications using Typescript language</span>
        </li>
        <li>
          React JS - <span>Buliding Beautiful Scalable User Interface using React Framework </span>
        </li>
        <li>
          React Native - <span>Buliding Mobile Applications using React Native and Expo</span>
        </li>
        <li>
          StoryBook - <span>Building Components to separate ui from logic</span>
        </li>
        <li>
          Tailwind CSS - <span>Styling Web apps using tailwind css</span>
        </li>
        <li>
          Chakra UI - <span>CSS Library for building beautiful UI</span>
        </li>
        <li>
          Shad CN - <span>CSS Library for building beautiful UI</span>
        </li>
        <li>
          Material UI - <span>CSS Library for building beautiful UI</span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("work");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/OD.gif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          A highly dependable Front-end Developer with 5+ years of experience in deploying Software, databases, and
apps using frameworks such as NextJS and React, React Native among other tools. Holds a demonstrated track record of
setting up Software such as Elastic Search and Stackdriver as well as implementing UI features. I have fully
developed and implemented a functional WebApp among other projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("work")}
              active={tab === "work"}
            >
              {" "}
              Work{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
