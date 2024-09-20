import { Button, Form, Input, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import ForgetPasswordModal from "./ForgetPasswordModal";
import { useState } from "react";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { Error_Modal, Success_model } from "@/utils/models";
import { useRouter } from "next/navigation";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const ChangePasswordModal = ({ open, setOpen }: TPropsType) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = async (values) => {
    try {
      await changePassword(values).unwrap();
      Success_model({ title: "Password change successfully!!" });
      router.push("/login")
    } catch (error: any) {
      console.log(error?.data?.message);
      Error_Modal(error?.data?.message);
    }
  };
  return (
    <>
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        closeIcon={false}
        style={{
          minWidth: "max-content",
        }}
      >
        <div className="py-14">
          <div
            className="w-12 h-12 bg-[#D7263D]  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine
              size={18}
              color="#fff"
              className="absolute top-1/3 left-1/3"
            />
          </div>

          {/* header */}
          <div>
            <h4 className=" text-2xl font-medium text-center">
              Change Password
            </h4>
            <p className="mt-1 text-center">
              Your password must be 8-10 character long.
            </p>
          </div>

          {/* form */}
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              maxWidth: 500,
              marginTop: "25px",
            }}
          >
            {/*  input old password */}
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[{ required: true, message: "Please Enter Old Password" }]}
            >
              <Input.Password size="large" placeholder="Enter old password " />
            </Form.Item>

            {/*  input  new Password*/}
            <Form.Item
              label="New password"
              name="newPassword"
              rules={[
                { required: true, message: "Please Enter New  Password" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Set new password"
                minLength={6}
              />
            </Form.Item>

            {/* input  confirm number  */}
            <Form.Item
              label="Re-enter new password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please Re-enter new password" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter new password"
                minLength={6}
              />
            </Form.Item>

            {/* <p
              onClick={() => {
                setOpen(false);
                setOpenModal(true);
              }}
              className="mb-5 font-medium cursor-pointer text-mainColor"
            >
              Forget password?
            </p> */}

            <Button loading={isLoading} htmlType="submit" size="large" block>
              Update Password
            </Button>
          </Form>
        </div>
      </Modal>
      {/* forget password Modal
      <ForgetPasswordModal
        open={openModal}
        setOpen={setOpenModal}
      ></ForgetPasswordModal> */}
    </>
  );
};

export default ChangePasswordModal;
