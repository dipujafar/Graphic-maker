import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/image/logo.png";
import LoginForm from "@/components/(auth)/login/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  description:
    "Admin login for YUMQUICK. Access the secure portal to manage healthcare services, oversee patient records, and administer YUMQUICK medicine and care operations.",
};

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-mainColor ">
      <div className="flex justify-center items-center   mx-auto border-2  md:px-12 px-12 py-12 rounded-[40px] bg-[#0DB760] ">
        <div>
          <div className="mb-10   flex flex-col justify-center items-center gap-y-4 text-primaryWhite ">
            <h2 className="text-2xl  font-bold  text-primaryWhite">Login to Account</h2>
            <p>Please enter your email and password to continue</p>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
