import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddListModal from "./components/AddListModal";
import { useState } from "react";

function AddList() {
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
        margin: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
     >
      <PlusOutlined />
      Add List
    </Button>
    <AddListModal
              visible={isModalVisible}
              onCancel={handleCancel}
              onAddCard={handleAddCard}
    />

  </>
  );
}

export default AddList;
