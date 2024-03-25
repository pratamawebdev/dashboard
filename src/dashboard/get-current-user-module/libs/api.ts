import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

interface User {
  id: number;
  image: string;
  firstName: string;
  gender: string;
}

export const getAllUsers = async (
  limit: number,
  skip: number
): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await api.get(
      `/users?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async (query: string): Promise<User[]> => {
  try {
    const response: AxiosResponse<User[]> = await api.get(
      `/users/search?q=${query}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId: number): Promise<void> => {
  try {
    await api.delete(`/users/${userId}`);
    console.log(`User with ID ${userId} deleted successfully.`);
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId: number): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addUser = async (userData: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.post(
      `/users/add`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
