'use client'

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const spreetRef = useRef<HTMLDivElement>(null);
  const [caroselX, setCaroselX] = useState(0);
  useEffect(() => {
    const getSpreetCordinate = () => {
      if (!spreetRef.current) return;
      const listLeft = spreetRef.current.getBoundingClientRect().left;
      setCaroselX(listLeft);
    };

    getSpreetCordinate();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      메인 페이지입니다.
    </main>
  );
}
