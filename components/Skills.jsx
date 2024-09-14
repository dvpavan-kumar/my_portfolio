import Image from "next/image";
import React from "react";

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
            <Image loader={({ src }) => src}  src="/assets/skills/react.png" width="64px" height="64px" alt="/" />
          </div>  
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/tailwind.png" width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/github1.png" width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/Nextjs.png" width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/Sass.png" width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/bootstrap.png" width="90px" height="65px" alt="/" />
          </div>
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/StoryBlok.png"width="160px" height="64px" alt="/" />
          </div>
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/Javascript.png" width="64px" height="64px" alt="/" />
          </div>
          <div>
            <Image loader={({ src }) => src}  src="/assets/skills/Redux.png" width="64px" height="64px" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
