"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ROUTES = [
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
        {ROUTES.map(({ name, href }) => {
          const isActive = path === href;

          return (
            <motion.li
              layout
              key={name}
              className={cn(
                "w-28 grid relative cursor-pointer place-content-center border-r text-grey-70 last:border-r-0 hover:text-white border-dark-12 h-16",
                {
                  "text-white": isActive,
                }
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-dark-8"
                />
              )}
              <Link
                className="z-10 text-sm font-medium grid place-content-center w-28 h-16"
                href={href}
              >
                {name}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
