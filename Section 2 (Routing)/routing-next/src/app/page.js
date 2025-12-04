import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hey there! Welcome to Next.js! click the links above to navigate to
      different pages.
      <h2>
        <Link href="/about">About</Link>
      </h2>
      <Link href="/services">services</Link>
    </div>
  );
}
