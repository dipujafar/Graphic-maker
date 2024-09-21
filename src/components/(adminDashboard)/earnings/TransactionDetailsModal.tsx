import Invoice from "@/components/Invoice";
import { PDFViewer } from "@react-pdf/renderer";
import { Button, Divider, Modal } from "antd";
import moment from "moment";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  data: Record<string, string>;
};

const TransactionDetailsModal = ({ open, setOpen, data }: TPropsType) => {
  const date = data?.createdAt ? moment(data.createdAt).format("MMM Do YYYY") : null;

  const [showPdf, setShowPdf] = useState(false);

  // Dynamically calculate invoice data using data prop
  const invoiceData = data && {
    date: date,
    clientName: data.name,
    clientNumber: data.phoneNumber ? data.phoneNumber : "" ,
    clientAddress: data.address ? data.address : "" ,
    clientPaypalEmail: "clientemail@example.com",
    services: [
      { description: data.order, price: data?.amount, quantity: 1 },
    ],
    total: data?.amount,
    contact: {
      email: "grafismodigital@gmai.com",
      website: "www.grafismodigital.com",
    },
    payment: {
      bank: "Banco Ensigma",
      accountName: "Luriel Zanabria",
      accountNumber: "0123 4567 8901",
    },
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
          <h4 className="text-center text-xl ">Transaction Details</h4>
          <Divider></Divider>
          <div className="mt-10">
            {/* Conditional rendering: only render the fields if the data is available */}
            {data?.tnxId && (
              <>
                <div className="flex justify-between">
                  <h4>Transaction ID :</h4>
                  <p className="font-medium">{data?.tnxId}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {date && (
              <>
                <div className="flex justify-between">
                  <h4>Date :</h4>
                  <p className="font-medium">{date}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {data?.accountNumber && (
              <>
                <div className="flex justify-between">
                  <h4>A/C number :</h4>
                  <p className="font-medium">{data?.accountNumber}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {data?.amount && (
              <>
                <div className="flex justify-between">
                  <h4>Transaction amount :</h4>
                  <p className="font-medium">${data?.amount}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {data?.email && (
              <>
                <div className="flex justify-between">
                  <h4>Email :</h4>
                  <p className="font-medium">{data?.email}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {data?.paypalEmail && (
              <>
                <div className="flex justify-between">
                  <h4>Paypal Email :</h4>
                  <p className="font-medium">{data?.paypalEmail}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {data?.order && (
              <>
                <div className="flex justify-between">
                  <h4>Order :</h4>
                  <p className="font-medium">{data?.order}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {data?.paymentType && (
              <>
                <div className="flex justify-between">
                  <h4>Payment Type :</h4>
                  <p className="font-medium">{data?.paymentType}</p>
                </div>
                <Divider></Divider>
              </>
            )}
            {data?.paymentMethod && (
              <>
                <div className="flex justify-between">
                  <h4>Payment Method :</h4>
                  <p className="font-medium">{data?.paymentMethod}</p>
                </div>
                <Divider></Divider>
              </>
            )}
          </div>
        </div>
        <Button
          block
          size="large"
          onClick={() => {setShowPdf(true); setOpen(false)}}
          disabled={!data} // Disable if no data
        >
          Download Invoice
        </Button>
      </Modal>
      <Modal
        open={showPdf}
        onCancel={() => setShowPdf(false)}
        footer={null}
        style={{ minWidth: "max-content" }}
        centered={true}
      >
        {data && (
          <PDFViewer width="600" height="800" style={{ marginTop: "20px" }}>
            <Invoice data={invoiceData} />
          </PDFViewer>
        )}
      </Modal>
    </>
  );
};

export default TransactionDetailsModal;
