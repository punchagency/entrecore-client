"use client";

import * as z from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

import { Axios } from "@/app/config/axios";
import AuthHeader from "@/components/auth-header";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitButton } from "@/components/auth-buttons";
import { FloatingLabelInput } from "@/components/floating-label-input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await Axios.post("/password-reset/request", {
        email: values.email,
      });

      toast.success("Reset link sent to your email");
      router.push("/auth/login");
    } catch (error) {
      console.error("Error sending reset email:", error);
      const errorMessage =
        (error as AxiosError<{ message: string }>)?.response?.data?.message ||
        "Failed to send reset email. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
      <AuthHeader buttonText="Login" onButtonClick={() => router.push("/auth/login")} />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[25vw]">
          <div className="flex flex-col gap-[0.521vw] mb-6">
            <h1 className="text-primary font-medium text-[1.667vw]">Forgot Password</h1>
            <p className="text-soft-black text-sm">
              Enter your email address for a link to update your password.
            </p>
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

              <SubmitButton
                text={isLoading ? "Sending..." : "Send Reset Info"}
                disabled={isLoading}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
