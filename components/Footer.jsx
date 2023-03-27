import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Footer() {
  const [shadow, setShadow] = useState(true);
  const [navBg, setNavBg] = useState('#ffffff');
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();
  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"||
      router.asPath ==="/Comingsoon"
    ) {
      setNavBg("transparent");
      setLinkColor("#1f2937");
    } else {
      setNavBg("#ffffff");
      setLinkColor("#1f2937");
    }
  }, [router]);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <>
        <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full bottom-0 h-20 shadow-[0_25px_10px_25px_rgba(0.2,0.2,0.2,0.3)] ease-in-out duration-300'
          : 'fixed bottom-0 w-full h-20'
      }
    >

        <div style={{ color: `${linkColor}` }} className="w-full h-20 grid text-center content-center justify-center">
          <h3 >
            &#169;Handcrafted by me using
            <span className=" text-[#F76806]"> NextJs + Tailwindcss</span>.
          </h3>
      </div>
      </div>
    </>
  );
}

export default Footer;
