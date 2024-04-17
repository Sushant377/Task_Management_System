/* eslint-disable react/prop-types */
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  Flex,
  Button,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTask } from "../../../apis/postApi";
import { getAllTask } from "../../../apis/getTask";
import { userList } from "../../../apis/userApi";

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

function AddTaskModal({ visible, onCancel, onAddCard }) {
  const { data } = useQuery({ queryFn: getAllTask, queryKey: ["getAllTask"] });
  const { data: userListData } = useQuery({
    queryFn: userList,
    queryKey: ["userList"],
  });

  const queryClient = useQueryClient();
  const AddTaskModalMutation = useMutation({
    mutationFn: addTask,
    onError: (err) => {
      console.log(err);
    },
    onSuccess: () => {
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
    AddTaskModalMutation.mutate(data);
  }
  return (
    <Modal
      title="Add New Task"
      open={visible}
      onCancel={onCancel}
      footer={null}
      styles={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
    >
      <Form form={form} layout="vertical" onFinish={handleAdd}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            name="name"
            label="Name"
            style={{ flex: "2", marginRight: "20px" }}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item name="assign_to" label="Assigned To" style={{ flex: "1" }}>
            <Select mode="multiple" placeholder="Select users">
              {userListData?.map((data, index) => (
                <Option key={index} value={data.id}>
                  {data.username}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="dueDate"
            label="Due Date"
            style={{ flex: "1", marginLeft: "20px" }}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="label"
            label="Label"
            style={{ flex: "1", marginLeft: "20px" }}
          >
            <Select mode="multiple" placeholder="Select labels">
              <Option value={1} style={{ color: "blue" }}>
                Task
              </Option>
              <Option value={2} style={{ color: "red" }}>
                Bug
              </Option>
              <Option value={3} style={{ color: "orange" }}>
                Live Issue
              </Option>
              <Option value={4} style={{ color: "green" }}>
                Low Priority
              </Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <Form.Item
            initialValue={data.title}
            name="stage"
            label="Board Name"
            style={{ flex: "1" }}
          >
            <Select>
              {data.map((data, index) => (
                <Option key={index} value={data.id}>
                  {data.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <Form.Item name="description" label="Description">
          <TextArea size="10px" rows={4} placeholder="Enter description" />
        </Form.Item>
        <Form.Item
          name="attachment"
          label="Attachment"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
        >
          <Dragger
            multiple={false}
            beforeUpload={() => false}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            style={{ width: "100%", fontSize: "15px" }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </Form.Item>
        <Flex justify="space-between">
          <Button onClick={onCancel}>Cancel</Button>
          <Button htmlType="submit">Add</Button>
        </Flex>
      </Form>
    </Modal>
  );
}

export default AddTaskModal;
