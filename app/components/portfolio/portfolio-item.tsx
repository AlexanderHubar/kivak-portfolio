import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type PortfolioItemProps = {
  title: string;
  date: string;
};

export function PortfolioItem({ title, date }: PortfolioItemProps) {
  return (
    <div className="embla__slide">
      <div className="grid">
        <Image
          className="w-full object-cover rounded-2xl mb-4 h-96"
          src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={500}
          height={519}
        />
        <div className="flex justify-between">
          <div>
            <p className="text-base text-white font-medium leading-4">
              Faces of Resilience
            </p>
            <span className="text-sm text-grey-50">March 2024</span>
          </div>

          <button className="uppercase self-center text-sm text-white font-medium border-b border-white/20 gap-1 flex">
            View Project <ArrowUpRight strokeWidth={1.5} className="-mr-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
