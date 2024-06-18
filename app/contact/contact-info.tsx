import { ArrowUpRight } from "lucide-react";

import { Section } from "./section";

export function ContactInfo() {
  return (
    <Section
      className="border-b border-dark-12"
      title="Contact Information"
      text="Feel free to reach out to us through various channels. We are available by phone, email, and social media for your convenience."
    >
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-x-10 lg:grid-cols-2 my-auto lg:flex-wrap">
        <button className="uppercase py-1 group text-base text-white font-medium border-b border-white/20 hover:border-white/50 transition-colors gap-1 flex w-fit">
          +1-123-456-7890{" "}
          <ArrowUpRight
            strokeWidth={1.5}
            className="-mr-1 group-hover:scale-110"
          />
        </button>
        <button className="uppercase py-1 group text-base text-white font-medium border-b border-white/20 hover:border-white/50 transition-colors gap-1 flex w-fit">
          info@damien braunphotography.com
          <ArrowUpRight
            strokeWidth={1.5}
            className="-mr-1 group-hover:scale-110"
          />
        </button>
      </div>
    </Section>
  );
}
