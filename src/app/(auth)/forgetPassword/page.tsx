import { Metadata } from "next";
import ForgetPassForm from "@/components/(auth)/forgetPassword/ForgetPassForm";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
};

const ForgetPasswordPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-mainColor ">
      <div className="flex justify-center items-center    mx-auto border-2  px-11 py-[150px] rounded-[40px] bg-[#0DB760] ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
            <div className="  flex  justify-center items-center gap-x-2 text-primaryWhite font-semibold text-2xl">
              <Link href={"/login"}>
              <IoIosArrowRoundBack size={40} className="cursor-pointer"></IoIosArrowRoundBack>
              </Link>
              <h2 className="  text-primaryWhite">
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
