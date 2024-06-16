"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SliderControls } from "@/components/ui/slider-controls";
import { TestimonialsItem } from "./testimonials-item";

import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";

const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    location: "New York, NY",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
    rating: 5,
    review:
      "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
  },
  {
    name: "Emily Johnson",
    location: "New York, NY",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
    rating: 4,
    review:
      "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
  },
  {
    name: "Emily Johnson",
    location: "New York, NY",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
    rating: 3,
    review:
      "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
  },
  {
    name: "Emily Johnson",
    location: "New York, NY",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
    rating: 4,
    review:
      "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
  },
  {
    name: "Emily Johnson",
    location: "New York, NY",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
    },
    rating: 4,
    review:
      "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing.",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="px-4 lg:px-20 mb-20 embla">
      <SectionHeader subtitle="Testimonials" title="What My Clients Say">
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
            View All Testimonials
          </Link>
        </div>
      </SectionHeader>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialsItem
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              socials={testimonial.socials}
              rating={testimonial.rating}
              review={testimonial.review}
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
