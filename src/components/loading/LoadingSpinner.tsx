import React from "react";
import Logo from "@/assets/logos/spreet.svg";

type LoadingSpinner = {
  className?: string;
};

export default function LoadingSpinner({ className }: LoadingSpinner) {
  return (
    <div className={`animate-pulse w-fit flex flex-col items-center gap-8`}>
      <Logo className="w-full h-16" />
      <div className="w-16 h-16 relative rounded-full border-8 border-redpoint-500 border-t-primary-50 animate-spin"></div>
    </div>
  );
}
