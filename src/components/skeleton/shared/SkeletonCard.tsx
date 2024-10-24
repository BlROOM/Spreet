import { ReactNode } from "react";
import Skeleton from "./Skeleton";
import SkeletonIcon from "./SkeletonIcon";
import SkeletonText from "./SkeletonText";
import SkeletonWrapper from "./SkeletonWrapper";

type SkeletonCardProps = {
  children?: ReactNode;
  className: string;
};

export default function SkeletonCard({
  children,
  className,
}: SkeletonCardProps) {
  return (
    <SkeletonWrapper className={`bg-grayscale-300 rounded-2xl ${className}`}>
      {children}
    </SkeletonWrapper>
  );
}
