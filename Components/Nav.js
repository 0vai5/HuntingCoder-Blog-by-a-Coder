"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const checkLoginStatus = async () => {
    try {
      console.log("Checking login status...");
      const response = await fetch("http://localhost:4000/checkLoginStatus", {
        method: "GET",
        credentials: "include",
      });
  
      if (response.ok) {
        console.log("User is logged in");
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };
  console.log(setIsLoggedIn)
  


  useEffect(() => {
    checkLoginStatus();
  }, []);
  console.log(checkLoginStatus)

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
        <div>
          {isLoggedIn ? (
            <>
              <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
                Publish Blog
              </button>
              <span className="text-md">or</span>
              <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
                Logout
              </button>
            </>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
