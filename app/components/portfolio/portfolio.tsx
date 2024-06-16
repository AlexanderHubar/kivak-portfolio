import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SliderControls } from "@/components/ui/slider-controls";
import Link from "next/link";
import { PortfolioItem } from "./portfolio-item";

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
