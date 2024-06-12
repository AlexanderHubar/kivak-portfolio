import Image from "next/image";
import { LetsWorkTogether } from "./lets-work-together";
import { ServiceMarquee } from "./services-marquee";

export function Hero() {
  return (
    <>
      <section className="px-4 lg:px-20 py-10 lg:py-14 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 relative">
        <div className="uppercase">
          <span className="text-grey-40 text-sm lg:text-lg">
            Stunning Photography by
          </span>
          <h2 className="text-4xl lg:text-6xl font-semibold">Artem Kivak</h2>
        </div>
        <img
          src="/figure2.svg"
          alt="abstract figure"
          className="absolute lg:block top-0 h-full object-cover lg:-translate-x-1/2 lg:left-1/2 right-4 z-[-1]"
        />
        <div>
          <LetsWorkTogether />
        </div>
      </section>
      <ServiceMarquee />
      <div className="grid auto-rows-[424px] grid-cols-3 gap-4 px-4 lg:px-20 mb-20">
        <div className="row-span-1 rounded-xl border-slate-400/10  dark:bg-neutral-900 relative">
          <Image
            fill
            className="object-cover w-full h-full rounded-xl"
            src="https://images.unsplash.com/photo-1531369201-4f7be267b1de?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="row-span-1 rounded-xl border-slate-400/10  dark:bg-neutral-900 col-span-2 relative">
          <Image
            fill
            className="object-cover w-full h-full rounded-xl"
            src="https://plus.unsplash.com/premium_photo-1711387451641-406e08cf075b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="row-span-1 rounded-xl border-slate-400/10  dark:bg-neutral-900 col-span-2 relative">
          <Image
            fill
            className="object-cover w-full h-full rounded-xl"
            src="https://images.unsplash.com/photo-1516831906352-1623190ca036?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="row-span-1 rounded-xl border-slate-400/10 dark:bg-neutral-900 relative">
          <Image
            fill
            className="object-cover w-full h-full rounded-xl"
            src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
