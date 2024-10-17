import { usePathname } from "next/navigation";
import { EventCategory } from "@/type/eventCategory";
import {
  BATTLE_PATHNAME,
  EVENT_PATHNAME,
  PERFORMANCE_PATHNAME,
} from "@/constants/path";
const useEventCategory = (): EventCategory => {
  const pathname = usePathname();

  if (pathname === EVENT_PATHNAME) {
    return "all"; // 전체 데이터를 가져옴
  } else if (pathname === PERFORMANCE_PATHNAME) {
    return "performance"; // 공연 데이터
  } else if (pathname === BATTLE_PATHNAME) {
    return "battle"; // 배틀 데이터
  }

  return "all";
};

export default useEventCategory;
