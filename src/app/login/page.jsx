import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa";
import LoginForm from "./components/LoginForm";

const Login = () => {
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
            Welcome Back
          </h2>

          {/* Form Fields */}
          <LoginForm></LoginForm>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or sign In with</span>
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
            New to this website?{" "}
            <Link href="/register" className="text-orange-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
