'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Blog from '@/Components/Blog'

const page = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/Post').then(response=>{
      response.json().then(posts =>{
        setposts(posts)
      })
    })
  }, [])
  return (
    <>
      <section className="text-center">
        <div className="conatiner mt-16">
          <h1 className="text-7xl font-bold my-5">Hunting</h1>
          <h1 className="leading-3 text-5xl font-semibold">Coder</h1>
          <p className="text-lg my-7 text-zinc-700 font-medium">A Blog By a Coder</p>
        </div>

        {posts.length > 0 && posts.map(post =>(
        <Blog {...post}/>
      ))
      }
      </section>
    </>
  );
};

export default page;
