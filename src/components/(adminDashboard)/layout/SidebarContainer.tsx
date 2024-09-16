
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/image/logo.png";
import { navLinks } from "@/utils/navLinks";


const SidebarContainer = ({ collapsed }: { collapsed: boolean }) => {
  return (
    
      <Sider
        width={320}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          paddingInline: `${collapsed ? "10px" : "26px"}`,
          backgroundColor: "#0A8948",
          maxHeight: "100vh",
          overflow: "auto",
        }}
      >
        <div className="demo-logo-vertical" />
        {/* logo  */}
        <div className="mb-3 flex flex-col justify-center items-center gap-y-5">
          <Link href={"/"}>
            <Image src={logo} alt="logo_Image"  />
          </Link>

        </div>
        <Menu
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          className="sidebar-menu text-lg bg-mainColor"
          items={navLinks}
        />
      </Sider>
   
  );
};

export default SidebarContainer;
