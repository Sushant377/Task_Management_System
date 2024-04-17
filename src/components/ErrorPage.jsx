import { Button, Result } from "antd";

const ErrorPage = () => (
  <Result
    status="404"
    title="404 Error"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button href="/user" type="primary">
        Back to Dashboard
      </Button>
    }
  />
);
export default ErrorPage;
