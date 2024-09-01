import React from "react";
import EyeHide from "@/assets/icons/eye_hide.svg";
import EyeShow from "@/assets/icons/eye_show.svg";
import useToggleEye from "@/store/useToggleEyeStore";

type FieldKey = "password" | "passwordConfirm";

type ToggleEyeIcon = {
  className?: string;
  fieldKey: FieldKey; //state또는 filed를 식별하는 key
  // 현재 password, passwordConfirm 에 사용
};

// 사용자가 누를수 있는 눈 아이콘
export default function ToggleEyeIcon({ className, fieldKey }: ToggleEyeIcon) {
  const { visibleStates, toggleVisibility } = useToggleEye();
  const isVisible = visibleStates[fieldKey] || false;

  return isVisible ? (
    <EyeHide className={className} onClick={() => toggleVisibility(fieldKey)} />
  ) : (
    <EyeShow className={className} onClick={() => toggleVisibility(fieldKey)} />
  );
}
