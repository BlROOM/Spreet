"use client";

import { useEffect, useRef, useState } from "react";
import handleClickSlide from "./_utils/handleClickSlide";
import blackLeftArrow from "/blackLeftSamll.png";
import blackRightArrow from "/public/blackRightSmall.png";
import Image from "next/image";

export default function Home() {
  const spreetRef = useRef<HTMLDivElement>(null);
  const [caroselX, setCaroselX] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  useEffect(() => {
    const getSpreetCordinate = () => {
      if (!spreetRef.current) return;
      const listLeft = spreetRef.current.getBoundingClientRect().left;
      console.log('listLeft',listLeft )
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
    <main className=" relative w-[1920px] h-[500px]">
      <div className="w-full relative border border-black box-border">
        <div className="w-[1280px] m-auto relative overflow-hidden">
          <Image
            src="/images/blackLeftLarge.png"
            className="cursor-pointer bg-inherit w-15 h-25 text-7xl text-white absolute flex justify-center items-center z-50 top-1/2 transform -translate-y-1/2 "
            alt="leftArrow"
            width={50}
            height={30}
            onClick={() => {
              handleClickSlide(
                "left",
                carouselDataList.length ,
                spreetRef,
                currentSlide,
                caroselX
              );
              
              setCurrentSlide((prev) => prev > 3  ? 1 :  prev + 1 )
            }}
          />
          <Image
            src="/images/blackRightSmall.png"
            className="cursor-pointer bg-inherit w-15 h-25 text-[100px] text-white absolute flex justify-center items-center z-50 top-1/2 transform -translate-y-1/2 right-0 m-0 pointer-events-auto"
            alt="rightArrow"
            width={50}
            height={30}
            onClick={() => {
              handleClickSlide(
                "right",
                carouselDataList.length ,
                spreetRef,
                currentSlide,
                caroselX
              );
              setCurrentSlide((prev) => prev > 3  ? 1 :  prev + 1 )
            }}
          />
          <div
            className="relative w-[1920px] flex items-center transform translate-custom transition-transform duration-500 ease-in-out "
            ref={spreetRef}
          >
            {/* <div className="flex items-center w-[1280px] "  > */}
              {carouselDataList.map((item, idx) => {
                return (
                  <div key={idx} className="relative ">
                    <div className="w-[1280px] h-[500px]">
                      <Image
                          src={item}
                          layout="fill"
                          alt="main_image"
                          // width={1000}
                          // height={1000}
                          // className="absolute w-full h-full" 
                        />
                    </div>
                  </div>
                );
              })}
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
