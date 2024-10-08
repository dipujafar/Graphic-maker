import { Metadata } from "next";
import VerifyEmailForm from "@/components/(auth)/verifyEmail/VerifyForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
};

const verifyEmail = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-mainColor ">
      <div className="flex justify-center items-center w-[550px]   mx-auto border-2  md:px-11 px-11 py-28 rounded-[40px] bg-[#0DB760] ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
           
            <div className="text-center space-y-4 mb-4">
              <div className="text-2xl  font-medium text-center ">
                <h2 className="flex justify-center items-center  text-primaryWhite">
                <Link href={"/forgetPassword"}>
                  <IoIosArrowRoundBack size={40} />
                  </Link>
                  Verify Email
                </h2>
              </div>
              <p className="text-primaryWhite">Please enter the otp we have sent you in your email.</p>
            </div>
          </div>
          <VerifyEmailForm></VerifyEmailForm>
        </div>
      </div>
    </div>
  );
};

export default verifyEmail;
