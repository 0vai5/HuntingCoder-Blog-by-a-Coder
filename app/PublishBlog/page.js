"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Page = () => {
  const [title, settitle] = useState("");
  const [summary, setsummary] = useState("");
  const [content, setcontent] = useState("");
  const [files, setfiles] = useState("");
  const [PostSuccess, setPostSuccess] = useState(false);
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.append("files", files); // Use append to add the file to FormData
    const response = fetch("http://localhost:4000/Post", {
      method: "POST",
      body: data,
    });
    if (PostSuccess) {
      setcontent("")
      setsummary("")
      settitle("")
      setfiles("")
      console.log('Redirecting...');
      window.location.replace("/");
    }
    
       
    else {
      // Handle authentication failure here
      console.log("Login failed");
    }
    // console.log(await response.json());
  };

  return (
    <>
    {PostSuccess ? (
      window.location.replace("/Blogs")
    ) : (
    <form
      onSubmit={submitHandler}
      className="text-center flex items justify-center items-center flex-col mt-14"
    >
      <input
        type="text"
        placeholder="Add title"
        value={title}
        onChange={(e) => {
          settitle(e.target.value);
        }}
        className="rounded border-4 border-zinc-800 px-3 py-2 w-1/3 my-3"
      />

      <input
        type="text"
        placeholder="Enter Summary"
        value={summary}
        onChange={(e) => {
          setsummary(e.target.value);
        }}
        className="rounded border-4 border-zinc-800 px-3 py-2 w-1/3 my-3"
      />

      <input
        type="file"
        placeholder="Add File Here"
        className="rounded border-4 border-zinc-800 w-1/3 my-3 text-center"
        onChange={(e) => {
          setfiles(e.target.files[0]); // Capture the file object
        }}
      />

      <ReactQuill
        className="rounded border-4 border-zinc-800 w-1/3 my-3"
        value={content}
        onChange={(value) => {
          setcontent(value);
        }}
        modules={modules}
      />

      <button className="hover:bg-gray-700 bg-black mb-5 mt-10 text-white rounded-md px-7 py-3 mx-2">
        Publish blog
      </button>
    </form>
    )}
    </>
  );
};

export default Page;
