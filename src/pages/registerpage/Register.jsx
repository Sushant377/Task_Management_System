import { Button, Checkbox, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { MailOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
import { register } from "../../apis/authApi";

function Register() {
  const navigate = useNavigate();
  const [api, context] = message.useMessage();
  const registerMutation = useMutation({
    mutationFn: register,
    onError: (err) => {
      console.log(err);
      api.error(err);
    },
    onSuccess: (data) => {
      console.log(data);
      navigate("/login");
    },
  });
  const [form] = Form.useForm();
  const onFinish = (data) => {
    console.log("Received values of form: ", data);
    let bodyFormData = new FormData();
    bodyFormData.append("username", data.username);
    bodyFormData.append("email", data.email);
    bodyFormData.append("password", data.password);

    registerMutation.mutate(bodyFormData);
  };
  return (
    <Form
      size="medium"
      layout="vertical"
      form={form}
      name="register"
      onFinish={onFinish}
      requiredMark="optional"
      scrollToFirstError
    >
      {context}
      <h1
        style={{
          display: "flex",
          marginBottom: "15px",
        }}
      >
        Registration
      </h1>
      <p style={{ marginTop: "-19px", marginBottom: "10px" }}>
        Already Have an Account? <NavLink to="/login">Log in</NavLink>
      </p>
      <Form.Item
        name="name"
        label="Name"
        // colon={false}
        rules={[
          {
            required: true,
            message: "Please enter your name!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please enter your E-mail!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept T&C")),
          },
        ]}
      >
        <Checkbox>
          I agree to the <a href="">Terms and Conditions</a>
        </Checkbox>
      </Form.Item>

      <Button
        loading={registerMutation.isPending}
        type="primary"
        htmlType="submit"
        block
      >
        Register
      </Button>
    </Form>
  );
}

export default Register;
