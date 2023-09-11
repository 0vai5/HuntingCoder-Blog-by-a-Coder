import React from "react";

const blog = () => {
  return (
    <>
      <h1 className="leading-7 text-4xl font-semibold ">Latest Blogs</h1>
      <div className="mt-10 text-center leading-5 flex justify-evenly items-center flex-col">
        <div className="my-10 flex justify-center items-center flex-col">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="h-auto w-60 rounded-lg "
          />
          <h2 className="font-semibold">How To Create a Website?</h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Vero rerum tenetur natus quae iste <br />
          </p>
          <button className="rounded px-3 py-2 text-white bg-black hover:bg-gray-700">
            Read More
          </button>
        </div>
        <div className="my-10 text-center flex flex-col justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="h-auto w-60 rounded-lg"
          />
          <h2 className="font-semibold">How To Create a Website?</h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Vero
            rerum tenetur natus quae iste <br />
          </p>
          <button className="rounded px-3 py-2 text-white bg-black hover:bg-gray-700">
            Read More
          </button>
        </div>
        <div className="my-10 text-center justify-center flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="h-auto w-60 rounded-lg"
          />
          <h2 className="font-semibold">How To Create a Website?</h2>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Vero
            rerum tenetur natus quae iste <br />
          </p>
          <button className="rounded px-3 py-2 text-white bg-black hover:bg-gray-700">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default blog;
