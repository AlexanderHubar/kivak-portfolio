import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 border-b-2 border-dark-12">
      <div className="border-x flex justify-between border-dark-12 pt-10 pl-4">
        <Link className="text-white font-bold text-xl mt-auto mb-5" href="/">
          <h1>ARTEM KIVAK</h1>
        </Link>

        <nav></nav>

        {/* <Link href="/">Contact Me</Link> */}
        <button className="border-t hover:bg-primary-55 hover:shadow-primary transition-all duration-200 ease-out border-l border-dark-12 p-5 rounded-tl-3xl">
          <Menu height={21} />
        </button>
      </div>
    </header>
  );
}
