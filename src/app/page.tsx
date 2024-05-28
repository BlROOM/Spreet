'use client'

import { useEffect, useRef, useState } from "react";
import handleClickSlide from "./_utils/handleClickSlide";
// import blackLeftArrow from "/public/blackLeftSamll.png";
// import blackRightArrow from "/public/blackRightSmall.png";
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
  const carouselDataList =  ['hiphop', 'dance', 'rap']
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      메인 페이지입니다.
      <div className="slide-row">
        <div className="slide-row__carousel">
          <Image
            src= '/public/blackLeftSmall.png'
            className="slide-row__button btn--left"
            alt="leftArrow"
            width={50}
            height={30}
            onClick={() => {
              handleClickSlide('left', carouselDataList, spreetRef, 2, caroselX);
            }}
          />
          <Image
            src='/public/blackLeftSmall.png'
            className="slide-row__button btn--right"
            alt="rightArrow"
            width={50}
            height={30}
            onClick={() => {
              handleClickSlide('right', carouselDataList, spreetRef, 2, caroselX);
            }}
          />
        <div className="slide-item__list" ref={spreetRef}>
          <div className="slide-item__wrapper">
              {carouselDataList.map((item, idx )=> {
                return (
                  <>
                    <div key={idx} className="slide-item__container">
                      <div key={idx} className="slide-item__bg"></div>
                      {/* <Video
                        width={'400px'}
                        height={'500px'}
                        src={item.videoUrl}
                      /> */}
                      <div className="slide-item__shorts-title">
                        <div className="user-profile">
                          <div className="user-image">
                            {/* <img src={item.profileImageUrl} /> */}
                          </div>
                          {/* {item.nickname} */}
                        </div>
                        {/* <p>
                          {item.title.length > 10
                            ? item.title.slice(0, 30) + '…'
                            : item.title}
                        </p> */}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
