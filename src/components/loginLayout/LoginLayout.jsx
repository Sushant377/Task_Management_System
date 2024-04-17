import { Row, Col, Image } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import style from "./style.module.css";
import useAuthStore from "../../store/authStore";
function LoginLayout() {
  const { userData } = useAuthStore();
  if (userData.isLoggedIn) {
    return <Navigate to={"/user"} />;
  }
  return (
    <Row gutter={[8, 16, 24, 32]} style={{ width: "100vw", height: "100vh" }}>
      <Col xs={24} md={24} lg={16} xl={14}>
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
          <Col xs={22} md={16} xl={10}>
            <Outlet />
          </Col>
        </Row>
      </Col>
      <Col className={style.pattern} xs={0} md={0} lg={8} xl={10}>
        <Image
          preview={false}
          style={{
            paddingTop: "70px",
            width: "100%",
            height: "100vh",
            objectFit: "contain",
          }}
          src={"./login.png"}
        />
      </Col>
    </Row>
  );
}

export default LoginLayout;
