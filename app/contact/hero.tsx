import Image from "next/image";

export function ContactHero() {
  return (
    <section className="mx-4 lg:mx-20 flex">
      <div className="my-20 h-[630px] flex w-full items-center rounded-3xl overflow-hidden relative">
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
      </div>
    </section>
  );
}
