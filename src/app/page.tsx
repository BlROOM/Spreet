import MainCarousel from "@/components/MainCarousel";
import ScrollAnimationSection from "@/components/ScrollAnimatonSection";

export default function Home() {
  return (
    <main className="relative flex justify-center flex-col gap-10 w-[1280px] m-auto pt-[96px]">
      <MainCarousel />
      {/* scroll animation section */}
      <ScrollAnimationSection />
    </main>
  );
}
