"use client";
import { Button, Spin, TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import RequestDetailsModal from "./RequestDetailsModal";
import Link from "next/link";
import {
  useGetsingleRequestQuery,
} from "@/redux/api/userApi";
import { TRequestDataType } from "@/types/types";



type TPropsType = {
data: TRequestDataType[],
loading: boolean
}

const RequestTable = ({data, loading}: TPropsType) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const { data: singleRequestData, isLoading: singleDataLoading } = useGetsingleRequestQuery(id);

  console.log(id);
  console.log(data);

  // Add a key (for #SI) to each item in the requests data
  const requestDataWithKeys = data?.map(
    (item: TRequestDataType, index: number) => ({
      ...item,
      key: index + 1, // Adding 1 to make the index start from 1
    })
  );

  const columns: TableProps<TRequestDataType>["columns"] = [
    {
      title: "#SI",
      dataIndex: "key",
      key: "key", // Add key attribute for unique identification
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (value) => <p className="max-w-52">{value}</p>,
    },
    {
      title: "Order Status",
      dataIndex: "status",
      key: "status",
      render: (value) => {
        if (value === "delivered") {
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
          value: "delivered",
        },
        {
          text: "Pending",
          value: "pending",
        },
        {
          text: "Ongoing",
          value: "ongoing",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (data, record: TRequestDataType) => (
        <div className="flex gap-1">
          <MdOutlineErrorOutline
            size={20}
            color="#0A8948"
            className="cursor-pointer"
            onClick={() => {
              setId(record?._id);
              setOpen(!open);
            }}
          />
          <Link href={"/message"}>
            <TbMessage color="#232323" className="cursor-pointer" size={20} />
          </Link>
        </div>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <DataTable columns={columns} data={requestDataWithKeys} pageSize={10} />
      <RequestDetailsModal
        open={open}
        setOpen={setOpen}
        data={singleRequestData?.data}
        loading={singleDataLoading}
      />
    </div>
  );
};

export default RequestTable;
