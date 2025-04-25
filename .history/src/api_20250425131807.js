import axios from "axios";

const API_BASE_URL = "https://api.github.com"; // Replace with your API's base URL

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username.toLowerCase()}`);
    return { data: response.data, error: null };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return {
        data: null,
        error: "Usuário não encontrado no GitHub 🕵️‍♀️",
      };
    }

    return {
      data: null,
      error: "Erro ao buscar dados. Tente novamente mais tarde.",
    };
  }
};
=>