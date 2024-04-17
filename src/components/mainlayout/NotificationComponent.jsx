import { List, Avatar, Button } from "antd";

import { NavLink } from "react-router-dom";

const notifications = [
  {
    id: 1,
    avatar: "/img/avatars/thumb-1.jpg",
    username: "Erin Gonzales",
    message: "has comment on your board",
    time: "7:57PM",
  },
  {
    id: 2,
    avatar: "/img/avatars/thumb-8.jpg",
    username: "Frederick Adams",
    message: "has mentioned you in a post",
    time: "3:12PM",
  },
];

const NotificationComponent = () => {
  return (
    <div style={{ maxWidth: 300 }}>
      <div
        style={{
          borderBottom: "1px solid #e8e8e8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 12px",
        }}
      >
        <h4 style={{ margin: 0 }}>Notification</h4>
        <Button type="text" size="small" style={{ color: "#1890ff" }}>
          Clear
        </Button>
      </div>
      <div
        className="nav-notification-body"
        style={{ maxHeight: 300, overflowY: "auto" }}
      >
        <List
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item style={{ cursor: "pointer", padding: "8px 12px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: 10 }}>
                  {item.avatar && <Avatar src={item.avatar} />}
                  {item.icon && item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  {item.username && (
                    <>
                      <span style={{ fontWeight: "bold", color: "#000" }}>
                        {item.username}
                      </span>
                      &nbsp;
                      <span style={{ color: "#999" }}>{item.message}</span>
                    </>
                  )}
                  {item.icon && (
                    <span style={{ color: "#999" }}>{item.message}</span>
                  )}
                </div>
                <small style={{ marginLeft: "auto", color: "#999" }}>
                  {item.time}
                </small>
              </div>
            </List.Item>
          )}
        />
      </div>
      <div
        style={{
          borderTop: "1px solid #e8e8e8",
          padding: "8px 12px",
          textAlign: "center",
        }}
      >
        <NavLink>View all</NavLink>
      </div>
    </div>
  );
};

export default NotificationComponent;
