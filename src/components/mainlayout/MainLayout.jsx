import { Layout, Row, Col } from "antd";
import Navbar from "./Navbar";
import ButtomFooter from "./ButtomFooter";
import { Outlet } from "react-router-dom";
import BreadCrumbRoute from "./BreadCrumbRoute";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout style={{ flex: "1 0 auto" }}>
        <Content style={{ overflowX: "auto", flex: "1 0 auto" }}>
          <Row justify="center">
            <Col xs={22} sm={22} md={22} lg={22} xl={20}>
              <BreadCrumbRoute />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={22} md={22} lg={22} xl={20}>
              <Outlet />
            </Col>
          </Row>
        </Content>
      </Layout>
      <ButtomFooter />
    </Layout>
  );
};

export default MainLayout;
