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
  const [transactionInfo, setTransactionInfo] = useState();

 


 

  //date change function
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDatePick(dateString as string);
  };

  //get form data
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const [invoiceData] = useState({
    invoiceNumber: "0001234",
    date: "5 de Enero del 2024",
    clientName: "Andrés Piraquive",
    clientNumber: "(55) 1234-5678",
    clientAddress: "Calle cualquiera 123, cualquier lugar",
    clientPaypalEmail: "paypalemail@example.com",
    services: [
      { description: "Servicio 1", price: 12.34, quantity: 1 },
      { description: "Servicio 2", price: 12.34, quantity: 1 },
      { description: "Servicio 3", price: 12.34, quantity: 1 },
    ],
    total: 37.02,
    contact: {
      email: "hola@sitioincreible.com",
      website: "www.sitioincreible.com",
    },
    payment: {
      bank: "Banco Ensigma",
      accountName: "Luriel Zanabria",
      accountNumber: "0123 4567 8901",
    },
  });

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
                email: data?.email || "",
                order: data?.title || ""
              }}
            >
              {/* input Transaction Id */}
              <Form.Item
                label="Transaction Id"
                name="transactionId"
                rules={[{ required: true, message: "Please enter transaction id" }]}
              >
                <Input size="large" placeholder="Enter transaction id" />
              </Form.Item>

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
                label="A/C Number"
                name="ACNumber"
                rules={[{ required: true, message: "Please enter account number" }]}
              >
                <Input size="large" placeholder="Enter account number" />
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
                rules={[{ required: true, message: "Please enter payment method" }]}
              >
                <Input size="large" placeholder="Enter payment method" />
              </Form.Item>

              {/* input E-mail */}
              <Form.Item
                label="E-mail"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" }
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

              <Button
                htmlType="submit"
                block
                size="large"
                onClick={() => {
                  setShowPdf(true);
                  setOpen(false);
                }}
              >
                Download Invoice
              </Button>
            </Form>
          </div>
        </div>
      </Modal>

     
      <Modal
        open={showPdf}
        onCancel={() => setShowPdf(false)}
        footer={null}
        style={{ minWidth: "max-content" }}
        centered={true}
      >
        <PDFViewer width="600" height="800" style={{ marginTop: "20px" }}>
          <Invoice data={invoiceData} />
        </PDFViewer>
      </Modal>
    </>
  );
};

export default TransactionInfoFormModal;
