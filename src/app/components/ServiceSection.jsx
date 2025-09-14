"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServiceSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/services", { cache: "force-cache" })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="my-12">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h5 className="text-orange-400 font-semibold mb-2">Service</h5>
        <h2 className="text-3xl font-semibold mb-3">Our Service Area</h2>
        <p className="text-gray-400 text-sm">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-100 p-4 rounded shadow text-center space-y-3 "
          >
            {/* Image centered */}
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto h-[230px] w-full object-cover rounded"
              />
            </div>

            {/* Title */}
            <div>
              <h2 className="text-xl font-semibold mt-6 text-left">{item.title}</h2>
            </div>

            <div className="flex justify-between items-center px-4 mt-5">
              <p className="text-orange-500 font-bold -ml-4">Price: ${item.price}</p>
              <Link href={`/services/${item._id}`}><FaArrowRightLong className="text-orange-500" size={19}/></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
