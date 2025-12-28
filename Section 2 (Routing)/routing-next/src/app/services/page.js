import Link from "next/link";

function services() {
  return (
    <div>
      <h2>This is services page.</h2>
      <p>
        <Link href="/">Go back to home</Link>
      </p>
      <p></p>
      <p>
        {/* <Link className="bg-amber-200 text-red-600" href="/">App design</Link> */}
      </p>
      <p>
        <Link className="bg-amber-200 text-red-600" href="/services/seo">
          Seo design
        </Link>
      </p>
      <p>
        <Link className="bg-amber-200 text-red-600" href="/services/web-dev">
          Web design
        </Link>
      </p>
    </div>
  );
}

export default services;
