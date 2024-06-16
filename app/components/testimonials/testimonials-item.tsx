import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Socials } from "../socials";
import { Rating } from "@/components/ui/rating";

type TestimonialsItemProps = {
  name: string;
  location: string;
  rating: number;
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  review: string;
};

export function TestimonialsItem({
  name,
  location,
  rating,
  socials,
  review,
}: TestimonialsItemProps) {
  return (
    <li className="p-6 border border-dark-12 rounded-lg bg-dark-6 grid gap-5 relative overflow-hidden">
      <div className="w-60 h-60 rounded-3xl bg-gradient-to-t from-[#18181B] to-[rgba(24,24,27,0)] absolute z-0 rotate-[30deg] -top-24 -right-20" />
      <div className="flex justify-between items-center z-10">
        <div>
          <p className="text-base text-white font-medium leading-4">{name}</p>
          <span className="text-sm text-grey-50">{location}</span>
        </div>

        <Socials />
      </div>

      <div className="z-10">
        <Rating rating={rating} />
      </div>

      <p className="text-base font-medium text-white z-10">
        Damien&apos;s photography doesn&apos;t just capture moments; it captures
        emotions. Hes work is simply mesmerizing.
      </p>
    </li>
  );
}
