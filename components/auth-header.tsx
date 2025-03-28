import { Button } from "@/components/ui/button";
import Logo from "@/public/svgs/logo";

interface AuthHeaderProps {
  buttonText?: string;
  showOnboardingButtons?: boolean;
  onButtonClick?: () => void;
  currentTab?: string;
  setCurrentTab?: (tab: string) => void;
}

const AuthHeader = ({
  buttonText = "Login",
  showOnboardingButtons = false,
  onButtonClick,
  currentTab,
  setCurrentTab,
}: AuthHeaderProps) => {
  return (
    <div className="flex h-[70.003px] justify-between items-center py-[0.781vw] px-[1.563vw]">
      <Logo />

      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-4 h-full">
          {showOnboardingButtons && (
            <div className="flex items-center gap-[1.625vw] bg-[#EFF4FF] rounded-[60px]">
              <Button
                onClick={() => setCurrentTab?.("You")}
                className={`text-gray-600 bg-transparent font-medium  px-[2.625vw] cursor-pointer hover:bg-transparent transition-all duration-300 ${currentTab === "You" ? "bg-primary text-white rounded-[60px] py-[0.313vw]" : ""}`}
              >
                You
              </Button>
              <Button
                onClick={() => setCurrentTab?.("Company")}
                className={`text-gray-600 bg-transparent font-medium  px-[2.625vw] cursor-pointer hover:bg-transparent transition-all duration-300 ${currentTab === "Company" ? "bg-primary text-white rounded-[60px] py-[0.313vw]" : ""}`}
              >
                Company
              </Button>
              <Button
                onClick={() => setCurrentTab?.("Link Account")}
                className={`text-gray-600 bg-transparent font-medium px-[2.625vw] cursor-pointer hover:bg-transparent transition-all duration-300 ${currentTab === "Link Account" ? "bg-primary text-white rounded-[60px] py-[0.313vw]" : ""}`}
              >
                Link Account
              </Button>
            </div>
          )}

          <button
            onClick={onButtonClick}
            className="bg-primary text-white px-[1.563vw] rounded-[0.321vw] font-medium h-full cursor-pointer text-sm"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
