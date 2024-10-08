import Wrapper from "./shared/Wrapper";

export default function Event() {
  return (
    <main className="relative flex flex-col justify-center w-[1280px] m-auto pt-[96px] text-grayscale-100">
      <Wrapper>
        <h3 className="text-2xl font-bold">진행중인 행사</h3>
        <h4 className="text-lg font-semibold mt-2">Dance</h4>
      </Wrapper>
    </main>
  );
}
