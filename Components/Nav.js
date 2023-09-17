"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";


const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setIsLoggedIn(userInfo.Email);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/Logout", {
      credentials: "include",
      method: "POST",
    });
    setIsLoggedIn(false)
  }

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
            <Link href={"/PublishBlog"}>
              <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
                Publish Blog
              </button>
              </Link>
              <span className="text-md">or</span>
              <button
                onClick={logout}
                className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2"
              >
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
        {/* <button onClick={toggleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Toggle isLoggedIn
        </button> */}
      </div>
    </>
  );
};

export default Nav;
