import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ActionLink() {
  return (
    <Link
      className="inline-block -mb-4 py-4 px-7 rounded-full bg-primary-55 shadow-primary hover:bg-primary-60 transition-colors duration-300 ease-in-out group"
      href="/"
    >
      <ArrowUpRight
        className="h-5 w-5 group-hover:scale-125 transition-all duration-200 ease-in-out"
        color="white"
      />
    </Link>
  );
}
