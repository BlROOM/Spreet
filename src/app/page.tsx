import MainCarousel from "@/components/MainCarousel";

export default function Home() {
  return (
    <main className="relative flex justify-center flex-col gap-10 w-[1280px] m-auto h-[100%]">
      <MainCarousel />

      {/* scroll animation section */}
      <section className="flex-col grid grid-rows-3 gap-6 border-primary-600 border-2 border-">
        <div className="border-2 border-primary-900 w-1/2 h-64 justify-self-start">
          행사
        </div>

        <div className="border-2 border-primary-900 w-1/2 justify-self-end">
          강의
        </div>

        <div className="border-2 border-primary-900 w-1/2 justify-self-start">
          영상
        </div>
      </section>
    </main>
  );
}
