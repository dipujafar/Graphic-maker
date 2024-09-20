"use client";
import { Button, Form, Input, Spin, Upload, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import PhoneInput from "antd-phone-input";
import { useProfileDataQuery, useUpdateProfileMutation } from "@/redux/api/userApi";
import { CiEdit } from "react-icons/ci";
import { Error_Modal, Success_model } from "@/utils/models";

const PersonalInformationContainer = () => {
  const route = useRouter();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]); // Store selected file
  const { data: profileData, isLoading } = useProfileDataQuery(undefined);
  const [updateProfile, {isLoading: isUpdating}] = useUpdateProfileMutation();

  // Handle file before uploading to verify it's an image
  const beforeUpload = (file: any) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      return Upload.LIST_IGNORE; // Prevent upload if not an image
    }
    return isImage; // Allow upload if it's an image
  };

  const handleUploadChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList); // Update file list state
  };

  const handleSubmit = async (values: any) => {

    const phoneNumber = values?.phone?.countryCode + values?.phone?.areaCode + values?.phone?.phoneNumber;

    const updatedData = {name: values?.name, phoneNumber};

    const formData = new FormData();
    formData.append("data", JSON.stringify(updatedData));

    console.log(fileList);
    
    if (fileList.length > 0) {
      // @ts-ignore
      formData.append("image", fileList[0].originFileObj); // Append selected image file
    }

    try {
      await updateProfile(formData).unwrap();
      Success_model({ title: "Profile updated successfully!!" });
    } catch (error: any) {
      console.log(error?.data?.message);
      Error_Modal(error?.data?.message);
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  console.log(profileData?.data?.phoneNumber);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span onClick={() => route.back()} className="cursor-pointer">
            <FaArrowLeft size={24} />
          </span>
          <h4 className="text-2xl font-medium">Personal Information</h4>
        </div>
        
      </div>

      {/* personal information */}
      <div className="mt-10 flex justify-center gap-10">
        <div className="bg-[#DBF4E7] h-[365px] w-1/4 rounded-xl border border-[#8D2E7D] flex justify-center items-center">
          <div className="space-y-1">
            <div className="relative">
              {profileData?.data?.image ? (
                <Image
                  src={profileData?.data?.image}
                  width={750}
                  height={600}
                  alt="adminProfile"
                  className="size-36 rounded-full"
                />
              ) : (
                <div className="size-10 rounded-full bg-[#DBF4E7] flex justify-center items-center text-lg font-medium text-black uppercase">
                  {profileData?.data?.name.slice(0, 1)}
                </div>
              )}
              <div className="p-1 absolute bottom-0 right-0 bg-transparent w-40">
                <Upload
                  beforeUpload={beforeUpload} // Attach validation function
                  onChange={handleUploadChange} // Update state with the uploaded file
                  fileList={fileList} // Maintain file list state
                  maxCount={1} 
                >
                  <CiEdit  color="#000" className="size-7 cursor-pointer  bg-[#DBF4E7] rounded-xl  absolute bottom-5 right-2 "  />
                </Upload>
              </div>
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
            initialValues={{
              name: profileData?.data?.name,
              email: profileData?.data?.email,
              phone: profileData?.data?.phoneNumber,
            }}
            style={{ marginTop: "25px" }}
          >
            {/* input name */}
            <Form.Item label="Name" name="name">
              
                <Input size="large" placeholder="Enter full name" />
              
            </Form.Item>

            {/* input email */}
            <Form.Item label="Email" name="email">
            
                <Input size="large" placeholder="Enter email" disabled={true} />
            
            </Form.Item>

            {/* input phone number */}
            <Form.Item label="Phone Number" name="phone">
              
                <PhoneInput size="large" enableArrow enableSearch />
            
            </Form.Item>

            {/* Save Changes Button */}
           
              <Button loading={isUpdating} htmlType="submit" size="large" block>
                Save Edits
              </Button>
           
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationContainer;
