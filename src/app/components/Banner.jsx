"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerData = [
  {
    image: "/assets/images/banner/1.jpg",
    title: "Premium Engine Repair",
    description:
      "We provide expert solutions to restore your car’s engine performance.",
  },
  {
    image: "/assets/images/banner/2.jpg",
    title: "High-Quality Oil Change",
    description:
      "Keep your engine running smoothly with our advanced oil change service.",
  },
  {
    image: "/assets/images/banner/3.jpg",
    title: "Advanced Diagnostics",
    description:
      "State-of-the-art tools to detect and solve issues before they grow.",
  },
  {
    image: "/assets/images/banner/4.jpg",
    title: "Trusted Car Maintenance",
    description:
      "Routine checkups designed to increase your vehicle’s lifespan.",
  },
  {
    image: "/assets/images/banner/5.jpg",
    title: "Engine Overhaul Services",
    description: "Complete engine overhauls for maximum power and reliability.",
  },
  {
    image: "/assets/images/banner/6.jpg",
    title: "Performance Upgrades",
    description:
      "Boost efficiency and power with our professional upgrade services.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-[1250px] mx-auto overflow-hidden rounded-2xl shadow-lg h-[400px] sm:h-[500px] my-12">
  {bannerData.map((item, index) => (
    <div
      key={index}
      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
        priority={index === current}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
        <h2 className="text-3xl md:text-4xl font-bold">{item.title}</h2>
        <p className="mt-4 max-w-[700px]">
          {item.description}
        </p>
      </div>

      {/* Arrows at bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={prevSlide}
          className="bg-white/80 text-black p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/80 text-black p-2 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  ))}
</div>
  );
}
