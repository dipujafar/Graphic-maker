"use client";
import { Button, Form, Input, Spin, Upload } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import PhoneInput from "antd-phone-input";
import { toast } from "sonner";
import { useProfileDataQuery, useUpdateProfileMutation } from "@/redux/api/userApi";
import { FiUpload } from "react-icons/fi";

const PersonalInformationContainer = () => {
  const route = useRouter();
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);
  const { data: profileData, isLoading } = useProfileDataQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  console.log(profileData?.data);

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    const formData = new FormData();

    formData.append("data", {})
    formData.append("image", "imagefile")
    try{

    }catch(error){

    }
    
    setEdit(false);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

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
        <div className="bg-[#DBF4E7] h-[365px] w-1/4 rounded-xl border border-[#8D2E7D] flex justify-center items-center ">
          <div className="space-y-1">
            <div>
              {profileData?.data?.image ? (
                <Image
                  src={profileData?.data?.image}
                  width={750}
                  height={600}
                  alt="adminProfile"
                  className="size-36 rounded-full"
                ></Image>
              ) : (
                <div className="size-10 rounded-full bg-[#DBF4E7] flex justify-center items-center text-lg font-medium text-black uppercase">
                  {profileData?.data?.name.slice(0, 1)}
                </div>
              )}
              <Upload>
                <FiUpload />
              </Upload>
            </div>
            <h3 className="text-2xl text-center capitalize">
              {profileData?.data?.role}
            </h3>
            <h5 className="text-lg text-center">Profile</h5>
          </div>
        </div>
        {/* form */}
        <div className="w-2/4">
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              marginTop: "25px",
            }}
            initialValues={{
              name: profileData?.data?.name,
              email: profileData?.data?.email,
              phone: profileData?.data?.phoneNumber,
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
            <Form.Item label="Email" name="email">
              {edit ? (
                <Input size="large" placeholder="Enter email "></Input>
              ) : (
                <Input size="large" placeholder="Enter email" readOnly></Input>
              )}
            </Form.Item>

            {/* input  phone number  */}
            <Form.Item label="Phone Number" name="phone">
              {edit ? (
                <PhoneInput
                  size="large"
                  readOnly
                  enableArrow
                  enableSearch
                ></PhoneInput>
              ) : (
                <Input size="large" readOnly></Input>
              )}
            </Form.Item>

            <div className={edit ? "" : "hidden"}>
              <Button htmlType="submit" size="large" block>
                Save Change
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationContainer;
