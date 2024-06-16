import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SliderControls } from "@/components/ui/slider-controls";
import Link from "next/link";
import { TestimonialsItem } from "./testimonials-item";

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
];

export function Testimonials() {
  return (
    <section className="px-4 lg:px-20 mb-20">
      <SectionHeader subtitle="Testimonials" title="What My Clients Say">
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
            View All Testimonials
          </Link>
        </div>
      </SectionHeader>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
      </ul>
      <div className="flex content-center">
        <SliderControls className="lg:hidden mx-auto mt-10" />
      </div>
    </section>
  );
}
