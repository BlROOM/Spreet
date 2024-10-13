import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TPost } from "@/type/post"; // 필요한 타입 import
import { IconType } from "react-icons";

// InfoItemData 타입
export type InfoItemData = {
  icon: IconType;
  label: string | number;
};

// 함수로 만들어서 동적으로 반환
export const getPostInfoItems = (post: TPost): InfoItemData[] => [
  { icon: FaCalendarAlt, label: post.duration },
  { icon: IoMdTime, label: post.operatingHours },
  { icon: GoPeople, label: post.ageRating },
  { icon: GrMapLocation, label: post.location },
  { icon: FaRegQuestionCircle, label: post.genre },
];
