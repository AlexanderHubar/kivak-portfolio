import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function LetsWorkTogether() {
  return (
    <h2 className="text-white text-3xl leading-[3rem] lg:text-4xl font-semibold uppercase lg:leading-[3.25rem] lg:m-auto">
      Let’s{" "}
      <Link
        className="inline-block -mb-4 py-4 px-7 rounded-full bg-primary-55 shadow-primary hover:bg-primary-60 transition-colors duration-300 ease-in-out group"
        href="/"
      >
        <ArrowUpRight
          className="h-5 w-5 group-hover:scale-125 transition-all duration-200 ease-in-out"
          color="white"
        />
      </Link>
      <br />
      Work Together
    </h2>
  );
}
