import { Button, Divider, Modal } from "antd";
import moment from "moment";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  data: Record<string,string>
};

const TransactionDetailsModal = ({ open, setOpen, data }: TPropsType) => {
  const date = moment(data?.createdAt).format("MMM Do YYYY");
  console.log(data);
  return (
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
      <div className="pb-16">
        <h4 className="text-center text-xl ">
          Transaction Details
        </h4>
        <Divider></Divider>
        <div className="mt-10">
          <div className="flex justify-between">
            <h4>Transaction ID : </h4>
            <p className="font-medium">{data?.tnxId}</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Date :</h4>
            <p className="font-medium">{date}</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>A/C number :</h4>
            <p className="font-medium">{data?.accountNumber}</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Transaction amount :</h4>
            <p className="font-medium">${data?.amount}</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Payment Type :</h4>
            <p className="font-medium">{data?.paymentType}</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Payment Method :</h4>
            <p className="font-medium">{data?.paymentMethod}</p>
          </div>
          <Divider></Divider>

        </div>
      </div>
      <Button block size="large">Download Invoice </Button>
    </Modal>
  );
};

export default TransactionDetailsModal;
