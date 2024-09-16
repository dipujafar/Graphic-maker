import { Input } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import RequestTable from "./RequestTable";

const RequestContainer = () => {
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
            placeholder="Search..."
          ></Input>
          <div className="bg-[#0DB760] p-3 rounded-full cursor-pointer">
            <IoSearchOutline size={16} color="#FFFFFF" />
          </div>
        </div>
      </div>
      {/* request table */}
      <div className="mt-10">
        <RequestTable></RequestTable>
      </div>
    </div>
  );
};

export default RequestContainer;
