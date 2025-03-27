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

const emailSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
  });
  
  export default function EmailForm() {
    const form = useForm<z.infer<typeof emailSchema>>({
      resolver: zodResolver(emailSchema),
      defaultValues: {
        email: "",
      },
    });
  
    async function onSubmit(values: z.infer<typeof emailSchema>) {
      try {
        console.log("Email:", values.email);
      } catch (error) {
        console.error("Error updating email:", error);
      }
    }
  
    return (
      <div className="flex flex-col gap-[1.042vw] bg-white rounded-sm px-[1.563vw] py-[1.302vw] border-l-[1px] border-[#181818]">
        <h2 className="text-[1.042vw] font-bold text-soft-black">Email Address</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-gray-500">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-4">
                      <Input placeholder="Enter your primary email address" {...field} />
                      <Button
                        type="submit"
                        variant="secondary"
                        className="bg-[#EFF4FF] text-soft-black text-[0.781vw] font-bold cursor-pointer"
                      >
                        Update Email
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[0.781vw]"/>
                </FormItem>
              )}
            />
            <p className="text-[0.781vw] text-soft-black">
              For your security, we will send an email to verify any change to your email address.
            </p>
          </form>
        </Form>
      </div>
    );
  }
  