import Wrapper from "./shared/Wrapper";
import Performances from "./performances/Performances";
export default function Event() {
  return (
    <section className="relative flex flex-col justify-center max-w-[1280px] m-auto text-grayscale-100">
      <Wrapper className="p-4 flex flex-wrap w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-screen-85 md:h-screen-85 sm:h-screen-80 xxs:h-screen-80 ">
        <Performances />
      </Wrapper>
    </section>
  );
}
