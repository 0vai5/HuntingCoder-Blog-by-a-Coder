"use client";
import React, { useState } from "react";
import Link from "next/link";

const page = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <div className="container text-center left-4 relative ">
        <div className="my-20 "></div>
        <h1 className="font-bold text-4xl mb-5">Register</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const response = await fetch("http://localhost:4000/Register", {
              method: "POST",
              body: JSON.stringify({ Email, Password }),
              headers: { "Content-Type": "application/json" },
            });
            setEmail("");
            setPassword("");
          }}
        >
          <label className="relative right-28 font-semibold text-lg">
            Email
          </label>
          <br />
          <input
            type="text"
            placeholder="enter email"
            className="roudned-md px-5 py-3 border-4 w-72 border-zinc-950 text-xl a"
            autoComplete="off"
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
            autoComplete="off"
            className="roudned-md px-5 py-3 border-4 w-72 border-zinc-950 text-xl"
            value={Password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(Password);
            }}
          />
          <br />
          <button className="hover:bg-gray-700 bg-black mb-5 mt-10 text-white rounded-md px-7 py-3 mx-2">
            Register
          </button>
          <br />
          <p className="mb-10">
            already have an account? <Link href={"/Register"}>Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default page;
