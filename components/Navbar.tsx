import Logo from "@/public/Svgs/Logo";

interface NavbarProps {
  buttonText?: string;
  showOnboardingButtons?: boolean;
  onButtonClick?: () => void;
}

const Navbar = ({ 
  buttonText = "Login", // default value
  showOnboardingButtons = false,
  onButtonClick 
}: NavbarProps) => {
  return (
    <div className="flex h-[calc(3.646vw+0.581vh)] justify-between items-center py-[0.781vw] px-[1.563vw] eudoxus-sans">
      <Logo />
      
      <div className="flex items-center gap-4 h-full">
        {/* Onboarding-specific buttons */}
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
        
        {/* Main action button */}
        <button 
          onClick={onButtonClick}
          className="bg-blue-500 text-white px-[1.563vw] rounded-md font-medium h-full cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Navbar;