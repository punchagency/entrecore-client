"use client";

import * as z from "zod";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { Axios } from "@/app/config/axios";
import AuthHeader from "@/components/auth-header";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomPhoneInput from "@/components/phone-input";
import { FloatingLabelInput } from "@/components/floating-label-input";
import { GoogleButton, SubmitButton } from "@/components/auth-buttons";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

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

interface ValidationError {
  type: string;
  loc: string[];
  msg: string;
  input: Record<string, unknown>;
  url: string;
}

interface ErrorResponse {
  detail: ValidationError[];
}

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

  const { mutate: submitSignup, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      const response = await Axios.post("/signup", data);
      return response.data;
    },
    onSuccess: (data) => {
      // Store the email in localStorage
      localStorage.setItem("signup_email", data.email);
      toast.success("Account created successfully!", {
        position: "top-center",
      });
      setTimeout(() => {
        router.push("/auth/create-password");
      }, 1500);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      if (error.response?.data?.detail) {
        const validationErrors = error.response.data.detail;
        validationErrors.forEach((err) => {
          const field = err.loc[1] as "email" | "first_name" | "last_name" | "phone_number";
          form.setError(field, {
            type: "manual",
            message: err.msg,
          });
        });
        toast.error("Please fix the errors in the form", {
          position: "top-center",
        });
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
        });
      }
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    submitSignup(data);
  };

  const handleGoogleSignup = () => {
    console.log("Google signup");
  };

  const isFormValid = form.formState.isValid && !isPending;

  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
      <AuthHeader buttonText="Login" onButtonClick={() => router.push("/auth/login")} />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[25vw]">
          <div className="flex flex-col gap-[0.521vw] mb-6">
            <h1 className="text-primary font-medium text-[1.667vw]">Signup</h1>
            <p className="text-soft-black text-[1.042vw]">Create your account</p>
          </div>

          <GoogleButton text="Sign up with Google" onClick={handleGoogleSignup} />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
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
                    <FormItem className="w-full">
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
                        <CustomPhoneInput value={field.value} onChange={field.onChange} />
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

              <SubmitButton
                text={isPending ? "Creating Account..." : "Create Account"}
                disabled={!isFormValid || isPending}
                isLoading={isPending}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
