import DelinkAccount from "@/components/delink-account";
import EmailForm from "@/components/email-form";
import PasswordForm from "@/components/pass-form";
import { Button } from "@/components/ui/button";

export default function AccountSettingsPage() {
 
  return (
    <div className="flex flex-col gap-[2.083vw]">
      <div className="space-y-[1.302vw]" id="login-signup">
        <h1 className="text-[1.25vw] font-bold text-soft-black">Account Settings</h1>
        <EmailForm />
        <PasswordForm />
      </div>
      <div className="space-y-[1.302vw]" id="additional-settings">
        <h1 className="text-[1.25vw] font-bold text-soft-black">Additional Settings</h1>
        <div className="flex items-center justify-between gap-[1.302vw] bg-white rounded-sm px-[1.563vw] py-[1.302vw] border-l-[1px] border-[#181818]">
          <h2 className="text-[1.042vw] font-bold text-soft-black">Delete Account</h2>
          <Button
            type="submit"
            variant="secondary"
            className="bg-[#EFF4FF] text-soft-black text-[0.781vw] font-bold cursor-pointer"
          >
            Delete My User Account
          </Button>
        </div>
      </div>
      <DelinkAccount />
    </div>
  );
}
