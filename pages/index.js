import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          {/* <a href="/portfolio">Portfolio</a> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}
