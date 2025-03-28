"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaCircleCheck } from "react-icons/fa6";



export default function PasswordForm() {
  const PasswordFormSchema = z
    .object({
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
        .regex(
          /[0-9!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least 1 number or special character"
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords must match",
      path: ["confirmPassword"],
    });

  const [passwordVisible, setPasswordVisible] = useState({
    password: false,
    confirmPassword: false,
  });
  const [validations, setValidations] = useState({
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumberOrSpecial: false,
    hasMinLength: false,
  });

  const form = useForm<z.infer<typeof PasswordFormSchema>>({
    resolver: zodResolver(PasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const checkPasswordValidation = (password: string) => {
    setValidations({
      hasLowerCase: /[a-z]/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasNumberOrSpecial: /[0-9!@#$%^&*(),.?":{}|<>]/.test(password),
      hasMinLength: password.length >= 8,
    });
  };

  function onSubmit(values: z.infer<typeof PasswordFormSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col justify-center bg-white rounded-sm px-[1.563vw] py-[1.302vw] gap-[1.302vw] border-l-[1px] border-[#181818]">
      <div className="flex flex-col gap-[0.521vw]">
        <h1 className="text-[1.042vw] font-bold text-soft-black">Change Password</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full relative">
                    <FormControl>
                      <Input
                        type={passwordVisible.password ? "text" : "password"}
                        placeholder="New password"
                        {...field}
                        className="w-full"
                        onChange={(e) => {
                          field.onChange(e);
                          checkPasswordValidation(e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage className="text-[0.781vw] absolute top-full" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                      onClick={() =>
                        setPasswordVisible((prev) => ({
                          ...prev,
                          password: !prev.password,
                        }))
                      }
                    >
                      {passwordVisible.password ? (
                        <EyeOff className="h-4 w-4 text-gray" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray" />
                      )}
                    </Button>
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-5">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full relative">
                    <FormControl>
                      <Input
                        type={passwordVisible.confirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage className="text-[0.781vw] absolute top-full" />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                      onClick={() =>
                        setPasswordVisible((prev) => ({
                          ...prev,
                          confirmPassword: !prev.confirmPassword,
                        }))
                      }
                    >
                      {passwordVisible.confirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray" />
                      )}
                    </Button>
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2">
              <Button
                type="submit"
                variant="secondary"
                className="w-full bg-[#EFF4FF] text-soft-black text-[0.781vw] font-bold cursor-pointer"
              >
                Update Password
              </Button>
            </div>
          </div>
          <div className="mt-8">
            <ul className="flex flex-col gap-[0.521vw] w-full">
              <li className="flex items-center gap-[0.521vw]">
                <FaCircleCheck
                  size={16}
                  className={
                    validations.hasLowerCase
                      ? "text-primary"
                      : "text-[#EFF4FF] bg-gray rounded-full"
                  }
                />
                <p className="text-soft-black text-[0.677vw]">At least 1 lower-case letter</p>
              </li>
              <li className="flex items-center gap-[0.521vw]">
                <FaCircleCheck
                  size={16}
                  className={
                    validations.hasUpperCase
                      ? "text-primary"
                      : "text-[#EFF4FF] bg-gray rounded-full"
                  }
                />
                <p className="text-soft-black text-[0.677vw]">At least 1 upper-case letter</p>
              </li>
              <li className="flex items-center gap-[0.521vw]">
                <FaCircleCheck
                  size={16}
                  className={
                    validations.hasNumberOrSpecial
                      ? "text-primary"
                      : "text-[#EFF4FF] bg-gray rounded-full"
                  }
                />
                <p className="text-soft-black text-[0.677vw]">
                  At least 1 number or special character letter (e.g @#$)
                </p>
              </li>
              <li className="flex items-center gap-[0.521vw]">
                <FaCircleCheck
                  size={16}
                  className={
                    validations.hasMinLength
                      ? "text-primary"
                      : "text-[#EFF4FF] bg-gray rounded-full"
                  }
                />
                <p className="text-soft-black text-[0.677vw]">At least 8 total characters</p>
              </li>
            </ul>
          </div>
        </form>
      </Form>
    </div>
  );
}