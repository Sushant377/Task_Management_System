import { useQuery } from "@tanstack/react-query";
import { getAllTask } from "../../apis/getTask";
import TaskList from "./components/TaskList";
import { Spin } from "antd";
import AddList from "./components/addList/AddList";
// import AddList from "./components/addList/AddList";
function Dashboard() {
  const { data, isSuccess, isFetching } = useQuery({
    queryFn: getAllTask,
    queryKey: ["getAllTask"],
  });

  // if (isFetching) {
  //   return <Skeleton />;
  // }
  return (
    <div
      style={{
        maxHeight: "70vh",
        overflowX: "auto",
        padding: 24,
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflowY: "hidden",
        scrollbarWidth: "thin",
        WebkitOverflowScrolling: "touch",
        "::webkitScrollbar": {
          height: "3px",
        },
      }}
    >
      <div style={{ flex: "0 0 auto", display: "inline-flex" }}>
        {isSuccess && (
          <>
            {data.map((data, index) => (
              <TaskList
                data={data.tasks}
                key={index}
                title={data.title}
                id={data.id}
              />
            ))}
          </>
        )}
        {isFetching && <Spin fullscreen spinning={true} />}
        <AddList />
      </div>
    </div>
  );
}

export default Dashboard;
