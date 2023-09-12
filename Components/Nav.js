import React from "react";


const Nav = () => {
  return (
    <>
      <div className="h-10  py-10 px-16 flex justify- evenly flex-col items-center">
        {/* <div>
      <h1 className="font-semibold text-2xl flex items-center ">Hunting</h1>
      <h1 className="font-semibold text-2xl flex items-center leading-3">
        Coder
      </h1>
    </div> */}
        <ul className="font-semibold text-2xl mx-10 flex items-center justify-between gap-10 ">
          <li className="hover:text-gray-700  text-black">Home</li>
           <li className="hover:text-gray-700  text-black">Blogs</li>
           <li className="hover:text-gray-700  text-black">About</li>
        </ul>
        <div>
         <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
            Login
          </button> 
          <span className="text-md">or</span>
          <button className="hover:bg-gray-700 bg-black text-white rounded-md px-5 py-2 mx-2">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
