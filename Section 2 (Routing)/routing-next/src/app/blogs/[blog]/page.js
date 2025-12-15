import React from "react";

async function page1({ params }) {
  console.log(await params);
  return <div>This is child blog1</div>;
}

export default page1;


