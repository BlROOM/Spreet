import Performances from "./Performances";
import Wrapper from "./shared/Wrapper";

export default function Event() {
  return (
    <section className="relative flex flex-1 flex-col justify-center m-auto text-grayscale-100 pt-10">
      <Wrapper className="p-4 flex flex-wrap w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-screen-85 md:h-screen-85 sm:h-screen-80 xxs:h-screen-80 ">
        <Performances />
      </Wrapper>
    </section>
  );
}
