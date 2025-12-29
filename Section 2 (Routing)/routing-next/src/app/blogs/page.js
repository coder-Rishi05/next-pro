import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs",
};

const blogs = () => {
  return (
    <div>
      <h2>This is Blogs page.</h2>
      <Link href="/">Go back to home</Link>
    </div>
  );
};

export default blogs;
