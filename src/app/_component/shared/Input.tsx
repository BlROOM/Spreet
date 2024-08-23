import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type Input = {
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
  className?: string;
};

export default function Input({
  label,
  type = "text",
  register,
  name,
  error,
  className,
}: Input) {
  return (
    <div className="mb-1 h-[90px]">
      <label className="text-[#333333] font-semibold">{label}</label>
      <input
        type={type}
        {...register(name)}
        className={className}
        placeholder={label}
      />
      {error && <p className="text-[red] text-sm">{error.message}</p>}
    </div>
  );
}
