/* eslint-disable react/prop-types */
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

function DeleteCard({id}) {
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
  return (
    <>
      <Button
        onClick={showModal}
        style={{
          height: "9%",
          width: "280px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DeleteOutlined />
        Delete
      </Button>
      <DeleteModal
        id={id}
        visible={isModalVisible}
        onCancel={handleCancel}
        onAddCard={handleAddCard}
      />
    </>
  );
}

export default DeleteCard;
