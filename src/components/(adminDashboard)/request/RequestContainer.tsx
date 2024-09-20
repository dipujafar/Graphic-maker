"use client";
import { Input } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import RequestTable from "./RequestTable";
import { useAllRequestQuery } from "@/redux/api/userApi";
import { ChangeEvent, useState } from "react";

const RequestContainer = () => {
  const [email, setEmail] = useState("");
  const { data: allRequests, isLoading } = useAllRequestQuery(email);

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); 
  };


  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-medium text-mainColor">Request</h1>
        <div className="flex gap-3">
          <Input
            style={{
              width: "200px",
              backgroundColor: "#DBF4E7",
              border: "none",
              borderRadius: "80px",
            }}
            placeholder="Search by email..."
            onChange={handleChangeEmail} // Attach the change handler
            value={email} // Bind the input value to the email state
          ></Input>
          <div className="bg-[#0DB760] p-3 rounded-full cursor-pointer" >
            <IoSearchOutline size={16} color="#FFFFFF" />
          </div>
        </div>
      </div>
      {/* request table */}
      <div className="mt-10">
        <RequestTable
          data={allRequests?.data?.requests}
          loading={isLoading}
        ></RequestTable>
      </div>
    </div>
  );
};

export default RequestContainer;
