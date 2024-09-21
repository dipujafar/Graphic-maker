import Invoice from "@/components/Invoice";
import { TRequestDataType } from "@/types/types";
import { PDFViewer } from "@react-pdf/renderer";
import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  FormProps,
  Input,
  Modal,
} from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  data?: TRequestDataType; // Make data optional
};

type FieldType = {
  category: string;
};

const TransactionInfoFormModal = ({ open, setOpen, data }: TPropsType) => {
  const [showPdf, setShowPdf] = useState(false);
  const [datePick, setDatePick] = useState("");
  const date = moment(datePick).format("MMM Do YYYY");
  const [transactionInfo, setTransactionInfo] = useState(data);

  useEffect(() => {
    if (data) {
      setTransactionInfo(data);
    }
  }, [data]);

  //date change function
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDatePick(dateString as string);
  };

  //get form data
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const transactionData = { ...values, date };
    console.log(transactionData);
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
          position: "relative",
        }}
      >
        <div
          className="w-12 h-12 bg-[#D7263D] absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <RiCloseLargeLine
            size={18}
            color="#fff"
            className="absolute top-1/3 left-1/3"
          />
        </div>
        <div className="pb-16">
          <h4 className="text-center text-xl">Transaction Info</h4>
          <div className="mt-10">
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                email: transactionInfo?.email || "",
                order: transactionInfo?.title || "",
              }}
            >
              {/* input Transaction Date */}
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker
                  onChange={onChange}
                  size="large"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              {/* input A/C Number */}
              <Form.Item
                label="Paypal Email"
                name="paypalEmail"
                rules={[
                  { required: true, message: "Please enter paypal email" },
                ]}
              >
                <Input size="large" placeholder="Enter paypal email" />
              </Form.Item>

              {/* input Transaction Amount */}
              <Form.Item
                label="Transaction Amount"
                name="amount"
                rules={[{ required: true, message: "Please enter the amount" }]}
              >
                <Input size="large" placeholder="Enter amount" />
              </Form.Item>

              {/* input Payment Method */}
              <Form.Item
                label="Payment Method"
                name="paymentMethod"
                rules={[
                  { required: true, message: "Please enter payment method" },
                ]}
              >
                <Input size="large" placeholder="Enter payment method" />
              </Form.Item>

              {/* input E-mail */}
              <Form.Item
                label="E-mail"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input size="large" placeholder="Enter E-mail" />
              </Form.Item>

              {/* input Order */}
              <Form.Item
                label="Order"
                name="order"
                rules={[{ required: true, message: "Please enter the order" }]}
              >
                <Input size="large" placeholder="Enter Order" />
              </Form.Item>

              <Button htmlType="submit" block size="large">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TransactionInfoFormModal;
