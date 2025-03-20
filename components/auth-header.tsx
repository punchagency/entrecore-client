import Logo from "@/public/svgs/logo";


interface AuthHeaderProps {
  buttonText?: string;
  showOnboardingButtons?: boolean;
  onButtonClick?: () => void;
}

const AuthHeader = ({
  buttonText = "Login",
  showOnboardingButtons = false,
  onButtonClick
}: AuthHeaderProps) => {
  return (
    <div className="flex h-[70.003px] justify-between items-center py-[0.781vw] px-[1.563vw] eudoxus-sans">
      <Logo />

      <div className="flex items-center gap-4 h-full">

        {showOnboardingButtons && (
          <>
            <button className="text-gray-600 font-medium">
              About Us
            </button>
            <button className="text-gray-600 font-medium">
              Features
            </button>
            <button className="text-gray-600 font-medium">
              Pricing
            </button>
          </>
        )}

        <button
          onClick={onButtonClick}
          className="bg-primary text-white px-[1.563vw] rounded-[0.321vw] font-medium h-full cursor-pointer text-[1.042vw]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AuthHeader;
