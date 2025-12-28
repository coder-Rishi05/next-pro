import React from "react";

export default async function page1({ params }) {
  console.log(await params);
  const { blog } = await params;
  return (
    <div>
      <p>all comments on : {blog} page</p>
    </div>
  );
}
