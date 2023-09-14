'use client'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Link from "next/link";

const Page = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/Login", {
        method: "POST",
        body: JSON.stringify({ Email, Password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // Successful login, you can redirect or perform other actions here
        setRedirect(true); // Update the state using the function
        console.log("Login successful");
      } else {
        // Handle authentication failure here
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (redirect) {
    const navigate = useNavigate();
    navigate('/'); // Navigate to the home page
    return null; // You can return null or any other component here
  }

  return (
    <>
      <div className="container text-center left-4 relative">
        <div className="my-20"></div>
        <h1 className="font-bold text-4xl mb-5">Login</h1>
        <form onSubmit={loginHandler}>
          <label className="relative right-28 font-semibold text-lg">
            Email
          </label>
          <br />
          <input
            type="text"
            placeholder="enter email"
            className="rounded-md px-5 py-3 border-4 w-72 border-zinc-950 text-xl"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label className="relative right-28 font-semibold text-lg">
            Password
          </label>
          <br />
          <input
            type="password"
            placeholder="enter Password"
            className="rounded-md px-5 py-3 border-4 w-72 border-zinc-950 text-xl"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button className="hover:bg-gray-700 bg-black mb-5 mt-10 text-white rounded-md px-7 py-3 mx-2">
            Login
          </button>
          <br />

          <p className="mb-10">
            Don't have an account? <Link href={"/Register"}>Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Page;
