import { motion } from "framer-motion";

type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

const top = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: 45,
    translateY: 6,
  },
};
const center = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};
const bottom = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: -45,
    translateY: -6,
  },
};

export function Hamburger({ isOpen, onClick }: HamburgerProps) {
  const variant = isOpen ? "opened" : "closed";

  const lineProps = {
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  };

  return (
    <button
      onClick={onClick}
      className="lg:hidden border-t hover:bg-primary-55 hover:shadow-primary transition-all duration-200 ease-out border-l border-dark-12 p-5 rounded-tl-3xl"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x"
      >
        <motion.line
          variants={top}
          x1="4"
          x2="20"
          y1="6"
          y2="6"
          {...lineProps}
        />
        <motion.line
          variants={center}
          x1="4"
          x2="20"
          y1="12"
          y2="12"
          {...lineProps}
        />
        <motion.line
          variants={bottom}
          x1="4"
          x2="20"
          y1="18"
          y2="18"
          {...lineProps}
        />
      </motion.svg>
    </button>
  );
}
