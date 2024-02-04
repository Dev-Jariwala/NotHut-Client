import axios from "axios";
import BACKEND_URL from "../assets/BACKEND_URL";

export async function userLogin(formData) {
  try {
    const response = await axios.post(`${BACKEND_URL}user/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
