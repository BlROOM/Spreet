import Wrapper from "./shared/Wrapper";
import Performances from "./performances/Performances";
export default function Event() {
  return (
    <main className="relative flex flex-col justify-center w-[1280px] m-auto pt-[96px] text-grayscale-100">
      <Wrapper className="p-4 flex">
        <Performances />
      </Wrapper>
    </main>
  );
}
