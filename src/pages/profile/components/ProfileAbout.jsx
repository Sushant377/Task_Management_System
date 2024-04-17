function ProfileAbout() {
  return (
    <div>
      <div style={{ fontWeight: "bold", opacity: "30%" }}>
        Contact Information
      </div>
      <div style={{ display: "flex", gap: "60px" }}>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "500", opacity: "70%" }}>Phone</div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Address
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Email
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Site
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div style={{ fontWeight: "500", opacity: "90%", color: "skyblue" }}>
            +87343454356867
          </div>
          <div
            style={{
              fontWeight: "500",
              opacity: "70%",
              marginTop: "10px",
            }}
          >
            Banepa-5,kavre,Nepal
          </div>
          <div
            style={{
              fontWeight: "500",
              opacity: "90%",
              marginTop: "10px",
              color: "skyblue",
            }}
          >
            udwhdwiii@gmail.com
          </div>
          <div
            style={{
              fontWeight: "500",
              opacity: "90%",
              marginTop: "10px",
              color: "skyblue",
            }}
          >
            www.mywebsite.com
          </div>
        </div>
      </div>
      <div style={{ fontWeight: "bold", opacity: "30%", marginTop: "20px" }}>
        Personal Information
      </div>
      <div style={{ display: "flex", gap: "60px" }}>
        <div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Birthday
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Gender
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Jun 1,2001
          </div>
          <div style={{ fontWeight: "500", opacity: "70%", marginTop: "10px" }}>
            Male
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAbout;
