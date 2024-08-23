import React, { MouseEventHandler, ReactNode } from "react";

type Button = {
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
};

const Button = ({
  type = "button",
  onClick,
  children,
  className = "w-full rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
}: Button) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
