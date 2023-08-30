import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function CustomInput({ label, ...props }: InputProps) {
  return (
    <div className="labelLayout">
      <label htmlFor="customInput" className="inputTitle">
        {label}
      </label>
      <div>
        <input id="customInput" className="inputText" {...props} />
      </div>
    </div>
  );
}
