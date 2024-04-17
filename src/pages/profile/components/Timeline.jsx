function Timeline() {
  return (
    <div>
      <div style={{ fontWeight: "bold", opacity: "30%" }}>Preferences</div>
      <div style={{ display: "flex", gap: "60px" }}>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "500", opacity: "70%" }}>Language</div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Theme
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Notification
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "500", opacity: "70%" }}>English</div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Dark
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Pop Up
          </div>
        </div>
      </div>
      <div style={{ fontWeight: "bold", opacity: "30%", marginTop: "20px" }}>
        Interest and Hobbies
      </div>
      <div style={{ display: "flex", gap: "60px" }}>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "500", opacity: "70%" }}>Sports</div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Reading
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Gaming
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "500", opacity: "70%" }}>Football</div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Nobel
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            MobileLegend
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
