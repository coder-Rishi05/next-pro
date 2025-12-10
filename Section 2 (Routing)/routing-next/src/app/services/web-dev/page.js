import Link from "next/link";

function webdev() {
  return (
    <div>
      <h1>All services</h1>
      <p>
        <Link href="/">Web services</Link>
      </p>
      <p>
        <Link href="/">IOS services</Link>
      </p>
      <p>
        <Link href="/">App development</Link>
      </p>
      <p>
        <Link href="/">web development</Link>
      </p>
     
      <h2>This is web services page.</h2>

      <Link href="/">Go back to home</Link>
    </div>
  );
}

export default webdev;
