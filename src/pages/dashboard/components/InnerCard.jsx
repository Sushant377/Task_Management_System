import { Avatar, Badge, Card, Col, Flex, Row, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { MEDIA_BASE_URL } from "../../../config/AppConfig";
import { CommentOutlined, PaperClipOutlined } from "@ant-design/icons";
/* eslint-disable react/prop-types */
export default function InnerCard({ data }) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "100%", marginBottom: "1rem" }}
      size="small"
      type="inner"
      hoverable
      onClick={() => {
        navigate(`task/${data.id}`);
      }}
    >
      <Flex style={{ borderRadius: "20px" }}>
        {data.cover && (
          <img
            src={MEDIA_BASE_URL + data.cover}
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
      </Flex>
      <Flex gap={"5px"} style={{ marginTop: "5px" }}>
        {data.labels.map((data, index) => (
          <Tooltip key={index} placement="top" title={data.label}>
            <span
              style={{
                backgroundColor: data.color,
                width: "35px",
                height: "3px",
              }}
            ></span>
          </Tooltip>
        ))}
      </Flex>
      <Flex style={{ fontSize: "17px" }}>
        <b>{data.name}</b>
      </Flex>
      <Row
        justify="space-between"
        align="center"
        gutter={0}
        style={{ marginTop: "8px" }}
      >
        <Col>
          <p>{data.duedate}</p>
        </Col>
        <Col>
          <Flex gap={"10px"}>
            <Badge style={{}} count={data?.comments?.length}>
              <CommentOutlined
                style={{
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "end ",
                }}
              />
            </Badge>
            <Badge style={{}} count={data?.attachments?.length}>
              <PaperClipOutlined
                style={{
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "end",
                }}
              />
            </Badge>
          </Flex>
        </Col>
        <Col>
          <Avatar.Group
            maxCount={2}
            size="small"
            maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            {data?.members?.map((data, index) => (
              <Tooltip key={index} title={data.name} placement="top">
                <Avatar src={MEDIA_BASE_URL + data.imag} />
              </Tooltip>
            ))}
          </Avatar.Group>
        </Col>
      </Row>
    </Card>
  );
}
