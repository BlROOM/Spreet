import MainCarousel from "./MainCarousel";
import ScrollAnimationSection from "../ScrollAnimatonSection";

export default function Main() {
  return (
    <div className="max-w-[1280px]">
      <MainCarousel />
      {/* scroll animation section */}
      <ScrollAnimationSection />
    </div>
  );
}
