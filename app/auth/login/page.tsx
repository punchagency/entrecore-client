"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import AuthHeader from "@/components/auth-header";
import { FloatingLabelInput } from "@/components/floating-label-input";
import { GoogleButton, SubmitButton } from "@/components/auth-buttons";

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

  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
      <AuthHeader buttonText="Create Account" onButtonClick={() => router.push("/auth/signup")} />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[25vw]">
          <div className="flex flex-col gap-[0.521vw] mb-6">
            <h1 className="text-primary font-medium text-[1.667vw]">Login</h1>
            <p className="text-soft-black text-[1.042vw]">Welcome back</p>
          </div>

          <GoogleButton text="Login with Google" onClick={handleGoogleLogin} />

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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FloatingLabelInput
                          type={passwordVisible ? "text" : "password"}
                          label="Password"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? (
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

              <SubmitButton text="Login" />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
