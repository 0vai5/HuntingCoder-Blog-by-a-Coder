'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  useEffect(() => {
    // Check if the user is logged in (you would implement your own logic for this)
    // For demonstration purposes, let's assume a simple check based on a token
    const token = localStorage.getItem("token"); // Assume you store the token in localStorage
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of a token
  }, []);

  const renderAuthButtons = () => {
    if (isLoggedIn) {
      return (
        <>
          <Link href={"/Logout"}>
            <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
              Logout
            </button>
          </Link>
          <Link href={"/AddBlog"}>
            <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
              Add Blog
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link href={"/Login"}>
            <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
              Login
            </button>
          </Link>
          <span className="text-md">or</span>
          <Link href={"/Register"}>
            <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
              Register
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <div className="h-10 py-10 px-16 flex justify-between flex-col items-center">
        <ul className="font-semibold text-2xl mx-10 flex items-center justify-between gap-10">
          <Link href={"/"}>
            <li className="hover:text-gray-700 text-black">Home</li>
          </Link>
          <Link href={"/Blogs"}>
            <li className="hover:text-gray-700 text-black">Blogs</li>
          </Link>
          <Link href={"/About"}>
            <li className="hover:text-gray-700 text-black">About</li>
          </Link>
        </ul>
        <div>{renderAuthButtons()}</div>
      </div>
    </>
  );
};

export default Nav;
