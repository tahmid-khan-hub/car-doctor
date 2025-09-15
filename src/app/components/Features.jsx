import Image from "next/image";
import React from "react";

const Features = () => {
  const featuresData = [
    {
      icon: "/assets/icons/group.svg",
      title: "Expert Team",
    },
    {
      icon: "/assets/icons/Group 38729.svg",
      title: "Time Delivery",
    },
    {
      icon: "/assets/icons/person.svg",
      title: "24/7 Support",
    },
    {
      icon: "/assets/icons/Wrench.svg",
      title: "Best Equipment",
    },
    {
      icon: "/assets/icons/check.svg",
      title: "100% Gurantee",
    },
    {
      icon: "/assets/icons/deliveryt.svg",
      title: "Timely Delivery",
    },
  ];
  return (
    <div className="max-w-[1250px] mx-auto my-14">
      <h5 className="text-sm text-orange-600 mb-2 text-center font-semibold">
        Core Features
      </h5>
      <h1 className="text-3xl mb-3 text-center font-bold">Why Choose Us</h1>
      <p className="max-w-3xl mx-auto text-sm text-gray-400  text-center mb-8">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {featuresData.map((features, i) => {
          return (
            <div
              key={i}
              className="border border-gray-200 shadow-sm rounded-2xl hover:bg-orange-400 hover:text-white p-1 py-6 flex flex-col items-center"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={features.icon}
                  alt="features icon"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center font-semibold">{features.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
