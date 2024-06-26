'use client'
import React, { useEffect, useState } from "react";
import Blog from "@/Components/Blog";

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
    <div className="my-10 h-10"></div>
      {posts.length > 0 && posts.map(post =>(
        <Blog {...post}/>
      ))
      }
    </>
  );
};

export default page;
