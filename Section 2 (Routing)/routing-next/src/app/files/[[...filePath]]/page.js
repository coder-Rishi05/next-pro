import React from "react";

async function File({ params }) {
  console.log(await params);
  const { filePath } = await params;
  //   filePath: ['images.png']

  return (
    <div>
      <h1>This is catch all rutes</h1>
      <p>
        Blog id : <i> {filePath?.join("/")}</i>{" "}
      </p>
      {/* this is dynamic route we can go to any page using this route. also can catch all types of nested routes. */}
    </div>
  );
}

export default File;
