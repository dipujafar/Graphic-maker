"use client";
import { Spin, TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import Image from "next/image";
import { useAllUserQuery } from "@/redux/api/userApi";
import moment from "moment";

type TDataType = {
  key?: number;
  name: string;
  email: string;
  date: string;
  type: string;
  image?: string;
  phoneNumber?: string;
  address?: string;
};

type TProps = {
  totalUsers: Record<string, string>,
  isLoading: boolean
}

const LatestUser = ({totalUsers, isLoading}: TProps) => {
 

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Full Name",
      dataIndex: "name",
      render: (value, rec) => (
        <div className="flex items-center gap-2">
          {rec?.image ? (
            <Image
              src={rec?.image}
              alt="userImage"
              width={100}
              height={100}
              className="size-10 rounded-full object-cover"
            ></Image>
          ) : (
            <div className="size-10 rounded-full bg-[#38885e] flex justify-center items-center text-lg font-medium text-white uppercase">
              {rec.name.slice(0, 1)}
            </div>
          )}

          <p>{value}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },
    {
      title: "Join Date",
      dataIndex: "createdAt",
      render: (data) =>{
        const date = moment(data).format("MMM Do YYYY")

        return date;
      }
    },
    {
      title: "Address",
      dataIndex: "address",
      render: (address) => (
        <div className="max-w-40 text-center"> {address}</div>
      ),
    },
    {
      title: "Type",
      dataIndex: "role",
    },
  ];

  if (isLoading) {
   return <div className="h-screen w-full flex justify-center items-center">
      <Spin size="large" />
    </div>;
  }

  return (
    <div>
      <DataTable
        columns={columns}
        data={totalUsers}
        pageSize={10}
      ></DataTable>
    </div>
  );
};

export default LatestUser;
