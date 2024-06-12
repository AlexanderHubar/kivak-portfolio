import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Socials({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "border border-dark-12 p-2 rounded-full flex gap-2",
        className
      )}
    >
      <li className="h-10 w-10 rounded-full bg-gradient-to-b group hover:bg-gradient-to-t from-dark-20 to-dark-20/0 p-px">
        <Link
          className="transition-all duration-300 ease-out inline-grid place-content-center group-hover:shadow-primary group-hover:bg-primary-55 bg-dark-12 h-full w-full rounded-full"
          href="/"
        >
          <Facebook color="white" size={16} />
        </Link>
      </li>
      <li className="h-10 w-10 rounded-full group bg-gradient-to-b hover:bg-gradient-to-t from-dark-20 to-dark-20/0 p-px">
        <Link
          className="transition-all duration-300 ease-out inline-grid place-content-center group-hover:shadow-primary group-hover:bg-primary-55 bg-dark-12 h-full w-full rounded-full"
          href="/"
        >
          <Twitter color="white" size={16} />
        </Link>
      </li>
      <li className="h-10 w-10 rounded-full group bg-gradient-to-b hover:bg-gradient-to-t from-dark-20 to-dark-20/0 p-px">
        <Link
          className="transition-all duration-300 ease-out inline-grid place-content-center group-hover:shadow-primary group-hover:bg-primary-55 bg-dark-12 h-full w-full rounded-full"
          href="/"
        >
          <Linkedin color="white" size={16} />
        </Link>
      </li>
    </ul>
  );
}
