/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";
import { MoreOutlined, EditOutlined } from "@ant-design/icons";
import RenameModel from "./RenameModel";
import DeleteCard from "./delete/DeleteCard";
import AddTaskModal from "./AddTask";
import InnerCard from "./InnerCard";

function TaskList(props) {
  const { data, id, title } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleAddCard = () => {
    setIsModalVisible(false);
  };
  /* Show model for Add list */
  const [isRenameVisible, setIsRenameVisible] = useState(false);
  // const { data } = props;
  const showRenameModal = () => {
    setIsRenameVisible(true);
  };

  const handleRenameCancel = () => {
    setIsRenameVisible(false);
  };

  const handleRenameAddCard = () => {
    setIsRenameVisible(false);
  };

  const items = [
    {
      label: (
        <Button onClick={showRenameModal} block>
          <EditOutlined /> Rename Board
        </Button>
      ),
      key: "0",
    },
    {
      label: <DeleteCard id={id} />,
      key: "1",
    },
  ];
  return (
    <>
      <RenameModel
        data={data}
        title={title}
        id={id}
        visible={isRenameVisible}
        onCancel={handleRenameCancel}
        onAddCard={handleRenameAddCard}
      />
      <Card
        size="small"
        style={{
          margin: "5px",
          display: "flex",
          flexDirection: "column",
          WebkitTextSizeAdjust: "100%",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          lineHeight: "1.15",
          fontSize: "14px",
          boxSizing: "border-box",
          border: "1px solid #e6ebf1",
          backgroundColor: "#f0f2f5",
          borderRadius: ".625rem",
          minWidth: "300px",
        }}
        title={title}
        extra={
          <NavLink>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Space>
                <MoreOutlined style={{ fontSize: "24px" }} />
              </Space>
            </Dropdown>
          </NavLink>
        }
      >
        <div
          style={{
            height: "55vh",
            overflowX: "auto",
            display: "flex",
            flexDirection: "column",
            padding: "2px",
          }}
        >
          {data?.map((data, index) => (
            <InnerCard data={data} key={index} />
          ))}
        </div>
        <Button style={{ width: "100%" }} onClick={showModal}>
          Add task
        </Button>
      </Card>
      <AddTaskModal
        title={props.title}
        data={data}
        visible={isModalVisible}
        onCancel={handleCancel}
        onAddCard={handleAddCard}
      />
    </>
  );
}

export default TaskList;
