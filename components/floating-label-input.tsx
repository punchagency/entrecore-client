import * as React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingLabelInput = React.forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ label, type = "text", value, onChange, name, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value !== "";

    return (
      <div className="relative">
        <Input
          {...props}
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-[0.781vw] py-[1.5vw] border-1 border-gray text-soft-black bg-white rounded-[0.208vw] peer focus:outline-none focus:border-primary focus:ring-0 focus-visible:ring-0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <label
          htmlFor={name}
          className={`absolute left-3 transition-all duration-200
            ${
              isFocused || hasValue
                ? "-top-2.5 text-[0.625vw] bg-white px-1 text-gray"
                : "top-1/2 -translate-y-1/2 text-gray"
            } peer-focus:-top-2.5 peer-focus:text-[0.625vw] peer-focus:bg-white peer-focus:px-1 peer-focus:rounded-[0.208vw] peer-focus:text-primary pointer-events-none`}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";
