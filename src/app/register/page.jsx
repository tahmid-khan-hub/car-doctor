import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div className="max-w-[1250px] mx-auto min-h-screen px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-24">
        {/* Left Image */}
        <div className="relative w-full  lg:h-[600px]">
          <Image
            src={"/assets/images/login/login.svg"}
            alt="Register"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Right Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create an Account
          </h2>

          {/* Form Fields */}
          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or sign up with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center justify-center w-1/2 border rounded-lg py-2 hover:bg-gray-50">
              <FaGoogle className="mr-2 text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center w-1/2 border rounded-lg py-2 hover:bg-gray-50">
              <FaGithub className="mr-2 text-gray-800" /> Github
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
