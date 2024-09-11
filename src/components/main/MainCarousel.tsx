"use client";
import Image from "next/image";
import handleClickSlide from "@/utils/handleClickSlide";

import { useEffect, useRef, useState } from "react";
import { li } from "framer-motion/client";

export default function MainCarousel() {
  const spreetRef = useRef<HTMLDivElement>(null);
  const [caroselX, setCaroselX] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const getSpreetCordinate = () => {
      if (!spreetRef.current) return;
      const listLeft = spreetRef.current.getBoundingClientRect().left;
      // console.log("listLeft", listLeft);
      setCaroselX(listLeft);
    };

    getSpreetCordinate();
  }, []);
  const carouselDataList = [
    "/images/main1.jpg",
    "/images/main3.jpg",
    "/images/main4.jpg",
  ];

  return (
    <div className="w-full relative box-border">
      <div className="w-[1280px] m-auto relative overflow-hidden">
        <Image
          src="/images/blackLeftLarge.png"
          className="cursor-pointer bg-inherit w-15 h-25 text-7xl text-white absolute flex justify-center items-center z-30 top-1/2 transform -translate-y-1/2 "
          alt="leftArrow"
          width={50}
          height={30}
          onClick={() => {
            handleClickSlide(
              "left",
              carouselDataList.length,
              spreetRef,
              currentSlide,
              caroselX
            );

            setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
          }}
        />
        <Image
          src="/images/blackRightSmall.png"
          className="cursor-pointer bg-inherit w-15 h-25 text-[100px] text-white absolute flex justify-center items-center z-30 top-1/2 transform -translate-y-1/2 right-0 m-0 pointer-events-auto"
          alt="rightArrow"
          width={50}
          height={30}
          onClick={() => {
            handleClickSlide(
              "right",
              carouselDataList.length,
              spreetRef,
              currentSlide,
              caroselX
            );
            setCurrentSlide((prev) => (prev > 3 ? 1 : prev + 1));
          }}
        />
        <div
          className="relative w-[1280px] flex items-center transform translate-custom transition-transform duration-500 ease-in-out "
          ref={spreetRef}
        >
          {carouselDataList.map((item, idx) => {
            return (
              <div key={idx} className="relative ">
                <div className="w-[1280px] h-[500px]">
                  <Image src={item} layout="fill" alt="main_image" />
                </div>
              </div>
            );
          })}
        </div>
        <ul className="absolute z-40 flex gap-x-4 bottom-4 left-1/2 transform -translate-x-1/2">
          {carouselDataList.map((item, idx) => {
            return (
              <li
                key={item}
                className={`border-2 border-grayscale-100 w-5 h-5 rounded-full cursor-pointer  ${
                  currentSlide === idx + 1 && "bg-grayscale-100"
                }`}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
