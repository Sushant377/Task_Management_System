import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

function BreadCrumbRoute() {
  const location = useLocation();

  const generateBreadcrumbItems = () => {
    const paths = location.pathname.split("/").filter((path) => path !== "");
    let url = "";
    return paths.map((path, index) => {
      url += `/${path}`;
      return (
        <Breadcrumb.Item key={index}>
          <Link to={url}>{path.toUpperCase()}</Link>
        </Breadcrumb.Item>
      );
    });
  };

  return (
    <Breadcrumb
      style={{
        margin: "16px 0",
        display: "flex",
        marginLeft: "52px",
      }}
    >
      {generateBreadcrumbItems()}
    </Breadcrumb>
  );
}

export default BreadCrumbRoute;
