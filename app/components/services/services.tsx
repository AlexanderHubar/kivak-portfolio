"use client";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";

import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SliderControls } from "@/components/ui/slider-controls";
import { Service } from "./service";

import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";

const SERVICES = [
  {
    image: "/event.png",
    title: "Events",
    description: `Our event photography service is dedicated to capturing the magic of
          your special occasions. Whether it's a wedding, corporate event,
          or milestone celebration, we're there to document every heartfelt
          moment. We blend into the background, ensuring natural and candid
          shots that reflect the emotions of the day.`,
    highlightsTitle: "Service Highlights",
    highlights: [
      "Coverage for weddings, parties, corporate functions, and more.",
      "Skilled photographers who know how to seize the moment.",
      "A mix of candid and posed shots for a comprehensive story.",
      "Quick turnaround for you to relive the day's highlights.",
    ],
  },
  {
    image: "/event.png",
    title: "Events",
    description: `Our event photography service is dedicated to capturing the magic of
          your special occasions. Whether it's a wedding, corporate event,
          or milestone celebration, we're there to document every heartfelt
          moment. We blend into the background, ensuring natural and candid
          shots that reflect the emotions of the day.`,
    highlightsTitle: "Service Highlights",
    highlights: [
      "Coverage for weddings, parties, corporate functions, and more.",
      "Skilled photographers who know how to seize the moment.",
      "A mix of candid and posed shots for a comprehensive story.",
      "Quick turnaround for you to relive the day's highlights.",
      "Coverage for weddings, parties, corporate functions, and more.",
      "Skilled photographers who know how to seize the moment.",
      "A mix of candid and posed shots for a comprehensive story.",
      "Quick turnaround for you to relive the day's highlights.",
      "Coverage for weddings, parties, corporate functions, and more.",
      "Skilled photographers who know how to seize the moment.",
      "A mix of candid and posed shots for a comprehensive story.",
      "Quick turnaround for you to relive the day's highlights.",
    ],
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [AutoHeight()]
  );

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="px-4 lg:px-20 mb-20 embla_full">
      <SectionHeader subtitle="Services" title="My Photography Services">
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
            View All Services
          </Link>
        </div>
      </SectionHeader>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container_full">
          {SERVICES.map((service, index) => (
            <Service
              onPrevButtonClick={onPrevButtonClick}
              onNextButtonClick={onNextButtonClick}
              image={service.image}
              title={service.title}
              description={service.description}
              highlightsTitle={service.highlightsTitle}
              highlights={service.highlights}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
