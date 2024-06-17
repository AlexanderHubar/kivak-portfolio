import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { ROUTES } from "./nav";
import { Socials } from "../socials";

import { cn } from "@/lib/utils";

type MobileMenuProps = {
  isMenuOpen: boolean;
};

export function MobileMenu({ isMenuOpen }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed flex flex-col inset-0 z-10 top-[82px] bg-dark-3 px-4 py-8 lg:hidden"
        >
          <ul className="grid gap-3 mb-auto">
            {ROUTES.map((route, idx) => {
              const isActive = pathname === route.href;

              return (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 40,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.name}
                  className="w-full p-px rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                >
                  <Link
                    className={cn(
                      "flex items-center justify-between w-full p-4 rounded-xl bg-dark-3",
                      {
                        "bg-dark-8": isActive,
                      }
                    )}
                    href={route.href}
                  >
                    <span
                      className={cn("flex gap-1 text-sm", {
                        "font-semibold": isActive,
                      })}
                    >
                      {route.name}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ y: "150%" }}
            animate={{ y: "0" }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <Socials />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
