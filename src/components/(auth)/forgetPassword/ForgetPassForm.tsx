"use client";

import { useForgetPassMutation } from "@/redux/api/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { Error_Modal, Success_model } from "@/utils/models";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ForgetPassForm = () => {
  const route = useRouter();
  const [forgetPassword, { isLoading }] = useForgetPassMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res = await forgetPassword(values).unwrap();
      Success_model({ title: "An otp sent to your email" });
      sessionStorage.setItem("token", res?.data?.token);
      sessionStorage.setItem("email", values?.email as string);
      route.push("/verifyEmail");
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
      style={{ width: "480px" }}
    >
      <Form.Item<FieldType>
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          {
            type: "email",
            message: "Please enter a valid email address!",
          },
        ]}
      >
        <Input size="large" placeholder="Email" style={{ border: "none" }} />
      </Form.Item>

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
        Send OTP
      </Button>
    </Form>
  );
};

export default ForgetPassForm;
