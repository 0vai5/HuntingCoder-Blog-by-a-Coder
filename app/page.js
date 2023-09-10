import React from "react";
import Blog from '@/Components/Blog'

const page = () => {
  return (
    <>
      <section className="text-center">
        <div className="conatiner mt-16">
          <h1 className="text-7xl font-bold my-5">Hunting</h1>
          <h1 className="leading-3 text-5xl font-semibold">Coder</h1>
          <p className="text-lg my-7 text-zinc-700 font-medium">A Blog By a Coder</p>
        </div>
        <Blog />
      </section>
    </>
  );
};

export default page;
