import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const getUserInfo = async (): Promise<any> => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await api.get("/auth/me", {
      headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
