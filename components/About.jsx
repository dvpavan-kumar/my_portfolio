import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center pb-16 bg-white"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#F76806]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and. I’m passionate about learning new
            technologies and understand there is more than one way to accomplish
            a task. Though I am most proficient in building front-end
            applications using HTML, CSS, Javascript, and React, I am a quick
            learner and can pick up new tech stacks as needed.
          </p>
          <p className="py-2 text-gray-600">
            I have significant amount of experience in Storyblok - NextJS
            (JamStack) and ReactJS.I have built many pages using this stack for
            an MNC and even this page is developed using NextJS. I have worked
            with European clients and have helped them build their end-to-end
            project tracking web application for EPC companies in ReactJs and
            also migrated exisiting pages in AEM-Java to Storyblok-NextJS.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image loader={({ src }) => src} 
            src="/assets/about.jpg"
            width={500}
            height={700}
            className="rounded-xl"
            alt="About"
            property
          />
        </div>
      </div>
    </div>
  );
};

export default About;
