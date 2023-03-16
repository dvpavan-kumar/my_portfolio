import Image from "next/image";
import React from "react";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NextJS from "../public/assets/skills/Nextjs.png";
import Sass from "../public/assets/skills/Sass.png";
import bootstrap from "../public/assets/skills/bootstrap.png";
import StoryBlok from "../public/assets/skills/StoryBlok.svg";
import JavaScript from "../public/assets/skills/Javascript.png";
import Redux from "../public/assets/skills/Redux.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen sm:p-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#F76806]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className=" p-3 lg:flex grid grid-cols-2 md:flex justify-between text-center gap-4">
          <div>
            <Image src={ReactImg} width="64px" height="64px" alt="/" />
          </div>  
          <div>
            <Image src={bootstrap} width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image src={Tailwind} width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image src={JavaScript} width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image src={Redux} width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image src={NextJS} width="90px" height="65px" alt="/" />
          </div>
          <div>
            <Image src={StoryBlok} width="160px" height="64px" alt="/" />
          </div>
          <div>
            <Image src={Sass} width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image src={Github} width="64px" height="64px" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
