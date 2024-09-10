import { useEffect, useState, useRef, useCallback } from "react";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      });
    },
    [isVisible]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "500px",
      threshold: 0.1,
    };

    // const element = elementRef.current;
    // console.log("---element", element, isVisible);

    const observer = new IntersectionObserver(handleIntersection, options);

    if (elementRef.current) observer.observe(elementRef.current);

    // return () => {
    //   if (element) observer.unobserve(element);
    // };
  }, [isVisible, handleIntersection]);

  return { elementRef, isVisible };
};

export default useScrollAnimation;
