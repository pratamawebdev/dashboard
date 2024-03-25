import axios from "axios";

interface LoginForm {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  accessToken: string;
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const loginUser = async (
  formData: LoginForm
): Promise<LoginResponse> => {
  try {
    const response = await api.post("/auth/login", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
