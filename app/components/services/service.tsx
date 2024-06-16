import Image from "next/image";

import { ActionLink } from "@/components/ui/action-link";
import { SliderControls } from "@/components/ui/slider-controls";

type ServiceProps = {
  image: string;
  title: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export function Service({
  image,
  title,
  description,
  highlightsTitle,
  highlights,
  onPrevButtonClick,
  onNextButtonClick,
}: ServiceProps) {
  return (
    <div className="embla__slide_full">
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <Image
          className="rounded-2xl rounded-bl-[85px] mb-7 lg:order-1"
          src={image}
          alt={title}
          width={773}
          height={625}
        />

        <div>
          <h3 className="font-semibold text-3xl text-grey-50 mb-3 uppercase">
            {title} <ActionLink />
          </h3>
          <p className="text-sm text-grey-50 leading-6 mb-7">{description}</p>

          <h4 className="text-sm font-medium mb-3 text-white">
            {highlightsTitle}
          </h4>
          <ul className="grid gap-2">
            {highlights.map((highlight, index) => (
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
            <SliderControls
              onPrevButtonClick={onPrevButtonClick}
              onNextButtonClick={onNextButtonClick}
              className="lg:hidden mx-auto mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
