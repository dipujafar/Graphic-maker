"use client";
import { Spin, TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import TransactionDetailsModal from "./TransactionDetailsModal";
import moment from "moment";
import { TEarning } from "@/types/types";

type TDataType = {
  tnxId: number;
  name: string;
  amount: string;
  createdAt: string;
};

type TPropstype = {
  allTransitions: TEarning[];
  isLoading: boolean;
};

const RecentTransactionsTable = ({ allTransitions, isLoading }: TPropstype) => {
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState({});


  
  const earingsData = allTransitions?.map((item: TEarning)=>({
    ...item,
    name: item?.userData?.name,
    email: item?.userData?.email,
    phoneNumber: item?.userData?.phoneNumber,
    address: item?.userData?.address,
    order: item?.requestData?.title
  }))

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#Tr.ID",
      dataIndex: "tnxId",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (data)=>(
        <div>${data}</div>
      )
    },
    {
      title: "Email",
      dataIndex: "email",
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
        data={earingsData}
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
