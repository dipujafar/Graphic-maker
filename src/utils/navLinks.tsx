import { RiDashboardHorizontalFill } from "react-icons/ri";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { SlPeople } from "react-icons/sl";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import Link from "next/link";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "earnings",
    icon: <LiaMoneyCheckAltSolid size={18} />,
    label: <Link href={"/earnings"}>Earnings</Link>,
  },
  {
    key: "request",
    icon: <SlPeople size={18} />,
    label: <Link href={"/request"}>Request</Link>,
  },
  {
    key: "message",
    icon: <TbMessage size={20} />,
    label: <Link href={"/message"}>Message</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={20} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },

  {
    key: "logout",
    icon: <RiLogoutCircleLine size={20} />,
    label: <Link href={"/login"}>Logout</Link>,
  },
];
