import axios from "axios";
import { API_BASE_URL } from "../config/AppConfig";
import Cookies from "js-cookie";

async function deleteCardAPI(id) {
  const token = Cookies.get("token");
  try {
    const response = await axios.delete(
      `${API_BASE_URL}api/v1/taskstage/${id}/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (err) {
    if (err.response) {
      return Promise.reject(err.response?.data?.detail);
    } else {
      return Promise.reject(err.message);
    }
  }
}

export { deleteCardAPI };
