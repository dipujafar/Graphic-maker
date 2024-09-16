"use client";
import { TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import RestaurantsMarketModal from "./RestaurantsMarketModal";

type TDataType = {
  key: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  category: string;
};
const data: TDataType[] = Array.from({ length: 24 }).map((data, inx) => ({
  key: inx + 1,
  name: "James Tracy",
  email: "james1234@gmail.comm",
  phone: "12345678",
  address: "New York,USA",
  category: "Restaurant",
}));

const RestaurantsMarketTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phone",
    },

    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Menu/Item",
      dataIndex: "menu/item",
      render: () => (
        <MdOutlineErrorOutline
          size={20}
          color="#CD0335"
          onClick={() => setOpen(!open)}
        />
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={columns} data={data} pageSize={15}></DataTable>
      <RestaurantsMarketModal
        open={open}
        setOpen={setOpen}
      ></RestaurantsMarketModal>
    </div>
  );
};

export default RestaurantsMarketTable;
