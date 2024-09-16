"use client";

import { ReactNode, useState } from "react";
import {  ConfigProvider, Layout, theme } from "antd";
import SidebarContainer from "@/components/(adminDashboard)/layout/SidebarContainer";
import HeaderContainer from "@/components/(adminDashboard)/layout/HeaderContainer";

const { Content } = Layout;

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorBorder: "rgb(184,124,174)",
          },
          Form: {
            labelRequiredMarkColor: "rgb(255,255,255)",
            labelFontSize: 18,
          },
        },
      }}
    >
      <Layout style={{ height: "100vh", overflow: "auto" }}>
        <SidebarContainer collapsed={collapsed}></SidebarContainer>
        <Layout>
          <HeaderContainer
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          ></HeaderContainer>
          <Content
            style={{
              padding: 27,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: "80vh",
              overflow: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AdminLayout;
