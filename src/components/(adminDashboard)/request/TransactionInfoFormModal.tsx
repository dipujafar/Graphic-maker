import Invoice from "@/components/Invoice";
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
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

type FieldType = {
  category: string;
};





const TransactionInfoFormModal = ({ open, setOpen }: TPropsType) => {
  const [showPdf, setShowPdf] = useState(false);

  const services = [
    { description: "Logo Design", price: 12.34, quantity: 1 },
    { description: " Banner Design ", price: 12.34, quantity: 1 },
    { description: "T Shirt Design", price: 12.34, quantity: 1 },
  ];



  //date change function 
  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  //get fromdata 
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  // start invoice data section
 // Dynamically calculate invoice data using data prop
//  const invoiceData = data && {
//   invoiceNumber: "0001234",
//   date: date,
//   clientName: data.name,
//   clientNumber: data.phoneNumber,
//   clientAddress: data.address,
//   clientPaypalEmail: "clientemail@example.com",
//   services: [
//     { description: data.order, price: data?.amount, quantity: 1 },
//   ],
//   total: data?.amount,
//   contact: {
//     email: "grafismodigital@gmai.com",
//     website: "www.grafismodigital.com",
//   },
//   payment: {
//     bank: "Banco Ensigma",
//     accountName: "Luriel Zanabria",
//     accountNumber: "0123 4567 8901",
//   },
// }

  //  end invoice data section

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
          <h4 className="text-center text-xl">Transaction Info</h4>
          <div className="mt-10">
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                email: "opovai@gmail.com",
                order: "Logo",
                date: moment("2024-09-16"),
              }}
            >
              {/* input Transaction Id */}
              <Form.Item
                label="Transaction Id"
                name="transactionId"
                rules={[
                  { required: true, message: "Please enter transaction id" },
                ]}
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
                  onChange={onChangeDate}
                  size="large"
                  style={{ width: "100%" }}
                />
              </Form.Item>

              {/* input A/C Number */}
              <Form.Item
                label="A/C Number"
                name="ACNumber"
                rules={[
                  { required: true, message: "Please enter account number" },
                ]}
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
      {/* <Modal
        open={showPdf}
        onCancel={() => setShowPdf(false)}
        footer={null}
        style={{ minWidth: "max-content" }}
        centered={true}
      >
        <PDFViewer width="600" height="800" style={{ marginTop: "20px" }}>
          <Invoice data={invoiceData} />
        </PDFViewer>
      </Modal> */}
    </>
  );
};

export default TransactionInfoFormModal;
