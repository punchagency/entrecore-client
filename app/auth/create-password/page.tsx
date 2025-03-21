"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeOff } from "lucide-react";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import AuthHeader  from "@/components/ui/auth-header";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { SubmitButton } from "@/components/ui/auth-buttons";
import AuthFooter from "@/components/ui/auth-footer";

const formSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .regex(/[0-9!@#$%^&*(),.?":{}|<>]/, "Password must contain at least 1 number or special character"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

export default function CreatePasswordPage() {
  const router = useRouter();
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/onboarding");
    console.log(values);
  }

  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
      <AuthHeader buttonText="Login" onButtonClick={() => router.push("/auth/login")} />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[20vw]">
          <div className="flex flex-col gap-[0.521vw] mb-10">
            <h1 className="text-primary font-medium text-[1.667vw]">Password</h1>
            <p className="text-soft-black text-[1.042vw]">Create your password</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FloatingLabelInput
                          label="Password"
                          type={passwordVisible.password ? "text" : "password"}
                          {...field}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            field.onChange(e);
                            checkPasswordValidation(e.target.value);
                          }}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                          onClick={() => setPasswordVisible(prev => ({ ...prev, password: !prev.password }))}
                        >
                          {passwordVisible.password ? (
                            <EyeOff className="h-4 w-4 text-gray" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FloatingLabelInput
                          label="Confirm Password"
                          type={passwordVisible.confirmPassword ? "text" : "password"}
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                          onClick={() => setPasswordVisible(prev => ({ ...prev, confirmPassword: !prev.confirmPassword }))}
                        >
                          {passwordVisible.confirmPassword ? (
                            <EyeOff className="h-4 w-4 text-gray" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-8">
                <ul className="flex flex-col gap-[0.521vw] w-full">
                  <li className="flex items-center gap-[0.521vw]">
                    <FaCircleCheck
                      size={20}
                      className={validations.hasLowerCase ? "text-primary" : "text-white bg-gray rounded-full"}
                    />
                    <p className="text-soft-black text-[0.677vw]">At least 1 lower-case letter</p>
                  </li>
                  <li className="flex items-center gap-[0.521vw]">
                    <FaCircleCheck
                      size={20}
                      className={validations.hasUpperCase ? "text-primary" : "text-white bg-gray rounded-full"}
                    />
                    <p className="text-soft-black text-[0.677vw]">At least 1 upper-case letter</p>
                  </li>
                  <li className="flex items-center gap-[0.521vw]">
                    <FaCircleCheck
                      size={20}
                      className={validations.hasNumberOrSpecial ? "text-primary" : "text-white bg-gray rounded-full"}
                    />
                    <p className="text-soft-black text-[0.677vw]">At least 1 number or special character letter (e.g @#$)</p>
                  </li>
                  <li className="flex items-center gap-[0.521vw]">
                    <FaCircleCheck
                      size={20}
                      className={validations.hasMinLength ? "text-primary" : "text-white bg-gray rounded-full"}
                    />
                    <p className="text-soft-black text-[0.677vw]">At least 8 total characters</p>
                  </li>
                </ul>
              </div>

              <SubmitButton text="Next" />
            </form>
          </Form>
        </div>
      </div>
      <AuthFooter  />
    </div>
  );
}