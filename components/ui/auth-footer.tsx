import Link from "next/link";


const AuthFooter = () => {
  return (
    <div className="position-fixed bottom-0 w-full py-[0.417vw]">
      <div className="flex gap-[4.521vw] w-full justify-center">
        <Link
          href="/terms&conditions"
          className="block text-primary text-center text-[0.729vw] font-bold mt-4 hover:underline"
        >
          Terms & Conditions
        </Link>
        <Link
          href="/privacy-policy"
          className="block text-primary text-center text-[0.729vw] font-bold mt-4 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
      <p className="text-gray text-center text-[0.729vw] font-medium mt-4">
        © 2024 All rights reserved.
      </p>
    </div>
  );
};

export default AuthFooter;
