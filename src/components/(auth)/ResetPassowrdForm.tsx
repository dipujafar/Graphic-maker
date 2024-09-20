"use client";
import { useReSetPasswordMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/models";
import type { FormProps } from "antd";
import { Button, Form, Input,  } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  newPassword?: string;
  confirmPassword?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ResetPassowrdForm = () => {
  const route = useRouter();
  const [resetPassword] = useReSetPasswordMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await resetPassword(values).unwrap();
      Success_model({ title: "Password reset successfully!!" });
      route.push("/login");
    } catch (error: any) {
      Error_Modal(error?.data?.message);
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
        <Form.Item<FieldType>
          name="newPassword"
          rules={[{ required: true, message: "Please your set password!" }]}
        >
          <Input.Password size="large" placeholder="Set your password" style={{border: "none"}} minLength={6}/>
        </Form.Item>

        <Form.Item<FieldType>
          name="confirmPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" placeholder="Re-enter password" style={{border: "none"}} minLength={6}/>
        </Form.Item>

        <Button
          htmlType="submit"
          size="large"
          block
          style={{
            backgroundColor: "#F8FAFC",
            color: "#0DB760",
            border: "none",
          }}
        >
         Update Password
        </Button>
      </Form>

  );
};

export default ResetPassowrdForm;
