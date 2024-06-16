import { useCallback } from "react";
import { UseEmblaCarouselType } from "embla-carousel-react";

export const usePrevNextButtons = (emblaApi: UseEmblaCarouselType[1]) => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};
