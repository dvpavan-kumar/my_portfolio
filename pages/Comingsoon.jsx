import React from "react";
import Image from 'next/image'
import { CiMail } from "react-icons/ci";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <div className="animate-pulse">
          <Image loader={({ src }) => src} 
            src="/assets/astro.png"
            width={250}
            height={250}
            alt="Maintenance Image"
            className="mx-auto mb-4 rounded-lg"
            priority
          />
        </div>
        <h1 className="text-3xl font-semibold text-[#F76806] mb-2">Coming Soon!</h1>
        <p className="text-gray-600 mb-6">
          Something awesome is in the works. Stay tuned!
        </p>
        <p className="text-gray-600">
          Subscribe for updates:
        </p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            className="border rounded-l px-3 py-2 w/2 mr-3 shadow-md"
            placeholder="Enter your email"
          />
          <button
            className="py-2 px-4 rounded hover:opacity-75"
            style={{background: "#F76806"}}
          >
            <CiMail color="white" size={20} className="transition-colors hover:invert" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
