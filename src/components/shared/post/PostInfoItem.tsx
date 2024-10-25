import { ReactNode } from "react";
import { IconType } from "react-icons";

type PostInfoItem = {
  icon: IconType;
  children: ReactNode;
  className?: string;
};

export default function PostInfoItem({
  icon: Icon,
  children,
  className,
}: PostInfoItem) {
  return (
    <div className={`flex gap-2 items-center text-grayscale-100 ${className}`}>
      <Icon />
      <p className="text-md whitespace-nowrap truncate">{children}</p>
    </div>
  );
}
