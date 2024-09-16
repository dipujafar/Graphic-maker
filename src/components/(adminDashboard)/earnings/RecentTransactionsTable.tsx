"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import TransactionDetailsModal from "./TransactionDetailsModal";

type TDataType = {
  key: number;
  serial: number;
  name: string;
  amount: string;
  email: string;
  order: string;
  date: string;
};
const data: TDataType[] = Array.from({ length: 24 }).map((data, inx) => ({
  key: inx + 1,
  serial: 12345678,
  name: "John Doe",
  amount: "$250",
  email: "james1234@gmail.comm",
  order: "Logo",
  date: "16 Apr 2024",
}));

const RecentTransactionsTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#Tr.ID",
      dataIndex: "serial",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Order",
      dataIndex: "order",
    },
    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <MdOutlineErrorOutline
          size={20}
          color="#0A8948"
          onClick={() => setOpen(!open)}
        />
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} pageSize={15}></DataTable>
      <TransactionDetailsModal open={open} setOpen={setOpen}></TransactionDetailsModal>
    </div>
  );
};

export default RecentTransactionsTable;
