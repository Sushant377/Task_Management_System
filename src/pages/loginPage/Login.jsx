/* eslint-disable react/no-unescaped-entities */
import { Button, Checkbox, Form, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/authApi";
import useAuthStore from "../../store/authStore";



function Login() {
  const navigate=useNavigate();
  const [api, context] = message.useMessage();
  
  const { setAuth } = useAuthStore();
  const loginMutation = useMutation({
    mutationFn: login,
    onError: (err) => {
      console.log(err);
      api.error(err);
    },
    onSuccess: (data) => {
      console.log(data);
      setAuth({ token: data.access, userData: { isLoggedIn: true } });
      navigate("/user");
    },
  });

  function onFinish(data) {
    let bodyFormData = new FormData();
    bodyFormData.append("email", data.email);
    bodyFormData.append("password", data.password);

    loginMutation.mutate(bodyFormData);
  }

  return (
    <Form
      requiredMark={false}
      layout="vertical"
      name="normal_login"
      size="large"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {context}
      <h1 style={{}}>Login</h1>
      <span
        style={{
          display: "block",

          margin: " 5px 0",
        }}
      >
        Don't have an account? <NavLink to="/register">Register now!</NavLink>
      </span>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Enter your Email"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Enter your Password"
        />
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>
        <NavLink to="/forgotpass"
          style={{ float: "right" }}
        >
          Forgot password
        </NavLink>
       
      </Form.Item>
      <Form.Item>
        <Button
          loading={loginMutation.isPending}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block
        >
          Log in
        </Button>
      </Form.Item>
      <Button
        block
        type="primary"
        onClick={() => {
          setAuth({ token: "ball", userData: { isLoggedIn: true } });
          navigate("/user");
        }}
      >
        Token
      </Button>
    </Form>
  );
}

export default Login;
