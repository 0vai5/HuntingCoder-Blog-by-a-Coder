import React from "react";
import Link from 'next/link'



const blog = ({_id,title,summary,cover,content}) => {
  return (
    <>
      <h1 className="leading-7 text-4xl font-semibold text-center">Latest Blogs</h1>
      <div className="mt-10 text-center leading-5 flex justify-evenly items-center flex-col">
        <div className="my-10 text-center justify-center flex flex-col items-center">
          <Link href={`/Post/${_id}`}><img
            src={'http://localhost:4000/' + cover}
            alt=""
            className="h-auto w-60 rounded-lg"
          /></Link>
          <Link href={`/Post/${_id}`}>
          <h2 className="font-semibold">{title}</h2>
          </Link>
          <p className="font-medium">
            {summary.substring(0,106)+"..."}
          </p>
         <Link href={`/Post/${_id}`}><button className="rounded px-3 py-2 text-white bg-black hover:bg-gray-700">
            Read More
          </button></Link>
          
        </div>
      </div>
    </>
  );
};

export default blog;
