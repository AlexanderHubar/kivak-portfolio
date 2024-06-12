"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

export function Nav() {
  const path = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="flex border-dark-12 border-x border-t rounded-tl-xl rounded-tr-xl -mb-5 overflow-auto">
        {NAV.map(({ name, href }) => {
          return (
            <li
              key={name}
              className={cn(
                "w-28 grid place-content-center border-r text-grey-70 last:border-r-0 border-dark-12 py-6",
                {
                  "bg-dark-8 text-white": path === href,
                }
              )}
            >
              <Link className="text-sm font-medium" href={href}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
