import React from "react";
import Head from "next/head";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { ImDownload3 } from "react-icons/im";

const resume = () => {
  return (
    <>
      <Head>
        <title>Pavan&apos;s | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center pr-10">Resume</h2>
        <div className="bg-gradient-to-r from-[#F76806] to-[#F4AB6A] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">D.V.Pavan Kumar</h2>
          <div className="flex">
            <a href="linked in url" target="_blank" rel="noreferrer">
              <SiLinkedin size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="mailto:dpavan.vkumar@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiGmail size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="dpavan_resume.pdf"
              target="_blank"
              download="dpavan_resume.pdf"
            >
              <ImDownload3 size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span>Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2">Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, Active team member, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations.Effective and critical thinking, idea generation, and
          optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4 overflow-auto">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>SASS
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>ReactJs
            <span className="px-2">|</span>NextJs
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">TECH MAHINDRA</span>
            <span className="px-2">|</span>Hyderabad, Telangana
          </p>
          <p className="py-1 italic">
            Sr.software Engineer (September,2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            {/* <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li> */}
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">HIYAMEE PRIVATE LIMITED</span>
            <span className="px-2">|</span>Bengaluru, Karnataka
          </p>
          <p className="py-1 italic">
            Software Engineer (February,2022 - July,2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developing Screens using UI components like NextJS, SASS and
              StoryBlok.
            </li>
            <li>
              We developed a user-friendly webpages and help them migrate their
              existing pages in AEM-Java to StoryBlok-Next.js
            </li>
            <li>
              Building reusable components for future and developing Custom UI
              according to Figma design.
            </li>
            <li>
              Developed static pages using Next.js application that use
              Storyblok APIs to retrieve and manage content.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              ARIATECH IT SOLUTIONS PRIVATE LIMITED
            </span>
            <span className="px-2">|</span>Hyderabad, Telangana
          </p>
          <p className="py-1 italic">
            Software Developer (January,2019 - February,2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, developing Custom UI according
              to client requirement.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement business logic based on requirement.
            </li>
            <li>Learn and understand user interactions.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
