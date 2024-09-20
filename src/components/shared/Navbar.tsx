"use client";
import { Avatar, Button, Flex } from "antd";
import { FaBars } from "react-icons/fa6";

import avatarImg from "@/assets/image/profile.png";

import Link from "next/link";
import { useProfileDataQuery } from "@/redux/api/userApi";
import Image from "next/image";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Navbar = ({ collapsed, setCollapsed }: TNavbarProps) => {
  const { data: profileData, isLoading } = useProfileDataQuery(undefined);
  console.log(profileData?.data);
  return (
    <div className="flex items-center justify-between w-[97%] font-poppins">
      {/* Header left side */}
      <Flex align="center" gap={52}>
        <button
          onClick={() => setCollapsed(collapsed ? false : true)}
          className="cursor-pointer hover:bg-gray-300 rounded-full"
        >
          <FaBars size={28} />
        </button>
        <div className="flex flex-col ">
          <h2 className="text-2xl  font-medium">
            Welcome,{" "}
            <span className="capitalize"> {profileData?.data?.name}</span>
            <span className="block  text-sm font-normal">Have a nice day!</span>
          </h2>
        </div>
      </Flex>

      {/* Header right side */}
      <Flex align="center" gap={16}>
        <Link href={"/personalInformation"} className="flex items-center">
          <Button
            style={{
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            }}
          >
            {profileData?.data?.image ? (
              <Image
                src={profileData?.data?.image}
                alt="profileImage"
                width={750}
                height={600}
                className="size-12 rounded-full"
              ></Image>
            ) : (
              <div className="size-10 rounded-full bg-[#DBF4E7] flex justify-center items-center text-lg font-medium text-black uppercase">
              {profileData?.data?.name.slice(0, 1)}
            </div>
            )}

            <div className="text-white">
              <p className="text-lg capitalize font-semibold">
                {profileData?.data?.name}
              </p>
              <p className="capitalize">{profileData?.data?.role}</p>
            </div>
          </Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Navbar;
