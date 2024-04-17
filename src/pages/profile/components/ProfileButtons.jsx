import { Button, Col, Row } from "antd";
import { MailOutlined, CheckOutlined } from "@ant-design/icons";

function ProfileButtons() {
  return (
    <Row>
      <div style={{ display: "flex", gap: "0.3rem" }}>
        <Col>
          <Button
            size="large"
            style={{
              fontWeight: "600",
              opacity: "70%",
              fontSize: "1.125rem",
            }}
          >
            <MailOutlined style={{ color: "black", fontSize: "1.25rem " }} />
            &nbsp; Send Message
          </Button>
        </Col>
        <Col xs={0} sm={24} md={24} lg={24} xl={6}>
          <Button
            size="large"
            style={{
              fontWeight: "600",
              color: "skyblue",
              fontSize: "1rem",
            }}
          >
            <CheckOutlined />
            Contact
          </Button>
        </Col>
        <Col xs={0} md={0} lg={0} xl={6}>
          <Button
            size="large"
            style={{
              fontWeight: "600",
              opacity: "70%",
              fontSize: "1.125rem",
            }}
          >
            <MailOutlined style={{ color: "black", fontSize: "1.25rem " }} />
            &nbsp;Report User
          </Button>
        </Col>
      </div>
      <Col xs={24} sm={0} md={0} lg={0} xl={0}>
        <Button
          size="large"
          style={{
            fontWeight: "600",
            color: "skyblue",
            fontSize: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <CheckOutlined />
          Contact
        </Button>
      </Col>
      <Col xs={24} md={24} lg={24} xl={0}>
        <Button
          size="large"
          style={{
            fontWeight: "600",
            opacity: "70%",
            fontSize: "1.125rem",
            marginTop: "0.5rem",
          }}
        >
          <MailOutlined style={{ color: "black", fontSize: "1.25rem " }} />
          &nbsp;Report User
        </Button>
      </Col>
    </Row>
  );
}

export default ProfileButtons;
