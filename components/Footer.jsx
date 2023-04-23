import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Footer() {
  return (
    <>
      <div className=" w-full h-20 grid text-center content-center justify-center">
        <h3>
          &#169;Handcrafted by me using
          <span className=" text-[#F76806]"> NextJs + Tailwindcss</span>.
        </h3>
      </div>
    </>
  );
}

export default Footer;
