import React from "react";
import Logo from "@/assets/logos/Spreet.svg";

export default function LoadingModal() {
  return (
    <div className="animate-pulse w-fit flex flex-col items-center">
      <Logo className="w-32 h-32" />
      <div className="w-16 h-16 relative rounded-full border-8 border-redpoint-500 border-t-primary-50 animate-spin"></div>
    </div>
  );
}
