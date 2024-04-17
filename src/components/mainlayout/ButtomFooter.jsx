import { Layout } from "antd";

const { Footer } = Layout;

function ButtomFooter() {
  return (
    <div style={{ marginTop: "auto" }}>
      <Layout>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ITBridgeNepal ©{new Date().getFullYear()} Created by ITBridgeNepal
        </Footer>
      </Layout>
    </div>
  );
}

export default ButtomFooter;
