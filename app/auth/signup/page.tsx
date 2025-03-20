"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import AuthHeader from "@/components/ui/auth-header";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import CustomPhoneInput from "@/components/ui/phone-input";
import { GoogleButton, SubmitButton } from "@/components/ui/auth-buttons";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  first_name: z
    .string()
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be less than 20 characters"),
  last_name: z
    .string()
    .min(3, "Must be at least 3 characters")
    .max(20, "Must be less than 20 characters"),
  phone_number: z.string().min(10, "Invalid phone number"),
});

export default function SignupPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      phone_number: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push("/auth/create-password");
  }

  const handleGoogleSignup = () => {
    console.log("Google signup");
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
      <AuthHeader buttonText="Login" onButtonClick={() => router.push("/auth/login")} />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[20vw]">
          <div className="flex flex-col gap-[0.521vw] mb-6">
            <h1 className="text-primary font-medium text-[1.667vw]">Signup</h1>
            <p className="text-soft-black text-[1.042vw]">Create your account</p>
          </div>

          <GoogleButton
            text="Sign up with Google"
            onClick={handleGoogleSignup}
          />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <FloatingLabelInput label="First Name" {...field} />
                          {field.value && !form.getFieldState("first_name").error && (
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
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <FloatingLabelInput label="Last Name" {...field} />
                          {field.value && !form.getFieldState("last_name").error && (
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
              </div>

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
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <CustomPhoneInput
                          value={field.value}
                          onChange={field.onChange}
                        />
                        {field.value &&
                          field.value.length >= 10 &&
                          !form.getFieldState("phone_number").error && (
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

              <SubmitButton text="Create Password" />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
