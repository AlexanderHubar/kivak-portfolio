"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SliderControls } from "@/components/ui/slider-controls";

import { PortfolioItem } from "./portfolio-item";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";

const PROJECTS = [
  { title: "Faces of Resilience", date: "March 2024" },
  { title: "A Wedding Tale", date: "January 2022" },
  { title: "Product Elegance", date: "January 2020" },
];

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="px-4 lg:px-20 mb-20 embla">
      <SectionHeader subtitle="Portfolio" title="Explore My photography work">
        <div className="flex items-center gap-5">
          <SliderControls
            onPrevButtonClick={onPrevButtonClick}
            onNextButtonClick={onNextButtonClick}
            className="hidden lg:flex"
          />
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
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {PROJECTS.map((project) => (
            <PortfolioItem
              title={project.title}
              date={project.date}
              key={project.title}
            />
          ))}
        </div>
      </div>
      <div className="flex content-center">
        <SliderControls
          onPrevButtonClick={onPrevButtonClick}
          onNextButtonClick={onNextButtonClick}
          className="lg:hidden mx-auto mt-10"
        />
      </div>
    </section>
  );
}
