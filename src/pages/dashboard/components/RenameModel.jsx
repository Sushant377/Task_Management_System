/* eslint-disable react/prop-types */
import { Modal, Form, Input, Flex, Button } from "antd";
import { RenameTask } from "../../../apis/renameTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function RenameModel({ visible, onCancel, id, title }) {
  /* invalidateQueries for refreshing after the success of post method */
  const queryClient = useQueryClient();
  const renameCardMutation = useMutation({
    mutationFn: RenameTask,
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["getAllTask"] });
    },
  });

  function handleRename(data) {
    const requestData = {
      data,
      id: id,
    };
    // console.log(requestData);
    renameCardMutation.mutate(requestData);
  }

  return (
    <>
      <Modal
        title="Rename Task"
        open={visible}
        footer={null}
        onCancel={onCancel}
        styles={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
      >
        <Form onFinish={handleRename}>
          <Form.Item initialValue={title} name="title">
            <Input />
          </Form.Item>
          <Flex style={{ paddingTop: "35px" }} justify="flex-end" gap={10}>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Rename
            </Button>
          </Flex>
        </Form>
      </Modal>
    </>
  );
}

export default RenameModel;
