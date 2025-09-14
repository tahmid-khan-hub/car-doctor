import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function ServicesDetails({ params }) {
  const servicesCollection = await dbConnect("services");
  const data = await servicesCollection.findOne({
    _id: new ObjectId(params.id),
  });

  console.log(data);

  return (
    <div className="max-w-[1250px] mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Hero Image */}
          <div className="w-full h-[300px] relative mb-6">
            <Image
              src={"/assets/images/banner/3.jpg"}
              alt="Service"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Title & Description */}
          <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-600 mb-8">{data.description}</p>

          {/* 4 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {data.facility.map((f, index) => {
              return (
                <div
                  key={index}
                  className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg mb-2">{f?.name}</h3>
                  <p className="text-sm text-gray-600">{f?.details}</p>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <h3 className="text-2xl font-bold mb-4">3 Simple Steps to Process</h3>
          <p className="text-gray-600 mb-8">
            Follow these quick steps to get your service done with ease.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-500 text-white text-xl font-bold rounded-full mb-3">
                01
              </div>
              <p className="font-semibold">Choose Service</p>
              <p className="text-sm text-gray-600">
                Select your preferred service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-500 text-white text-xl font-bold rounded-full mb-3">
                02
              </div>
              <p className="font-semibold">Book Appointment</p>
              <p className="text-sm text-gray-600">
                Pick a convenient schedule.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-500 text-white text-xl font-bold rounded-full mb-3">
                03
              </div>
              <p className="font-semibold">Get Service</p>
              <p className="text-sm text-gray-600">
                Enjoy hassle-free experience.
              </p>
            </div>
          </div>
          {/* image */}
          <div className="mt-11">
            <Image
              src={"/assets/images/banner/2.jpg"}
              alt="image"
              height={752}
              width={1561}
              className="rounded-2xl"
            ></Image>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Services List */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Full Car Repair",
                "Engine Repair",
                "Automatic Services",
                "Engine Oil Change",
                "Battery Charge",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-orange-200 bg-white cursor-pointer"
                >
                  {item}{" "}
                  <FaArrowRightLong className="text-orange-500" size={19} />
                </li>
              ))}
            </ul>
          </div>

          {/* Download Section */}
          <div className="bg-black text-white rounded-xl p-5">
            <h4 className="text-xl font-bold mb-4">Download</h4>
            <div className="flex items-center justify-between gap-2">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/assets/icons/Frame.png"}
                  alt="frame"
                  width={44}
                  height={1}
                />
                <div>
                  <h5 className="text-lg">Our Brochure</h5>
                  <p className="text-gray-200">Download</p>
                </div>
              </div>
              <button className="bg-orange-500 p-2 px-3">
                <FaArrowRightLong className="text-white" size={19} />
              </button>
            </div>

            <div className="flex items-center justify-between gap-2 mt-5">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/assets/icons/Frame.png"}
                  alt="frame"
                  width={44}
                  height={1}
                />
                <div>
                  <h5 className="text-lg">Company Details</h5>
                  <p className="text-gray-200">Download</p>
                </div>
              </div>
              <button className="bg-orange-500 p-2 px-3">
                <FaArrowRightLong className="text-white" size={19} />
              </button>
            </div>
          </div>

          {/* Car Doctor Card */}
          <div className="bg-black rounded-xl p-5 text-center shadow-sm pb-12">
            <div className="my-7"><Image src={"/assets/logo.svg"} alt="logo" width={120} height={120} className="mx-auto object-cover"></Image></div>
            <p className="text-sm text-white mb-8">
              Need Help? We Are Here To Help You
            </p>

            <div className=" p-9">
              <div className="bg-white p-7 rounded-2xl ">
              <h5><span className="text-orange-600 text-xl font-semibold">Car Doctor</span> Special</h5>
              <p className="mb-5">Save up to <span className="text-orange-600 text-sm font-semibold">60% off</span></p>
            </div>
            <button className="btn w-[150px] bg-orange-500 py-2 rounded-lg text-white hover:bg-orange-600 mb-3 mt-3">
              Get a Quote
            </button>
            </div>
          </div>

          {/* Price Section */}
          <div className="border rounded-xl p-5 text-center shadow-sm">
            <h4 className="font-bold mb-2">Price $250.00</h4>
            <button className="w-full bg-orange-500 py-2 rounded-lg text-white hover:bg-orange-600">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
