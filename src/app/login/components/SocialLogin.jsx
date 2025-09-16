import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
  const handleSocialLogin = async(providerName) => {
    const result =  await signIn(providerName, {redirect: false})
  };
  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleSocialLogin("google")}
        className="flex items-center justify-center w-1/2 border rounded-lg py-2 hover:bg-gray-50"
      >
        <FaGoogle className="mr-2 text-red-500" /> Google
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="flex items-center justify-center w-1/2 border rounded-lg py-2 hover:bg-gray-50"
      >
        <FaGithub className="mr-2 text-gray-800" /> Github
      </button>
    </div>
  );
};

export default SocialLogin;
