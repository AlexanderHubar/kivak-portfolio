import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";
import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { SliderControls } from "@/components/ui/slider-controls";

const HIGHLIGHTS = [
  "Coverage for weddings, parties, corporate functions, and more.",
  "Skilled photographers who know how to seize the moment.",
  "A mix of candid and posed shots for a comprehensive story.",
  "Quick turnaround for you to relive the day's highlights.",
];

export function Services() {
  return (
    <section className="px-4 lg:px-20 mb-20">
      <SectionHeader subtitle="Services" title="My Photography Services">
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
            View All Services
          </Link>
        </div>
      </SectionHeader>
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <Image
          className="rounded-2xl rounded-bl-[85px] mb-7 lg:order-1"
          src="/event.png"
          alt="event"
          width={773}
          height={625}
        />

        <div>
          <h3 className="font-semibold text-3xl text-grey-50 mb-3 uppercase">
            Events <ActionLink />
          </h3>
          <p className="text-sm text-grey-50 leading-6 mb-7">
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it&apos;s a wedding, corporate
            event, or milestone celebration, we&apos;re there to document every
            heartfelt moment. We blend into the background, ensuring natural and
            candid shots that reflect the emotions of the day.
          </p>

          <h4 className="text-sm font-medium mb-3 text-white">
            Service Highlights
          </h4>
          <ul className="grid gap-2">
            {HIGHLIGHTS.map((highlight, index) => (
              <li
                key={index}
                className="flex gap-4 items-center text-grey-50 p-4 border border-dark-12 rounded-2xl"
              >
                <Image src="/star.svg" width={30} height={30} alt="Star" />
                <span className="text-sm uppercase text-grey-70">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex content-center">
            <SliderControls className="lg:hidden mx-auto mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
