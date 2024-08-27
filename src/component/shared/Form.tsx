import React, { ReactNode, FormEventHandler } from "react";

type Form = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  className: string;
};

const Form = ({ onSubmit, children, className }: Form) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
};

export default Form;
