import BattlesList from "@/components/EventsList";
import Wrapper from "@/components/shared/Wrapper";

export default function Battles() {
  return (
    <section className="relative flex flex-1 flex-col justify-center m-auto text-grayscale-100 pt-10">
      <Wrapper className="p-2 flex flex-wrap w-full sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-screen-85 md:h-screen-85 sm:h-screen-80 xxs:h-screen-80 ">
        <BattlesList />
      </Wrapper>
    </section>
  );
}
