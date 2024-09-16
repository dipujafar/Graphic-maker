"use client";
import type { FormProps } from "antd";
import { Button, Form, Input,  } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  setPassword?: string;
  reSetPassword?: string;

};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ResetPassowrdForm = () => {
  const route = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    route.push("/login");
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
          name="setPassword"
          rules={[{ required: true, message: "Please your set password!" }]}
        >
          <Input.Password size="large" placeholder="Set your password" style={{border: "none"}}/>
        </Form.Item>

        <Form.Item<FieldType>
          name="reSetPassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" placeholder="Re-enter password" style={{border: "none"}}/>
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
