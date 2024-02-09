import { useCallback, useRef } from "react";
import { reviewCardData } from "@/app/data";
import { dmSansFont } from "@/app/fonts";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import IconChevron from "@/app/icons/IconChevron";

const ReviewsPage = () => {
  const reviewCardRef = useRef<HTMLDivElement>(null);

  const smoothScroll = useCallback(
    (element: HTMLElement, scrollTarget: number, duration: number) => {
      const start = element.scrollLeft;
      const distance = scrollTarget - start;
      const startTime = performance.now();

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animateScroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const scrollPosition =
          easeInOutQuad(elapsedTime / duration) * distance + start;
        element.scrollLeft = scrollPosition;

        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    },
    []
  );

  const scrollToLeft = useCallback(() => {
    if (reviewCardRef.current) {
      const newScrollLeft =
        reviewCardRef.current.scrollLeft -
        reviewCardRef.current.offsetWidth +
        95;
      smoothScroll(reviewCardRef.current, newScrollLeft, 300);
    }
  }, [smoothScroll]);

  const scrollToRight = useCallback(() => {
    if (reviewCardRef.current) {
      const newScrollLeft =
        reviewCardRef.current.scrollLeft +
        reviewCardRef.current.offsetWidth -
        92;
      smoothScroll(reviewCardRef.current, newScrollLeft, 300);
    }
  }, [smoothScroll]);

  return (
    <div className="relative flex flex-col">
      <Image
        alt="reviews-page-background"
        src="/Image/ReviewsBackground.png"
        width={709}
        height={675}
        className="sm:absolute left-16 mx-auto w-[299.5px] h-[285.17px] sm:h-[675px] sm:w-[708.93px] -z-10"
      />
      <div className="mx-auto mt-[38px] sm:mt-0 sm:ml-auto sm:mr-16 sm:w-1/2 max-w-[257px] sm:max-w-[553px]">
        <div className="font-medium text-center sm:text-left text-[26px] sm:text-[40px] leading-[40px] sm:leading-[54px] text-gray-800">
          We&apos;ve stopped counting. Over 500 brands count on us.
        </div>
        <div className="text-xs sm:text-[20px] leading-3 mt-[17px] text-center sm:text-left font-medium sm:leading-[25px] sm:mt-[38px] text-gray-700">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </div>
      </div>
      <div
        className="mt-[45px] sm:mt-[91px] sm:py-10 px-4 sm:px-[49.5px] gap-[39px] flex flex-row overflow-x-auto no-scrollbar"
        ref={reviewCardRef}>
        {reviewCardData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <div className="mx-auto flex flex-row gap-[18px] mt-[27px] sm:mt-20">
        <div
          className="flex items-center justify-center w-[42px] sm:w-[65px] h-[42px] sm:h-[65px] rounded-full bg-gray-100 cursor-pointer"
          onClick={scrollToLeft}>
          <IconChevron
            height={32}
            width={32}
            direction="left"
            className="hover:scale-[1.2] transition-all -translate-x-0.5 active:scale-[0.9] w-[21px] h-[21px] sm:h-[32px] sm:w-[32px]"
          />
        </div>
        <div
          className="flex items-center justify-center w-[42px] sm:w-[65px] h-[42px] sm:h-[65px] rounded-full bg-gray-100 cursor-pointer"
          onClick={scrollToRight}>
          <IconChevron
            height={32}
            width={32}
            direction="right"
            className="hover:scale-[1.2] transition-all translate-x-0.5 active:scale-[0.9] w-[21px] h-[21px] sm:h-[32px] sm:w-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
