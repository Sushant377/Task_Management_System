import { useState } from 'react';
import { Form, Input, Button, message, Space } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email input, Step 2: OTP input, Step 3: Password reset
  const navigate = useNavigate();

  const handleEmailSubmit = () => {
    message.success('OTP sent to your email');
    setStep(2); // Move to the OTP input step
  };

  const handleOtpSubmit = () => {
    message.success('OTP verified successfully');
    setStep(3); // Move to the password reset step
  };

  const handlePasswordReset = () => {
    message.success('Password reset successful');
    // Handle password reset logic here
    navigate('/login'); // Redirect to the login page after password reset
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      {step === 1 ? (
        <Form onFinish={handleEmailSubmit} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Please enter a valid email address',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Send OTP
            </Button>
          </Form.Item>
        </Form>
      ) : step === 2 ? (
        <Form onFinish={handleOtpSubmit} layout="vertical">
          <Form.Item
            label="OTP"
            name="otp"
            rules={[
              {
                required: true,
                message: 'Please input the OTP sent to your email!',
              },
            ]}
          >
            <Input
              prefix={<KeyOutlined />}
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Verify OTP
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form onFinish={handlePasswordReset} layout="vertical">
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              {
                required: true,
                message: 'Please input your new password!',
              },
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined />}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              {
                required: true,
                message: 'Please confirm your new password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined />}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      )}
      <Space direction="horizontal" align="center">
        {step > 1 && (
          <Button type="link" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        <Button type="link" onClick={() => navigate('/login')}>
          Cancel
        </Button>
      </Space>
    </div>
  );
}

export default ForgotPassword;
