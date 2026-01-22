import axios, { AxiosRequestConfig } from "axios";
import { useAuth } from "@clerk/nextjs";

async function getAccessToken() {
  const token = await useAuth()?.getToken();
  return token;
}

const config: AxiosRequestConfig = {
  baseURL: "https://forms.googleapis.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getAccessToken()}`,
  },
};

const FormAPI = axios.create(config);

export default FormAPI;