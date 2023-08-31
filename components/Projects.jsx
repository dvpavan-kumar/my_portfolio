import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-white">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#F76806]">
          Projects
        </p>
        {/* <h2 className="py-4">What I&apos;ve Built</h2> */}
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="Food blog inprogress..."
            backgroundImg="/assets/projects/foodpage.jpg"
            projectUrl="/Comingsoon"
            // tech="......."
          />
          <ProjectItem
            title=" Crypto website inprogress..."
            backgroundImg="/assets/projects/crypto.jpg"
            projectUrl="/Comingsoon"
            // tech="cryptowebsite "
          />
          {/* <ProjectItem
            title=" Netflix clone inprogress..."
            backgroundImg={netflixImg}
            projectUrl="/Comingsoon"
            // tech="cryptowebsite "
          /> */}
          {/* <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          {/*<ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
