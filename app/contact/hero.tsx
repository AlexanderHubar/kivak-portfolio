import Image from "next/image";
import { Socials } from "../components/socials";

export function ContactHero() {
  return (
    <section className="mx-4 lg:mx-20 flex pb-10 lg:pb-0 border-b border-dark-12">
      <div className="my-20 h-[630px] w-full items-center rounded-3xl overflow-hidden relative hidden lg:flex">
        <div className="bg-dark-3 z-10 h-fit p-10 rounded-tr-3xl rounded-br-3xl relative before:content-[''] before:absolute before:h-10 before:w-10 before:bg-transparent before:rounded-bl-[50%] before:-top-10 before:left-0 before:shadow-[0_20px_0_0_#070707] after:content-[''] after:absolute after:h-10 after:w-10 after:bg-transparent after:rounded-bl-[50%] after:-bottom-10 after:left-0 after:shadow-[0_20px_0_0_#070707] after:rotate-90">
          <span className="text-sm lg:text-base text-grey-50 font-semibold uppercase">
            Contact Me
          </span>
          <h2 className="text-2xl lg:text-5xl text-white font-semibold uppercase mb-5">
            Get in Touch with Me
          </h2>
          <p className="max-w-[780px] text-grey-50">
            Step into a world of timeless photography with Damien Braun. Explore
            our range of photography services, each crafted to tell your unique
            story through captivating images. Whether it&apos;s the magic of
            portraits, the emotion of events, or the allure of commercial
            photography, we&apos;re here to bring your vision to life.
          </p>
        </div>
        <Image
          alt="cover image"
          fill
          className="object-cover"
          src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="bg-dark-3 p-3 pr-0 z-10 rounded-l-full absolute right-0 top-10 before:content-[''] before:absolute before:h-10 before:w-10 before:bg-transparent before:rounded-bl-[50%] before:-top-10 before:right-0 before:shadow-[0_20px_0_0_#070707] before:rotate-[280deg] after:content-[''] after:absolute after:h-10 after:w-10 after:bg-transparent after:rounded-bl-[50%] after:-bottom-10 after:right-0 after:shadow-[0_20px_0_0_#070707] after:rotate-180">
          <Socials />
        </div>

        <div className="bg-dark-3 p-10 z-10 rounded-tl-3xl absolute right-0 bottom-0 before:content-[''] before:absolute before:h-10 before:w-10 before:bg-transparent before:rounded-bl-[50%] before:bottom-0 before:-left-10 before:shadow-[0_20px_0_0_#070707] before:rotate-[280deg] after:content-[''] after:absolute after:h-10 after:w-10 after:bg-transparent after:rounded-bl-[50%] after:-top-10 after:right-0 after:shadow-[0_20px_0_0_#070707] after:rotate-[280deg]">
          <p className="text-grey-50 uppercase text-sm max-w-44">
            Scroll Down To Send me a Message
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full lg:hidden">
        <Image
          width={600}
          height={229}
          alt="cover image"
          className="object-cover w-full h-56 rounded-xl mt-10 mb-10"
          src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="flex mx-auto -mt-[60px] p-3 bg-dark-3 rounded-full">
          <Socials />
        </div>

        <div>
          <span className="text-sm lg:text-base text-grey-50 font-semibold uppercase">
            Contact Me
          </span>
          <h2 className="text-2xl lg:text-5xl text-white font-semibold uppercase mb-5">
            Get in Touch with Me
          </h2>
          <p className="max-w-[780px] text-grey-50">
            Step into a world of timeless photography with Damien Braun. Explore
            our range of photography services, each crafted to tell your unique
            story through captivating images. Whether it&apos;s the magic of
            portraits, the emotion of events, or the allure of commercial
            photography, we&apos;re here to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
