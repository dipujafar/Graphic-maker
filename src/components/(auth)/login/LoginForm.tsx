"use client";

import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Error_Modal, Success_model } from "@/utils/models";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const userData = { email: values?.email, password: values?.password };
      const res = await login(userData).unwrap();

      if (res?.data?.accessToken) {
        Success_model({ title: "Login Successfull" });
        dispatch(
          setUser({
            user: jwtDecode(res?.data?.accessToken),
            token: res?.data?.accessToken,
          })
        );
        router.push("/");
        router.refresh();
      }
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
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          {
            type: "email",
            message: "Please enter a valid email address!",
          },
        ]}
      >
        <Input
          size="large"
          type="email"
          placeholder="User Email"
          style={{ border: "none" }}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          size="large"
          placeholder="Password"
          style={{ border: "none" }}
        />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Flex justify="space-between" align="center">
          <Checkbox>
            <p className="text-white font-semibold">Remember me</p>
          </Checkbox>
          <Link href={"/forgetPassword"} style={{ textDecoration: "" }}>
            <p className=" text-primaryBlack">Forgot Password?</p>
          </Link>
        </Flex>
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
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
