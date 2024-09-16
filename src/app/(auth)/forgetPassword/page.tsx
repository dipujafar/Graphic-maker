import { Metadata } from "next";
import Image from "next/image";

import ForgetPassForm from "@/components/(auth)/forgetPassword/ForgetPassForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
};

const ForgetPasswordPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-mainColor ">
      <div className="flex justify-center items-center w-[441px]   mx-auto border-2   px-11 py-10 rounded-[40px] bg-[#0DB760] ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
            <div className="mb-10   flex flex-col justify-center items-center gap-y-4 text-primaryWhite ">
              <h2 className="text-2xl  font-bold  text-primaryWhite">
                Forgot Password
              </h2>
            </div>
          </div>
          <ForgetPassForm></ForgetPassForm>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
