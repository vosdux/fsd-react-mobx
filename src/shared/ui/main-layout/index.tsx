import { Layout } from "antd";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Content style={{ minHeight: "100vh" }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
