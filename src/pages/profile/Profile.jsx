import { useState } from "react";
import { Card, Divider, Image, Row, Col } from "antd";
import { EyeOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";
import Lcontent from "./components/Lcontent";
import ProfileWork from "./components/ProfileWork";
import PersonalInfo from "./components/PersonalInfo";
import ProfileButtons from "./components/ProfileButtons";

function Profile() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <Card style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.25rem",
          gap: "1rem",
        }}
      >
        <Row>
          <Col xs={24} md={8} lg={12} xl={12}>
            <div>
              <Card style={{ border: "none" }}>
                <div
                  style={{
                    borderRadius: "5%",
                    overflow: "hidden",
                    width: 200,
                    height: 170,
                  }}
                >
                  <Image
                    preview={false}
                    width={200}
                    height={170}
                    src="/photo.webp"
                    style={{ marginRight: "3rem", marginBottom: "2rem " }}
                  />
                </div>
                <Col xs={24} md={0} lg={0} xl={0}>
                  <PersonalInfo />
                </Col>
                <Col xs={0} md={24} lg={24} xl={24}>
                  <Lcontent />
                </Col>
                <ProfileWork />
              </Card>
            </div>
          </Col>
          <Col xs={24} md={8} lg={12} xl={12}>
            <div>
              <Card style={{ width: "75%", border: "none" }}>
                <Col xs={0} md={24} lg={24} xl={24}>
                  <PersonalInfo />
                </Col>
                <Col xs={24} md={0} lg={0} xl={0}>
                  <Lcontent />
                </Col>
                <Col xs={24} md={0} lg={0} xl={0}>
                  <ProfileButtons />
                </Col>
                <Col xs={0} md={16} lg={24} xl={24}>
                  <ProfileButtons />
                </Col>

                <div
                  style={{
                    display: "flex",
                    gap: "3rem",
                    marginTop: "1.875rem",
                  }}
                >
                  <NavLink
                    to="timeline"
                    gap={10}
                    onClick={() => setActiveTab("timeline")}
                    style={{
                      fontWeight: "600",
                      color: activeTab === "timeline" ? "black" : "black",
                      fontSize: "1.2rem",
                      textDecoration: "none",
                      borderBottom:
                        activeTab === "timeline" ? "2px solid blue" : "none",
                      transition: "border-bottom 0.3s ease",
                    }}
                  >
                    <EyeOutlined style={{ fontSize: "1.25rem" }} />
                    Timeline
                  </NavLink>
                  <NavLink
                    to=""
                    onClick={() => setActiveTab("about")}
                    style={{
                      fontWeight: "600",
                      color: activeTab === "about" ? "black" : "black",
                      fontSize: "1.2rem",
                      textDecoration: "none",
                      borderBottom:
                        activeTab === "about" ? "0.125rem solid blue" : "none",
                      transition: "border-bottom 0.3s ease",
                    }}
                  >
                    <UserOutlined style={{ fontSize: "1.25rem" }} />
                    About
                  </NavLink>
                </div>
                <div style={{ width: "100%" }}>
                  <Divider style={{ marginTop: "-0.0625rem", width: "100%" }} />
                </div>
                <div>
                  <Outlet />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default Profile;
