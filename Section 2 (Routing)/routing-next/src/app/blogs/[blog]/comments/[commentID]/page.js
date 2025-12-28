import React from "react";

export default async function Comments({ params }) {
  console.log(await params);
  const { blog } = await params;
  return (
    <div>
      <p>all comments on comments page to commentID : {blog} id</p>
    </div>
  );
}
