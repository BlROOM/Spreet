"use client";

import { useEffect, useRef, useState } from "react";
import handleClickSlide from "./_utils/handleClickSlide";
import blackLeftArrow from "/blackLeftSamll.png";
import blackRightArrow from "/public/blackRightSmall.png";
import Image from "next/image";

export default function Home() {
  const spreetRef = useRef<HTMLDivElement>(null);
  const [caroselX, setCaroselX] = useState<number>(0);
  useEffect(() => {
    const getSpreetCordinate = () => {
      if (!spreetRef.current) return;
      const listLeft = spreetRef.current.getBoundingClientRect().left;
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
    <main className="flex flex-col items-center justify-between p-24 border">
      메인 페이지입니다.
      <div className="h-[300px] w-3/4 relative border border-black box-border">
        <div className="w-full h-full relative overflow-hidden rounded-lg">
          <Image
            src="/images/blackLeftLarge.png"
            className="cursor-pointer bg-inherit w-15 h-25 text-7xl text-white absolute flex justify-center items-center z-50 top-1/2 transform -translate-y-1/2 "
            alt="leftArrow"
            width={50}
            height={30}
            onClick={() => {
              handleClickSlide(
                "left",
                carouselDataList,
                spreetRef,
                2,
                caroselX
              );
            }}
          />
          <Image
            src="/images/blackRightSmall.png"
            className="cursor-pointer bg-inherit w-15 h-25 text-[100px] text-white absolute flex justify-center items-center z-99 top-1/2 transform -translate-y-1/2 right-0 m-0 pointer-events-auto"
            alt="rightArrow"
            width={50}
            height={30}
            onClick={() => {
              handleClickSlide(
                "right",
                carouselDataList,
                spreetRef,
                2,
                caroselX
              );
            }}
          />
          <div
            className="relative w-full h-full flex items-center transform translate-custom transition-transform duration-500 ease-in-out"
            ref={spreetRef}
          >
            <div className="flex h-3/5 items-center">
              {carouselDataList.map((item, idx) => {
                return (
                  <div key={idx} className="relative w-full h-full ml-32">
                    <div
                      key={idx}
                      className="absolute w-full h-full z-1 opacity-10 bg-gray-700 rounded-2xl pointer-events-none"
                    ></div>
                    <div className="slide-item__shorts-title">
                      <div className="user-profile">
                        <div className="user-image">
                          <Image
                            src={item}
                            width={100}
                            height={100}
                            alt="main_image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
