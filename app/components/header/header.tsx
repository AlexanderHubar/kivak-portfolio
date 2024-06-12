import Link from "next/link";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="px-4 lg:px-20 border-b-2 border-dark-12">
      <div className="border-x flex justify-between lg:items-center border-dark-12 pt-10 lg:py-5 pl-4 lg:px-4">
        <Link
          className="text-white font-bold text-xl lg:text-2xl mt-auto lg:mt-0 mb-5 lg:mb-0"
          href="/"
        >
          <h1>KIVAK</h1>
        </Link>

        <Nav />

        <Link
          href="/"
          className={buttonVariants({
            variant: "default",
            size: "lg",
            className: "hidden lg:inline-flex",
          })}
        >
          Contact Me
        </Link>
        <button className="lg:hidden border-t hover:bg-primary-55 hover:shadow-primary transition-all duration-200 ease-out border-l border-dark-12 p-5 rounded-tl-3xl">
          <Menu height={21} />
        </button>
      </div>
    </header>
  );
}
