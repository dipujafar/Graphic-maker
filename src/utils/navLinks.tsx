import { RiDashboardHorizontalFill } from "react-icons/ri";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { SlPeople } from "react-icons/sl";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "earnings",
    icon: <LiaMoneyCheckAltSolid  size={18} />,
    label: <Link href={"/earnings"}>Earnings</Link>,
  },
  {
    key: "request",
    icon: <SlPeople  size={18} />,
    label: <Link href={"/request"}>Request</Link>,
  },
  {
    key: "logout",
    icon: <CiLogout   size={20} />,
    label: <Link href={"/login"}>Logout</Link>,
  }
];
