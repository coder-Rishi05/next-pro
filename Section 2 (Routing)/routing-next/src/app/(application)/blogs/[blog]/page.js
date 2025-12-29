import { notFound } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Blogs inside child number",
};

async function page1({ params }) {
  console.log(await params);
  const { blog } = await params;
  // if blog is === test
  // if (blog === "test") {
  //   return notFound();
  // }

  // if blog is not number
  if (!/^\d+$/.test(blog)) {
    return notFound();
  }

  return (
    <div>
      <h1>This is child blog1</h1>

      <p>Blog id : {blog}</p>
    </div>
  );
}

export default page1;
