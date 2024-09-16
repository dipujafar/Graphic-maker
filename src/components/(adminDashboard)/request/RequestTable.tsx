"use client";
import { Button, TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import RequestDetailsModal from "./RequestDetailsModal";
import Link from "next/link";

type TDataType = {
  key: number;
  name: string;
  phonenumber: number;
  email: string;
  decription: string;
  orderStatus: string;
};
const data: TDataType[] = Array.from({ length: 24 }).map((data, inx) => ({
  key: inx + 1,
  name: "James Tracy",
  phonenumber: 12345678,
  email: "james1234@gmail.com",
  decription:
    "There are many variations of passages of Lorem Ipsum available, but the majority",
  orderStatus: inx % 2 === 0 ? "Delivered" : "On Going",
}));

const RequestTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SI",
      dataIndex: "key",
    },
    {
      title: "User Name",
      dataIndex: "name",
    },
    {
      title: "Phone number",
      dataIndex: "phonenumber",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Decription",
      dataIndex: "decription",
      render: (value) => <p className="max-w-52">{value}</p>,
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
      render: (value) => {
        if (value === "Delivered") {
          return (
            <Button
              icon={<IoCheckmarkCircleSharp />}
              style={{
                backgroundColor: "#B4E9CE",
                color: "#0A8948",
                border: "none",
                borderRadius: "24px",
              }}
            >
              {value}
            </Button>
          );
        }
        return value;
      },
      filters: [
        {
          text: "Delivered",
          value: "Delivered",
        },
        {
          text: "On Going",
          value: "On Going",
        },
      ],
      onFilter: (value, record) =>
        record.orderStatus.indexOf(value as string) === 0,
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="flex gap-1">
          <MdOutlineErrorOutline
            size={20}
            color="#0A8948"
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <Link href={"/message"}>
          <TbMessage color="#232323" className="cursor-pointer" size={20} />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <RequestDetailsModal open={open} setOpen={setOpen}></RequestDetailsModal>
    </div>
  );
};

export default RequestTable;
