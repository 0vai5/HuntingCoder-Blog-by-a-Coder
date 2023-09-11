import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-48 w-full flex justify-around items-center sm:flex-col lg:flex-row md:flex-col">
        <div className="">
          <ul>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl my-1 font-bold">sign up to stay updated</p>
          <input
            type="email"
            name=""
            id=""
            placeholder="enter email"
            className="rounded border-2 px-2 py-2"
          />
          <br />
          <button className="rounded px-3 py-2 leading-3 text-white bg-black hover:bg-gray-700">subscribe now!</button>
        </div>
        
      </div>
      <hr className="border-zinc-800 border-4 w-full px-4"/>
      <div className="h-auto bg-white">
        <p className="text-center">
          © 2021 Copyright: All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
