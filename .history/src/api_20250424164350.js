import axios from "axios";

const API_BASE_URL = "https://api.github.com"; // Replace with your API's base URL

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}`);
    return{ data: response.data, error};
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};