import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TPost } from "@/type/post";
import { IconType } from "react-icons";

export type InfoItemData = {
  icon: IconType;
  label: string | number;
};

export const getPostInfoItems = (post: TPost): InfoItemData[] => [
  { icon: FaCalendarAlt, label: post.duration },
  { icon: IoMdTime, label: post.operating_hours },
  { icon: GoPeople, label: post.age_rating },
  { icon: GrMapLocation, label: post.location },
  { icon: FaRegQuestionCircle, label: post.genre },
];
