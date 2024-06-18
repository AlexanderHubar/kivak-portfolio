"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { buttonVariants } from "@/components/ui/button";
import { Hamburger } from "@/components/ui/hamburger";
import { Nav } from "./nav";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(document.body);
    }
    return clearAllBodyScrollLocks;
  }, [isMenuOpen]);

  return (
    <>
      <header className="px-4 lg:px-20 border-b-2 border-dark-12 w-screen fixed top-0 z-20 bg-dark-3 shadow-lg">
        <div className="border-x flex justify-between lg:items-center border-dark-12 pt-4 lg:pt-10 lg:py-5 pl-4 lg:px-4">
          <Link
            className="text-white font-bold text-xl lg:text-2xl mt-auto lg:mt-0 mb-5 lg:mb-0"
            href="/"
          >
            <h1>KIVAK</h1>
          </Link>

          <Nav />

          <Link
            href="/contact"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "hidden lg:inline-flex",
            })}
          >
            Contact Me
          </Link>

          <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </header>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </>
  );
}
