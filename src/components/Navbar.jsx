"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const session = useSession();
  const links = (
    <>
      <Link className="mr-10 hover:text-orange-500" href={"/"}>
        <li>Home</li>
      </Link>
      <Link className="mr-10 hover:text-orange-500" href={"/about"}>
        <li>About</li>
      </Link>
      <Link className="mr-10 hover:text-orange-500" href={"/services"}>
        <li>Services</li>
      </Link>
      <Link className="mr-10 hover:text-orange-500" href={"/blog"}>
        <li>Blog</li>
      </Link>
      <Link className="hover:text-orange-500" href={"/contact"}>
        <li>Contact</li>
      </Link>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 border-b border-gray-200 bg-base-100">
      <div className="max-w-[1250px] w-[96%] mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-4 hover:text-orange-500 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-1"
            >
              {links}
            </ul>
          </div>
          <Image
            src={"/assets/logo.svg"}
            width={70}
            height={70}
            alt="logo"
          ></Image>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <CiShoppingCart size={20} className="mr-3"/>
          <CiSearch size={20} className="mr-5"/>
          <Link href={"/login"}><button className="btn mr-4">Login</button></Link>
          <a className="btn border border-orange-500 bg-white rounded-sm text-orange-500 hover:bg-orange-500 hover:text-white">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
