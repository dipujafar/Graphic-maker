import { Button, Divider, Modal, Spin } from "antd";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import TransactionInfoFormModal from "./TransactionInfoFormModal";
import { useState } from "react";
import Link from "next/link";
import { TRequestDataType } from "@/types/types";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  data: TRequestDataType;
  loading: boolean;
};

const RequestDetailsModal = ({ open, setOpen, data, loading }: TPropsType) => {
  const [openForm, setOpenForm] = useState(false);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

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
          position: "relative",
        }}
      >
        
        <div>
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
          <div className="pb-10">
            <h4 className="text-center text-xl ">Request Details</h4>
            <Divider></Divider>
            <div className="mt-10">
              <div className="flex justify-between">
                <h4>Order : </h4>
                <p className="font-medium">{data?.title}</p>
              </div>
              <Divider></Divider>
              <div className="flex justify-between">
                <h4>User Name : </h4>
                <p className="font-medium">{data?.name}</p>
              </div>
              <Divider></Divider>
              <div className="flex justify-between">
                <h4>Phone number :</h4>
                <p className="font-medium">{data?.phoneNumber}</p>
              </div>
              <Divider></Divider>
              <div className="flex justify-between">
                <h4>Email :</h4>
                <p className="font-medium">{data?.email}</p>
              </div>
              <Divider></Divider>
              <p className="max-w-[440px] text-center">{data?.description}</p>
              <Divider></Divider>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2 mb-3">
              <Button
                size="large"
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  border: "1px solid #0DB760",
                  color: "#0DB760",
                }}
                onClick={() => setOpen(!open)}
              >
                Cancle
              </Button>
              <Button
                size="large"
                icon={<IoCheckmarkCircleSharp />}
                style={{ width: "100%" }}
                onClick={() => {
                  setOpen(false);
                  setOpenForm(true);
                }}
              >
                Mark as Complete
              </Button>
            </div>
            <Link href={"/message"}>
              <Button block size="large">
                Message
                <TbMessage />
              </Button>
            </Link>
          </div>
        </div>
      </Modal>
      <TransactionInfoFormModal
      key={data?._id}
        open={data &&openForm}
        setOpen={setOpenForm}
        data={ data}
      ></TransactionInfoFormModal>
    </>
  );
};

export default RequestDetailsModal;
