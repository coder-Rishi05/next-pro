import Link from "next/link";

export default async function Home({ params, searchParams }) {
  console.log(await searchParams);
  console.log(await params);

  {
    /*

    these are empty objects
    seach params get value when we write in url 
    ex: 
    http://localhost:3000/?name=Rishabh&age=21
    {name: 'Rishabh', age: '21'}

    these resiseds in every components.

    

 * */
  }

  return (
    <>
      <h1>Technical Agency</h1>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>{" "}
      <p>
        <Link href="/about">About</Link>
      </p>{" "}
      <p>
        <Link href="/services">Services</Link>
      </p>
    </>
  );
}
