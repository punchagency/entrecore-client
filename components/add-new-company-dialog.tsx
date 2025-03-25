import { Flag } from "lucide-react";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { FormField, FormItem, FormMessage,Form, FormControl  } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddNewCompanyDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const formSchema = z.object({
    name: z.string().min(3, { message: "Company name must be at least 3 characters" })
    .regex(/^[a-zA-Z\s]+$/, { 
      message: "Company name can only contain letters and spaces" 
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const handleSubmit  = async (values: z.infer<typeof formSchema>)=> {
    console.log(values);
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#EFF4FF]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex flex-col gap-2">
              <Flag size={24} className="text-primary" />
              <p className="text-[0.833vw] text-primary font-bold">Create a New Company Profile</p>
              <h4 className="text-[1.25vw] font-bold my-[0.417vw] text-soft-black">
                What is the name of your company?
              </h4>
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="">
          <div className="flex items-center justify-between gap-2 p-[0.417vw] rounded-md text-[0.885vw] font-medium">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className=" w-full">
                <div >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem > 
                        <FormControl >
                          <Input type="text" placeholder="Enter Company Name"  {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
        </DialogDescription>
        <DialogFooter className="flex gap-2 pt-3">
          <Button variant="ghost" onClick={() => setOpen(false)} className="cursor-pointer">
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => form.handleSubmit(handleSubmit)()}
            className="cursor-pointer bg-primary text-white"
          >
            Create Company
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCompanyDialog;
