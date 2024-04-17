/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Card,
  Divider,
  Form,
  Input,
  Space,
  message,
} from "antd";
import { useParams } from "react-router-dom";
import { SendOutlined } from "@ant-design/icons";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { registerComment } from "../../../apis/comments";
import { useQueryClient } from "@tanstack/react-query";
import { MEDIA_BASE_URL } from "../../../config/AppConfig";

function Comment({ comment }) {
  const [form] = Form.useForm();
  let { id } = useParams();
  const queryClient = useQueryClient();
  const api = message.useMessage();

  const commentsMutation = useMutation({
    mutationFn: registerComment,
    onError: (err) => {
      console.log(err);
      api.error(err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["taskDesc"],
      });
      console.log(data);
    },
  });

  function onFinish(data) {
    form.resetFields();
    const finalData = {
      ...data,
      task: id,
      name: "milan",
    };
    commentsMutation.mutate(finalData);
  }

  return (
    <>
      {/* this component displays comments */}
      {comment.map((data, index) => (
        <React.Fragment key={index}>
          <div style={{ display: "flex", gap: "10px" }}>
            <Avatar src={MEDIA_BASE_URL + data.image} />
            <Card
              title={`${data.name} | ${data.date}`}
              style={{ width: "100%" }}
            >
              {data.message}
            </Card>
          </div>
          <Divider />
        </React.Fragment>
      ))}

      {/* this component sends comment */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Avatar src="/Anish.JPG " />
        <Card style={{ width: "100%" }}>
          <Form onFinish={onFinish} form={form}>
            <Space.Compact>
              <Form.Item
                style={{
                  width: "67vw",
                }}
                name={"message"}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  placeholder="Write comment"
                />
              </Form.Item>

              <Button htmlType="submit">
                <SendOutlined />
              </Button>
            </Space.Compact>
          </Form>
        </Card>
      </div>
    </>
  );
}
export default Comment;
