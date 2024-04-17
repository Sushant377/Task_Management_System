/* eslint-disable react/prop-types */
import { Modal, Form, Input, Flex, Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addList } from "../../../../../apis/postApi";
function AddListModal({ visible, onCancel, onAddCard }) {
  const queryClient = useQueryClient();
  const addListMutation = useMutation({
    mutationFn: addList,
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey: ["getAllTask"],
      });
    },
  });

  const [form] = Form.useForm();

  function handleAdd(data) {
    form.validateFields().then((values) => {
      onAddCard(values);
      form.resetFields();
    });

    addListMutation.mutate(data);
  }
  return (
    <Modal
      title="Add New Board"
      open={visible}
      onCancel={onCancel}
      footer={null}
      styles={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
    >
      <Form form={form} layout="vertical" onFinish={handleAdd}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            name="title"
            label="Board Name"
            style={{ flex: "2", marginRight: "20px" }}
          >
            <Input placeholder="Enter new board name" />
          </Form.Item>
        </div>

        <Flex justify="space-between">
          <Button onClick={onCancel}>Cancel</Button>
          <Button htmlType="submit">Add</Button>
        </Flex>
      </Form>
    </Modal>
  );
}

export default AddListModal;
