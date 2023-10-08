import React from "react";
import { UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<any>;
  id: string;
  error?: boolean;
  success?: boolean;
  helperText?: string;
};

export const FormInput = ({
  className,
  register,
  helperText,
  error,
  success,
  id,
  ...props
}: InputProps) => {
  return (
    <div className="sm:w-6/12 w-10/12 flex flex-col gap-4 space-y-1 text-center">
      <input
        className={twMerge(
          "outline-none border-b-2 px-2 py-1 md:p-3 drop-shadow-md disabled:bg-inherit border-slate-200 rounded md:rounded-lg placeholder:text-slate-400",
          className,
          error && "border-red-500",
          success && "border-slate-300"
        )}
        autoComplete="off"
        id={id}
        {...register(id)}
        {...props}
      />
      {helperText && (
        <p className="text-center block mt-2 text-xs opacity-70 font-semibold text-red-500">
          {helperText}
        </p>
      )}
    </div>
  );
};