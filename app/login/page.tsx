"use client";

import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col bg-[#F0F4FF]">
    <Navbar buttonText="Create Account" onButtonClick={() => router.push("/signup")} />
    <div className="flex-1 flex items-center justify-center">
      <LoginForm />
    </div>
  </div>
  )
}
 

export default Login;

