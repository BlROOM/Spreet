import { ReactNode } from "react";
import { IconType } from "react-icons";

type PostInfoItem = {
  icon: IconType;
  children: ReactNode;
};

export default function PostInfoItem({ icon: Icon, children }: PostInfoItem) {
  return (
    <div className="flex gap-2 items-center">
      <Icon />
      {children}
    </div>
  );
}
