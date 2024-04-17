import axios from "axios";
import { API_BASE_URL } from "../config/AppConfig";
import Cookies from "js-cookie";
async function getAllTask() {
  const token = Cookies.get("token");
  try {
    const response = await axios({
      method: "get",
      url: `${API_BASE_URL}api/v1/taskstage`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return Promise.reject(err.response.data);
    } else return Promise.reject(err.message);
  }
}

async function taskDesc(id) {
  const token = Cookies.get("token");
  try {
    const response = await axios({
      method: "get",
      url: `${API_BASE_URL}api/v1/task/${id}`,

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return Promise.reject(err.response.data);
    } else return Promise.reject(err.message);
  }
}

export { getAllTask, taskDesc };
