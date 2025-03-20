"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import AuthHeader from "@/components/ui/auth-header";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import Image from "next/image";
import GoogleIconImage from "@/public/Svgs/google-icon-image.svg";
import { SubmitButton } from "@/components/ui/auth-buttons";
import AuthFooter from "@/components/ui/auth-footer";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }


  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
      <AuthHeader buttonText="Login" onButtonClick={() => router.push("/auth/login")} />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[20vw]">
          <div className="flex flex-col gap-[0.521vw] mb-6">
            <h1 className="text-primary font-medium text-[1.667vw]">Forgot Password</h1>
            <p className="text-soft-black text-[1.042vw]">Enter your email address for a link to update your password.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FloatingLabelInput label="Email" {...field} />
                        {field.value && z.string().email().safeParse(field.value).success && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton text="Send Reset Info" />
            </form>
          </Form>

          
        </div>
      </div>
              <AuthFooter  />
    </div>
  );
}
