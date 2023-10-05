import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#F76806]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="Mini Projects"
            backgroundImg="/assets/projects/mini-projects.jpg"
            projectUrl="https://mini-projects-rho.vercel.app/"
            tech="React js,TailwindCSS"
          />
          <ProjectItem
            title=" Crypto website inprogress..."
            backgroundImg="/assets/projects/crypto.jpg"
            projectUrl="/Comingsoon"
            // tech="cryptowebsite "
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
