"use client";
import { Spin, TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import TransactionDetailsModal from "./TransactionDetailsModal";
import moment from "moment";

type TDataType = {
  tnxId: number;
  accountNumber: number;
  amount: string;
  createdAt: string;
};

type TPropstype = {
  allTransitions: Record<string, string>;
  isLoading: boolean;
};

const RecentTransactionsTable = ({ allTransitions, isLoading }: TPropstype) => {
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState({});

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#Tr.ID",
      dataIndex: "tnxId",
    },
    {
      title: "AccountNumber",
      dataIndex: "accountNumber",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (data)=>(
        <div>${data}</div>
      )
    },

    {
      title: "Date",
      dataIndex: "createdAt",
      render: (data) => {
        const date = moment(data).format("MMM Do YYYY")

        return date;
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <MdOutlineErrorOutline
            size={20}
            color="#0A8948"
            className="cursor-pointer"
            onClick={() => {
              setRecord(record);
              setOpen(!open);
            }}
          />
        );
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={allTransitions}
        pageSize={15}
      ></DataTable>
      <TransactionDetailsModal
        open={open}
        setOpen={setOpen}
        data={record}
      ></TransactionDetailsModal>
    </div>
  );
};

export default RecentTransactionsTable;
