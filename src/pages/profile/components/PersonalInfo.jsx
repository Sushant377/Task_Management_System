import WorkProgressIndex from "./WorkProgressIndex";

function PersonalInfo() {
  const overallProgress = 70;

  return (
    <div>
      <div>
        <h1
          style={{
            fontWeight: "500",
            fontFamily: "revert",
            opacity: "80%",
          }}
        >
          Shakshyam Bohara
        </h1>
        <p
          style={{
            color: "skyblue",
            fontWeight: "bold",
            marginTop: "-0.4375rem",
          }}
        >
          Web designer
        </p>
      </div>
      <p
        style={{
          marginTop: "1.875rem",
          fontWeight: "bold",
          opacity: "70%",
        }}
      >
        Work Progress
      </p>
      <WorkProgressIndex style={{ size: "large" }} progress={overallProgress} />
    </div>
  );
}

export default PersonalInfo;
