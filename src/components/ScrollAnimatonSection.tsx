"use client";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import eventLogo from "@/assets/logos/event.png";
import classLogo from "@/assets/logos/class.jpg";
import socialLogo from "@/assets/logos/social.jpg";
import AnimatedEventCard from "./AnimatedCard";
const ScrollAnimationSection = () => {
  const eventAnimation = useScrollAnimation();
  const lectureAnimation = useScrollAnimation();
  const socialAnimation = useScrollAnimation();

  const animatedCardItems = [
    {
      logo: eventLogo,
      alt: "event image",
      href: "/event",
      animationRef: eventAnimation,
      title: "행사",
      content:
        "다가오는 힙합 페스티벌, 공연 \n그리고 문화 이벤트들을 확인하고 직접 참여해보세요.",
      className: `border-2 border-redpoint-900 rounded-2xl justify-self-start transform transition-all duration-1000 border-opacity-70 animate-fadeIn`,
    },
    {
      logo: classLogo,
      alt: "class image",
      href: "/class",
      animationRef: lectureAnimation,
      title: "강의/워크숍",
      content:
        "음악, 춤, 패션 다양한 힙한문화를\n배울 수 있는 강의와 워크숍을 만나보세요.",
      className: `border-2 border-redpoint-900 rounded-2xl justify-self-start transform transition-all duration-1200 border-opacity-70 ${
        lectureAnimation.isVisible
          ? "translate-x-50 opacity-100"
          : "translate-x-full opacity-0"
      }`,
    },
    {
      logo: socialLogo,
      alt: "social image",
      href: "/social",
      animationRef: socialAnimation,
      title: "소셜",
      content:
        "소통하고 네트워킹할 수 있는\n힙한 소셜 이벤트와 모임에 참여하세요.",
      className: `border-2 border-redpoint-900 rounded-2xl justify-self-start transform transition-all duration-1200 border-opacity-70 ${
        socialAnimation.isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-[-50%] opacity-0"
      }`,
    },
  ];

  return (
    <section className="flex-col grid grid-rows-3 gap-6 p-8 text-grayscale-100">
      {animatedCardItems.map((card, index) => (
        <AnimatedEventCard key={index} {...card} />
      ))}
    </section>
  );
};

export default ScrollAnimationSection;
