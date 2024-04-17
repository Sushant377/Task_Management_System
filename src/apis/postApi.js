import axios from "axios";
import { API_BASE_URL } from "../config/AppConfig";
import Cookies from "js-cookie";

//api for add task
async function addTask(data) {
  const token = Cookies.get("token");
  try {
    const response = await axios({
      method: "post",
      url: `${API_BASE_URL}api/v1/task/`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return Promise.reject(err.response.data.detail);
    } else return Promise.reject(err.message);
  }
}

//api for add list

//api for add task
async function addList(data) {
  const token = Cookies.get("token");

  try {
    const response = await axios({
      method: "post",
      url: `${API_BASE_URL}api/v1/taskstage/`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (err.response) {
      return Promise.reject(err.response.data.detail);
    } else return Promise.reject(err.message);
  }
}
export { addTask, addList };
