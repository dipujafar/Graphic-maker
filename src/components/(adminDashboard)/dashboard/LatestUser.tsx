"use client";
import { TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import Image from "next/image";
import userImage from "@/assets/image/userProfile.png"

type TDataType = {
  key?: number;
  name: string;
  email: string;
  date: string;
  type: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  name: "Robert Fox",
  email: "james1234@gmail.comm",
  type: "User",
  date: "11 Oct, 2024",
}));


const LatestUser = () => {
  const columns: TableProps<TDataType>["columns"] = [

    {
      title: "Full Name",
      dataIndex: "name",
      render: (value)=>(
        <div className="flex items-center gap-2">
          <Image src={userImage} alt="userImage" className="size-10 rounded-full object-cover"></Image>
          <p>{value}</p>
        </div>
      )
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Join Date",
      dataIndex: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
   
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
    </div>
  );
};

export default LatestUser;
