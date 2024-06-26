import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderControlsProps = {
  className?: string;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export function SliderControls({
  className,
  onPrevButtonClick,
  onNextButtonClick,
}: SliderControlsProps) {
  return (
    <ul
      className={cn(
        "border border-dark-12 p-2 rounded-full flex gap-2",
        className
      )}
    >
      <li className="h-10 w-10 rounded-full bg-gradient-to-b group hover:bg-gradient-to-t from-dark-20 to-dark-20/0 p-px">
        <button
          onClick={onPrevButtonClick}
          className="transition-all duration-300 ease-out inline-grid place-content-center group-hover:shadow-primary group-hover:bg-primary-55 bg-dark-12 h-full w-full rounded-full"
        >
          <ChevronLeft />
        </button>
      </li>
      <li className="h-10 w-10 rounded-full bg-gradient-to-b group hover:bg-gradient-to-t from-dark-20 to-dark-20/0 p-px">
        <button
          onClick={onNextButtonClick}
          className="transition-all duration-300 ease-out inline-grid place-content-center group-hover:shadow-primary group-hover:bg-primary-55 bg-dark-12 h-full w-full rounded-full"
        >
          <ChevronRight />
        </button>
      </li>
    </ul>
  );
}
