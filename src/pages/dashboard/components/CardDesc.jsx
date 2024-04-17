/* eslint-disable react/prop-types */
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Flex,
  Form,
  Row,
  Select,
  Space,
  Spin,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { NavLink, useParams } from "react-router-dom";

import {
  FileOutlined,
  CommentOutlined,
  MoreOutlined,
  PaperClipOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { taskDesc } from "../../../apis/getTask";
import { useQuery } from "@tanstack/react-query";
import { MEDIA_BASE_URL } from "../../../config/AppConfig";
import { useEffect, useState } from "react";
import { getLabels } from "../../../apis/getLabel";
import { userList } from "../../../apis/userApi";
import Comment from "./CardComment";
const handleChange = (value) => {
  console.log(value);
};

function CardDesc() {
  const items = [
    {
      label: (
        <Button
          block
          // onClick={() => handleSetCover(MEDIA_BASE_URL + data.image)}
        >
          <StarOutlined /> set as a Cover
        </Button>
      ),
      key: "0",
    },
  ];
  let { id } = useParams();
  const { data, isSuccess, isFetching } = useQuery({
    queryFn: () => taskDesc(id),
    queryKey: ["taskDesc"],
  });
  const { data: labeldata } = useQuery({
    queryFn: getLabels,
    queryKey: ["getLabels"],
  });
  const labelArr = data?.labels?.map((data) => data.id);

  const [description, setDescription] = useState("");
  useEffect(() => {
    if (data && data.description) {
      setDescription(data.description);
    }
  }, [data]);
  const { data: userData } = useQuery({
    queryFn: () => {
      return userList();
    },
    queryKey: ["userList"],
  });
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    isSuccess && (
      <Spin spinning={isFetching}>
        <Card>
          <Row>
            <Col xs={24} md={24} xl={24}>
              <Flex style={{ width: "100%" }} vertical>
                <h2>{data.name}</h2>
                <p>Board:</p>

                {/* Form Section */}
                <Form layout="vertical">
                  <Flex justify="space-evenly">
                    <Col xs={0} xl={8} md={8}>
                      <Flex vertical>
                        <Form.Item label="Assigned to">
                          <Select
                            maxTagCount="responsive"
                            mode="multiple"
                            style={{
                              width: "80%",
                            }}
                            onChange={handleChange}
                            optionLabelProp="label"
                            options={userData.map((users) => ({
                              label: (
                                <span>
                                  <Avatar
                                    src=""
                                    style={{
                                      height: "2rem",
                                      width: "2rem",
                                    }}
                                  />
                                  &nbsp;{users.username}
                                </span>
                              ),
                              value: users.username,
                              desc: users.name,
                            }))}
                          />
                        </Form.Item>
                      </Flex>
                    </Col>
                    <Col xs={0} md={8} xl={8}>
                      <Flex vertical style={{ height: "25%", width: "100%" }}>
                        <Form.Item label="Due Date">
                          <DatePicker
                            defaultValue={data.dueDate}
                            style={{ width: "80%" }}
                            renderExtraFooter={() => "extra footer"}
                          />
                        </Form.Item>
                      </Flex>
                    </Col>
                    <Col xs={0} md={8} xl={8}>
                      <Flex vertical>
                        <Form.Item label="Labels">
                          <Select
                            defaultValue={labelArr}
                            maxTagCount="responsive"
                            mode="multiple"
                            style={{
                              width: "80%",
                            }}
                            options={labeldata?.map((label) => ({
                              label: (
                                <span>
                                  <Avatar
                                    style={{
                                      backgroundColor: label.color,
                                      height: "1rem",
                                      width: "1rem",
                                    }}
                                  />
                                  &nbsp;{label.label}
                                </span>
                              ),

                              value: label.id,
                            }))}
                            onChange={handleChange}
                          />
                        </Form.Item>
                      </Flex>
                    </Col>
                  </Flex>
                </Form>
                <Form layout="vertical">
                  <Col xs={24} xl={0} md={0}>
                    <Flex vertical>
                      <Form.Item label="Assigned to">
                        <Select
                          maxTagCount="responsive"
                          mode="multiple"
                          style={{
                            width: "64%",
                          }}
                          onChange={handleChange}
                          optionLabelProp="label"
                          options={data.assign_to.map((assignee) => ({
                            label: assignee.name,
                            value: assignee.id,
                            desc: assignee.name,
                          }))}
                        />
                      </Form.Item>
                    </Flex>
                  </Col>
                  <Col xs={24} md={0} xl={0}>
                    <Flex vertical style={{ height: "25%" }}>
                      <Form.Item label="Due Date">
                        <DatePicker
                          style={{ width: "64%" }}
                          renderExtraFooter={() => "extra footer"}
                          showTime
                        />
                      </Form.Item>
                    </Flex>
                  </Col>
                  <Col xs={24} md={0} xl={0}>
                    <Flex vertical>
                      <Form.Item label="Labels">
                        <Select
                          maxTagCount="responsive"
                          mode="multiple"
                          style={{
                            width: "64%",
                          }}
                          onChange={handleChange}
                          optionLabelProp="label"
                          options={data.labels.map((label) => ({
                            label: label.label,
                            value: label.id,
                          }))}
                        />
                      </Form.Item>
                    </Flex>
                  </Col>
                </Form>

                <Divider />

                {/* Description Section */}
                <Flex vertical gap={5}>
                  <Flex gap={10}>
                    <FileOutlined style={{ fontSize: "24px" }} />
                    <h2>Description</h2>
                  </Flex>
                  <div style={{ width: "95%", marginLeft: "35px" }}>
                    <TextArea
                      value={description}
                      onChange={handleDescriptionChange}
                      placeholder="Write Description..."
                      style={{ minHeight: "10rem" }}
                    />
                  </div>
                </Flex>

                {/* Attachment Section */}
                <Flex vertical gap={5}>
                  <Flex gap={10}>
                    <PaperClipOutlined style={{ fontSize: "24px" }} />
                    <h2>Attachments</h2>
                  </Flex>
                  <Col xs={16} md={24} xl={24}>
                    <Flex wrap="wrap" gap={5}>
                      {data.attachments.map((data, index) => (
                        <Card
                          key={index}
                          style={{ width: "260px", marginBottom: "1rem" }}
                          size="small"
                          type="inner"
                          hoverable
                        >
                          <div style={{ borderRadius: "20px" }}>
                            {data.image && (
                              <img
                                src={MEDIA_BASE_URL + data.image}
                                height={"150px"}
                                width={"100%"}
                                alt=""
                                style={{
                                  borderRadius: "15px",
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                              />
                            )}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div>
                                <p>{data.name}</p>
                                <p>{data.size}</p>
                              </div>
                              <div style={{ marginTop: "15px" }}>
                                <NavLink>
                                  <Dropdown
                                    menu={{ items }}
                                    trigger={["click"]}
                                  >
                                    <Space>
                                      <MoreOutlined
                                        style={{ fontSize: "24px" }}
                                      />
                                    </Space>
                                  </Dropdown>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </Flex>
                  </Col>
                </Flex>

                {/* Comment Section */}
                <Flex vertical gap={5}>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <CommentOutlined style={{ fontSize: "24px" }} />
                    <h2>Comments ({data.comments.length})</h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "30px",
                    }}
                  >
                    <Comment comment={data?.comments} />
                  </div>
                </Flex>
              </Flex>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "10px",
            }}
          >
            <Button type="primary">Change</Button>
          </div>
        </Card>
      </Spin>
    )
  );
}

export default CardDesc;
