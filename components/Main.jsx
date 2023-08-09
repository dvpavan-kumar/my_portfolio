import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrContact } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { Cursor } from "react-simple-typewriter";

const Main = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-End Developer.", "UI Developer."];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-100 bg-gradient-to-r from-[#F76806] to-[#F4AB6A] m-auto border-2 border-l-stone-300 w-fit p-1">
            Welcome to my Portfolio
          </p>
          <h1 className="pb-2 text-gray-700">Hi, I&#39;m Pavan</h1>
          <h1 className="pb-2 text-gray-700">
            A <span className="text-[#F76806]"> {text}</span>
            <span>
              <Cursor />
            </span>
          </h1>
          <p className=" text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications and I
            develop beautiful React Pages and I love what I do.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/dv-pavan-kumar/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiLinkedin height={"20"} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <GrContact />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
