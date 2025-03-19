"use client";

import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignupForm";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
    <Navbar buttonText="Login" onButtonClick={() => router.push("/login")} />
    <div className="flex-1 flex items-center justify-center">
      <SignupForm />
    </div>
  </div>
  )
}
 

export default Login;

