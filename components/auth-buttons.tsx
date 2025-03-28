import Image from "next/image";
import { Button } from "@/components/ui/button";
import GoogleIconImage from "@/public/Svgs/google-icon-image.svg";
import { ArrowRight, Loader2 } from "lucide-react";

interface GoogleButtonProps {
  text: string;
  onClick: () => void;
}

interface SubmitButtonProps {
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export function GoogleButton({ text, onClick }: GoogleButtonProps) {
  return (
    <Button
      variant="outline"
      className="w-full mb-6 px-[0.781vw] py-[1.5vw] text-primary font-bold cursor-pointer"
      onClick={onClick}
    >
      <Image src={GoogleIconImage} alt="Google Icon" className="w-[1.1vw] h-[1.1vw]" />
      {text}
    </Button>
  );
}

export function SubmitButton({ text, disabled, isLoading }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full px-[0.781vw] py-[1.5vw] mt-4 font-bold cursor-pointer"
      disabled={disabled}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {text}
        </>
      ) : (
        <>
          {text}
          <ArrowRight size={32} strokeWidth={2.75} />
        </>
      )}
    </Button>
  );
}
