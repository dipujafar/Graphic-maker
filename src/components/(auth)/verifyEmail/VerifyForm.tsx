"use client";
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "@/redux/api/authApi";
import { useAppSelector } from "@/redux/hooks";
import { Error_Modal, Success_model } from "@/utils/models";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  otp?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const VerifyEmailForm = () => {
  const route = useRouter();
  const { user }: { user: any } = useAppSelector((state) => state.auth);
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
  const [reSendOtp] = useResendOtpMutation();


  //handle otp verification
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res = await verifyOtp(values).unwrap();
      sessionStorage.setItem("token", res?.data?.token);
      Success_model({ title: "Otp verified successfully." });
      sessionStorage.removeItem("email");
      route.push("/resetPassword");
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  // handle re-sen otp
  const handleResend = async () => {

    try {
      const email = sessionStorage.getItem("email");
      const res = await reSendOtp({email}).unwrap();
      sessionStorage.setItem("token", res?.data?.token);
      Success_model({ title: "An otp re-sent to your email" });
      
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType> name="otp" rules={[{ required: true }]}>
        <Input.OTP size="large" />
      </Form.Item>

      <p
        onClick={handleResend}
        className="mb-3 text-end font-medium text-white cursor-pointer"
      >
        Resend
      </p>

      <Button
        loading={isLoading}
        htmlType="submit"
        size="large"
        block
        style={{
          backgroundColor: "#F8FAFC",
          color: "#0DB760",
          border: "none",
        }}
      >
        Verify Email
      </Button>
    </Form>
  );
};

export default VerifyEmailForm;
