export const MAIN_PATHNAME = "/";
export const KAKAKO_CDN_PATHNAME =
  "https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js";
export const ROUTE_API_PATHNAME = "/api/auth/";
export const CLASS_PATHNAME = "/class";
export const SOCIAL_PATHNAME = "/social";
export const EVENT_PATHNAME = "/event";
export const PERFORMANCE_PATHNAME = "/event/performances";
export const BATTLE_PATHNAME = "/event/battle";

export const sideNavItems = [
  {
    id: "event",
    label: "진행중인 행사",
    path: EVENT_PATHNAME,
    subNav: [
      { id: "performances", label: "공연", path: PERFORMANCE_PATHNAME },
      { id: "battle", label: "배틀", path: BATTLE_PATHNAME },
    ],
  },
];
