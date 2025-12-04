import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <Link href="/">Go back to home</Link>
    </div>
  );
}
