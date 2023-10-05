import React, { useState } from "react";

function Footer() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="fixed top-10 bottom-0 right-0 h-full w-10 mr-2 text-center flex items-center justify-center">
      <h3
        onClick={toggleExpansion}
        className={`cursor-pointer whitespace-nowrap writing-mode-vertical-lr text-black bg-[#F76806] bg-opacity-70 py-2 px-4 rounded-full text-lg ${
          expanded ? "w-auto transform rotate-90" : "transform rotate-0 "
        }`}
      >
        <span>&#169;</span>
        {expanded && (
          <>
            Handcrafted by me
            <span className="ml-2 text-white">NextJs + Tailwindcss</span>
          </>
        )}
      </h3>
    </div>
  );
}

export default Footer;
