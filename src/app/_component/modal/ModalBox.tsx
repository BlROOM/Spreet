import { forwardRef } from "react";

function ModalBox(
  {
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  },
  ref: React.ForwardedRef<HTMLDialogElement>
) {
  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}

export default forwardRef(ModalBox);
