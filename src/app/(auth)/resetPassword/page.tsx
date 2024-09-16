import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import ResetPassowrdForm from "@/components/(auth)/ResetPassowrdForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forget Password",
};

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-mainColor ">
      <div className="flex justify-center items-center w-[441px]   mx-auto border-2  md:px-12 px-11 py-10 rounded-[40px] bg-[#FFF9FA] ">
        <div>
          <div className="mb-6  flex flex-col justify-center items-center gap-y-4">
            <div>
              <Image src={logo} alt="logImage"></Image>
              <h1 className=" mt-3 font-extrabold text-mainColor">YUMQUICK</h1>
            </div>
            <div className="text-center space-y-4 mb-4">
              <div className="text-2xl  font-bold  text-center ">
                <h2 className="flex justify-center items-center">
                  <Link href={"/verifyEmail"}>
                  <IoIosArrowRoundBack size={40} />
                  </Link>
                  Reset Password
                </h2>
              </div>
              <p>Your password must be 8-10 character long.</p>
            </div>
          </div>
         <ResetPassowrdForm></ResetPassowrdForm>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
