import { Metadata } from "next";
import { IoIosArrowRoundBack } from "react-icons/io";
import ResetPassowrdForm from "@/components/(auth)/ResetPassowrdForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
};

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-mainColor ">
      <div className="flex justify-center items-center w-[441px]   mx-auto border-2  md:px-12 px-11 py-10 rounded-[40px] bg-[#0DB760] ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
            <div className="text-center space-y-4 mb-4">
              <div className="text-2xl  font-medium text-center ">
                <h2 className="flex justify-center items-center text-primaryWhite">
                  <Link href={"/verifyEmail"}>
                  <IoIosArrowRoundBack size={40} />
                  </Link>
                  Reset Password
                </h2>
              </div>
              <p className="text-primaryWhite">Your password must be 8-10 character long.</p>
            </div>
          </div>
         <ResetPassowrdForm></ResetPassowrdForm>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
