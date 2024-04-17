import { Divider } from "antd";

function ProfileWork() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0.875rem",
        }}
      >
        <div style={{ fontWeight: "300", fontSize: "0.8em" }}>Work</div>
        <div
          style={{
            width: "80%",
            marginTop: "-1rem",
            marginRight: "1.8rem",
          }}
        >
          <Divider />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "0.8125rem",
          marginTop: "-1rem",
        }}
      >
        <div
          style={{
            fontWeight: "500",
            opacity: "70%",
            marginTop: "0.625rem",
          }}
        >
          Branding
        </div>
        <div
          style={{
            fontWeight: "500",
            opacity: "70%",
            marginTop: "0.625rem",
          }}
        >
          UNUX
        </div>
        <div
          style={{
            fontWeight: "500",
            opacity: "70%",
            marginTop: "0.625rem",
          }}
        >
          Web-design
        </div>
        <div
          style={{
            fontWeight: "500",
            opacity: "70%",
            marginTop: "0.625rem",
          }}
        >
          Packaging
        </div>
        <div
          style={{
            fontWeight: "500",
            opacity: "70%",
            marginTop: "0.625rem",
          }}
        >
          Price-Linux
        </div>
      </div>
    </div>
  );
}

export default ProfileWork;
