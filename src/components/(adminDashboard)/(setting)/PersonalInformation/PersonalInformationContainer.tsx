"use client";
import { Button, ConfigProvider, Form, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import profile from "@/assets/image/adminProfile.png";
import { useState } from "react";
import { toast } from "sonner";

const PersonalInformationContainer = () => {
  const route = useRouter();
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    console.log("Success:", values);
    toast.success("Successfully Change personal information", {
      duration: 1000,
    });
    setEdit(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span onClick={() => route.back()} className="cursor-pointer">
            <FaArrowLeft size={24} />
          </span>
          <h4 className="text-2xl font-medium">Personal Information</h4>
        </div>
        <div className={edit ? "hidden" : ""}>
          <Button onClick={() => setEdit(true)} size="large" icon={<FiEdit />}>
            Edit Profile
          </Button>
        </div>
      </div>

      {/* personal information */}
      <div className="mt-10 flex justify-center  gap-10">
        <div className="bg-[#F8D9E1] h-[365px] w-1/4 rounded-xl border border-[#8D2E7D] flex justify-center items-center ">
          <div className="space-y-1">
            <Image
              src={profile}
              alt="adminProfile"
              className="size-36 rounded-full"
            ></Image>
            <h3 className="text-2xl text-center">Admin</h3>
            <h5 className="text-lg text-center">Profile</h5>
          </div>
        </div>
        {/* form */}
        <div className="w-2/4">
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: "rgb(248,217,225)",
                },
              },
            }}
          >
            <Form
              form={form}
              onFinish={handleSubmit}
              layout="vertical"
              style={{
                marginTop: "25px",
              }}
              initialValues={{
                name: "James Tracy",
                email: "enrique@gmail.com",
                phone: "3000597212",
              }}
            >
              {/*  input  name */}
              <Form.Item label="Name" name="name">
                {edit ? (
                  <Input size="large" placeholder="Enter full name "></Input>
                ) : (
                  <Input
                    size="large"
                    placeholder="Enter full name "
                    readOnly
                  ></Input>
                )}
              </Form.Item>

              {/*  input  email */}
              <Form.Item
                label="Email"
                name="email"
                rules={[{ type: "email", required: true }]}
              >
                {edit ? (
                  <Input size="large" placeholder="Enter email "></Input>
                ) : (
                  <Input
                    size="large"
                    placeholder="Enter email"
                    readOnly
                  ></Input>
                )}
              </Form.Item>

              {/* input  phone number  */}
              <Form.Item label="Phone Number" name="phone">
                {edit ? (
                  <Input size="large" placeholder="Enter Phone number"></Input>
                ) : (
                  <Input
                    size="large"
                    placeholder="Enter Phone number"
                    readOnly
                  ></Input>
                )}
              </Form.Item>

              <div className={edit ? "" : "hidden"}>
                <Button htmlType="submit" size="large" block>
                  Save Change
                </Button>
              </div>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationContainer;
