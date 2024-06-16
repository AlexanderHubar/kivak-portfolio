import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SliderControls } from "@/components/ui/slider-controls";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function PortfolioItem({ title, date }) {
  return (
    <li>
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
    </li>
  );
}

const PROJECTS = [
  { title: "Faces of Resilience", date: "March 2024" },
  { title: "A Wedding Tale", date: "January 2022" },
  { title: "Product Elegance", date: "January 2020" },
];

export function Portfolio() {
  return (
    <section className="px-4 lg:px-20 mb-20">
      <SectionHeader subtitle="Portfolio" title="Explore My photography work">
        <div className="flex items-center gap-5">
          <SliderControls className="hidden lg:flex" />
          <Link
            href="/"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "inline-block",
            })}
          >
            View All Works
          </Link>
        </div>
      </SectionHeader>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <PortfolioItem
            title={project.title}
            date={project.date}
            key={project.title}
          />
        ))}
      </ul>
      <div className="flex content-center">
        <SliderControls className="lg:hidden mx-auto mt-10" />
      </div>
    </section>
  );
}
