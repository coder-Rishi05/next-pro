import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Technical agency</h1>
      <h2>
        <Link href="/about">About</Link>
      </h2>
      <Link href="/services">services</Link>
      <p>
        <Link href="/services/web-dev">All services</Link>
      </p>
      <p>
        <Link href="/services/Seo">Seo</Link>
      </p>
    </div>
  );
}
