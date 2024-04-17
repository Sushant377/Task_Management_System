import { Button, Divider } from "antd";

function Lcontent() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ fontWeight: "300", fontSize: "0.8em" }}>Work</div>
        <div
          style={{
            width: "80%",
            marginTop: "-1rem",
            marginRight: "2rem",
          }}
        >
          <Divider />
        </div>
      </div>
      <div style={{ display: "flex", gap: " 0.9375 rem" }}>
        <div>
          <h3>Spootify New York</h3>
        </div>
        <div>
          <Button
            type="primary"
            size="small"
            style={{ fontSize: "0.5625 rem", marginLeft: "0.8125rem" }}
          >
            Primary
          </Button>
        </div>
      </div>
      <div
        style={{
          fontWeight: "400",
          fontSize: "0.6875 rem",
        }}
      >
        <p style={{ fontWeight: "500", opacity: "70%" }}>125 68inch internet</p>
        <p style={{ fontWeight: "500", opacity: "70%" }}>
          New York,Npr rs 10101743
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "0.75rem" }}>
        <div>
          <h3 style={{ width: "30%" }}>Metropolitian Museum</h3>
        </div>
        <div style={{}}>
          <Button
            type="primary"
            size="small"
            style={{
              fontSize: "0.5625rem",
              marginLeft: "0.8125rem",
            }}
          >
            Secondary
          </Button>
        </div>
      </div>
      <div
        style={{
          fontWeight: "400",
          fontSize: "0.75rem",
        }}
      >
        <div style={{ fontWeight: "500", opacity: "70%" }}>
          125 68inch internet
        </div>
        <p style={{ fontWeight: "500", opacity: "70%" }}>
          New York,Npr 321546738248
        </p>
      </div>
    </div>
  );
}

export default Lcontent;
