import React, { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type Input = {
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
  className?: string;
  children?: ReactNode;
};

export default function Input({
  label,
  type = "text",
  register,
  name,
  error,
  className,
  children,
}: Input) {
  return (
    <div className="relative relmb-1 h-[90px]">
      <label className="text-[#333333] font-semibold">{label}</label>
      <input
        type={type}
        {...register(name)}
        className={className}
        placeholder={label}
      />
      {children}
      {error && <p className="text-[red] text-sm">{error.message}</p>}
    </div>
  );
}
