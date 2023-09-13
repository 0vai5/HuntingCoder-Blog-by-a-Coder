'use client'
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")

  return (
    <>
      <div className="container text-center left-4 relative">
        <div className="my-20 "></div>
        <h1 className="font-bold text-4xl mb-5">Login</h1>
        <form>
          <label className="relative right-28 font-semibold text-lg">
            Email
          </label>
          <br />
          <input
            type="text"
            placeholder="enter email"
            className="roudned-md px-5 py-3 border-4 w-72 border-zinc-950 text-xl"
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
            className="roudned-md px-5 py-3 border-4 w-72 border-zinc-950 text-xl"
            value={Password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
          <br />
          <button
            className="hover:bg-gray-700 bg-black mb-5 mt-10 text-white rounded-md px-7 py-3 mx-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
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

export default page;
