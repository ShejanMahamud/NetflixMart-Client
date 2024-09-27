import {
  DashboardOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const { Sider, Content } = Layout;

const RootLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsive behavior
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setCollapsed(true); // Collapse sidebar on small screens
    } else {
      setIsMobile(false);
    }
  };

  // Set up event listener to resize window
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout className="min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <Navbar />

      <Layout className="h-full">
        {/* Sidebar */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(collapsed) => setCollapsed(collapsed)}
          breakpoint="md"
          collapsedWidth={isMobile ? 0 : 80}
          className="bg-white shadow-sm border-r border-gray-200"
        >
          <div className="flex justify-center py-4">
            <span
              className={`text-lg font-semibold ${collapsed ? "hidden" : ""}`}
            >
              Dashboard
            </span>
          </div>

          <Menu
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            className="border-none"
            style={{ fontSize: "16px" }}
          >
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="users" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Main content area */}
        <Layout className="flex-1 p-6">
          <Content className="bg-white p-6 rounded-lg shadow-sm">
            <Outlet />
          </Content>

          {/* Footer */}
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
