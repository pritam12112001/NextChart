"use client"
import React, { useEffect, useState } from "react";

const LoaderScreen: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // Adjust speed by changing the timeout value
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#686661] opacity-[0.85] text-white z-50">
      <div className="text-center">
        {/* Percentage Text */}
        <div className="text-3xl font-light italic mb-3">{progress}%</div>

        {/* Progress Bar */}
        <div className="w-[15.625rem] h-[0.375rem] bg-[#55575A] rounded-full mx-auto mb-3">
          <div
            className="h-full bg-[#F8CE14] rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="mb-8 mt-3 text-lg">
          Please wait while the application is loading...
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="\images\loader_img.png" // Replace this with your actual image path
            alt="Loading Image"
            className="w-auto opacity-75 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default LoaderScreen;
