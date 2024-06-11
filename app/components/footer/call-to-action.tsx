import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-10 px-5 lg:px-14 mx-4 lg:mx-0 py-10 lg:py-20 border-x border-dark-12 relative">
      <Image
        width={201}
        height={200}
        className="absolute hidden lg:block left-[-201px] -translate-y-1/2 top-1/2"
        src="/figure1.svg"
        alt="Figure 1"
      />
      <p className="uppercase text-grey-50 text-sm lg:text-base font-semibold text-center">
        A more meaningful home for photography
      </p>
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
    </div>
  );
}
