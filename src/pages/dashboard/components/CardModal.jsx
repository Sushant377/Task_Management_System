/* eslint-disable react/prop-types */
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  message,
  Flex,
  Button,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddTask } from "../../../apis/addTask";
import { getAllTask } from "../../../apis/getTask";
import userList from "../../../apis/userApi";
import { getLabels } from "../../../apis/getLabel";
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

function CardModal({ visible, onAddCard, onCancel }) {
  const [form] = Form.useForm();
  /* invalidateQueries for refreshing after the success of post method */
  const queryClient = useQueryClient();

  /* Mutation (POST) method for add task */
  const api = message.useMessage();
  const addMutation = useMutation({
    mutationFn: AddTask,
    onError: (err) => {
      console.log(err);
      api.error(err);
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["getAllTask"] });
      console.log(data);
    },
  });

  const onFinish = (data) => {
    form.validateFields().then((values) => {
      onAddCard(values);
      form.resetFields();
      addMutation.mutate(data);
    });
  };

  /* GET method of getTask API*/
  const { data } = useQuery({
    queryFn: getAllTask,
    queryKey: ["getAllTask"],
  });

  /* GET method of user API*/
  const { data: userData } = useQuery({
    queryFn: userList,
    queryKey: ["userList"],
  });

  /* GET method of getLabel API*/
  const { data: labelData } = useQuery({
    queryFn: getLabels,
    queryKey: ["getLabels"],
  });

  return (
    <Modal
      title="Add New Task"
      open={visible}
      footer={null}
      onOk={onFinish}
      onCancel={onCancel}
      styles={{ maxHeight: "calc(100vh - 200px)", overflow: "auto" }}
    >
      <Form onFinish={onFinish} form={form} layout="vertical">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item
            name="name"
            label="Name"
            style={{ flex: "1", marginRight: "20px" }}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Item name="assign_to" label="Assigned To" style={{ flex: "1" }}>
            <Select mode="multiple" placeholder="Select users">
              {userData?.map((data, index) => (
                <Option key={index} value={data.id}>
                  {data.username}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="duedate"
            label="Due Date"
            style={{ flex: "1", marginLeft: "20px" }}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="labels"
            label="Labels"
            style={{ flex: "1", marginLeft: "20px" }}
          >
            <Select mode="multiple" placeholder="Select labels">
              {labelData?.map((data, index) => (
                <Option
                  key={index}
                  value="task"
                  style={{ backgroundColor: data.color }}
                >
                  {data.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div>
          <Form.Item
            initialValue={data.title}
            name="stage"
            label="Stage"
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
          name="attachments"
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

export default CardModal;
