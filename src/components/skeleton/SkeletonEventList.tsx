import { ITEM_HEIGHT, ITEM_WIDTH } from "@/constants/dimensions";
import SkeletonCard from "./shared/SkeletonCard";
import SkeletonWrapper from "./shared/SkeletonWrapper";
import Skeleton from "./shared/Skeleton";

export default function SkeletonEventList() {
  return (
    <SkeletonWrapper className="w-full flex flex-wrap gap-8">
      <Skeleton className={`w-[320px] h-screen-60 rounded-3xl`} />
      <Skeleton className={`w-[320px] h-screen-60 rounded-3xl`} />
      <Skeleton className={`w-[320px] h-screen-60 rounded-3xl`} />
      <Skeleton className={`w-[320px] h-screen-60 rounded-3xl`} />
      <Skeleton className={`w-[320px] h-screen-60 rounded-3xl`} />
      <Skeleton className={`w-[320px] h-screen-60 rounded-3xl`} />
    </SkeletonWrapper>
  );
}
