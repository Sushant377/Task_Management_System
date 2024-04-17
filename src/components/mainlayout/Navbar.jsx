import { Layout, Avatar, Image, Button } from "antd";
import {
  UserOutlined,
  BellOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { Dropdown, Space, Popover } from "antd";
import NotificationComponent from "./NotificationComponent";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const { Header } = Layout;

const language = [
  {
    label: " English",
    key: "1",
    icon: <img src="../uk.png" height={24} width={32} />,
  },
  {
    label: "Nepali",
    key: "2",
    icon: <img src="../nepal.png" height={24} width={32} />,
  },
];

function Navbar() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const profile = [
    {
      label: (
        <Button onClick={() => navigate("profile")} type="link">
          My Profile
        </Button>
      ),
      key: "0",
      icon: <UserOutlined />,
    },
    {
      label: (
        <Button
          type="link"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      ),
      key: "1",
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <div>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="demo-logo" style={{ cursor: "pointer" }}>
            <Image
              preview={false}
              height={50}
              width={55}
              color="white"
              src="../itbridge.png"
              onClick={() => {
                navigate("/user");
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Dropdown
              menu={{
                items: language,
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                  marginRight: "2px",
                }}
              >
                <GlobalOutlined />
              </div>
            </Dropdown>
            <Popover content={<NotificationComponent />} trigger="click">
              <div
                style={{
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                  padding: "15px",
                }}
              >
                <Button
                  style={{
                    color: "white",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  icon={<BellOutlined style={{ fontSize: "20px" }} />}
                ></Button>
              </div>
            </Popover>
            <Dropdown
              menu={{
                items: profile,
              }}
            >
              <Space>
                <Avatar
                  style={{
                    fontSize: "18px",
                    padding: "15px",
                    cursor: "pointer",
                  }}
                >
                  <UserOutlined />
                </Avatar>
              </Space>
            </Dropdown>
          </div>
        </Header>
      </Layout>
    </div>
  );
}

export default Navbar;
