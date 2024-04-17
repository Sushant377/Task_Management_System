const dev = {
  API_ENDPOINT_URL: "http://192.168.0.122:8001/",
  MEDIA_ENDPOINT_URL: "http://192.168.0.122:8001",
};

const prod = {
  API_ENDPOINT_URL: "",
  MEDIA_ENDPOINT_URL: "",
};

const NODE_ENV = "development";

const getEnv = () => {
  switch (NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      break;
  }
};

export const env = getEnv();
