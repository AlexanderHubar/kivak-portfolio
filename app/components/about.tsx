import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Socials } from "./socials";

export function About() {
  return (
    <section className="px-4 lg:px-20 mb-20">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between pb-5 border-b border-dark-12 mb-10">
        <div>
          <span className="text-sm lg:text-base text-grey-50 font-semibold uppercase">
            About
          </span>
          <h2 className="text-2xl lg:text-5xl text-white font-semibold uppercase">
            I am Artem
          </h2>
        </div>

        <Link
          href="/"
          className={buttonVariants({
            variant: "default",
            size: "lg",
            className: "self-start",
          })}
        >
          Know More
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-5 lg:items-center">
        <Image
          width={630}
          height={585}
          className="object-cover w-full rounded-xl h-96 mb-5"
          src="https://images.unsplash.com/photo-1516831906352-1623190ca036?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="border border-dark-12 rounded-2xl divide-y divide-dark-12">
          <div className="p-6">
            <div className="flex gap-1 items-center mb-3">
              <img src="/star-small.svg" alt="star" />
              <h3 className="text-grey-80 font-medium text-lg ">
                Introduction
              </h3>
            </div>
            <p className="text-sm text-grey-70 leading-6">
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world&apos;s beauty as I see it. Based in
              the enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </p>
          </div>
          <div className="p-6 flex flex-col">
            <div className="flex gap-1 items-center mb-3">
              <img src="/star-small.svg" alt="star" />
              <h3 className="text-grey-80 font-medium text-lg ">
                Contact Information
              </h3>
            </div>
            <div className="grid gap-3 lg:gap-5 mb-5 lg:grid-cols-2">
              <div className="grid">
                <span className="text-sm text-white font-medium">Email</span>
                <a
                  href="mailto:damienbraun@gmail.com"
                  className="text-grey-70 text-base hover:underline"
                >
                  damienbraun@gmail.com
                </a>
              </div>
              <div className="grid">
                <span className="text-sm text-white font-medium">Email</span>
                <a
                  href="tel:damienbraun@gmail.com"
                  className="text-grey-70 text-base hover:underline"
                >
                  +00 000000000
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-4">
              <div className="self-start">
                <Socials />
              </div>

              <div className="grid gap-3 lg:gap-2 lg:grid-cols-2 items-center lg:ml-auto">
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  Let’s Work
                </Link>

                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
