import React, { ReactNode } from "react";

type Modal = {
  children: ReactNode;
};
export default function Modal({ children }: Modal) {
  return (
    <dialog className="fixed z-10 inset-0 overflow-y-auto" open>
      <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center">
        {children}
      </div>
    </dialog>
  );
}
