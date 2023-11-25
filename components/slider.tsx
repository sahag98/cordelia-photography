"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/hero.png", "/img2.jpg", "/view.jpg", "/bridge.jpg"];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  console.log(index);

  return (
    <div className="relative w-full justify-center items-center lg:h-screen bg-slate-200 md:h-[500px] h-[400px] overflow-hidden">
      {images.map((imageUrl, i) => (
        <div
          key={i}
          style={{
            transitionDuration: "2s", // Adjust the duration as needed
          }}
          className={`absolute top-0 w-full h-full transition-opacity  ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={imageUrl}
            alt={`image-${i}`}
            className="w-full object-cover h-full md:h-[500px] lg:h-full"
            width={2000}
            height={2000}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
