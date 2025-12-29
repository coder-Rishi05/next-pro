import React from "react";

export const metadata = {
  title: "Comments page",
};

export default async function Comment({ params }) {
  console.log(await params);
  const { blog } = await params;
  return (
    <div>
      <p>all comments on : {blog} page</p>
    </div>
  );
}
