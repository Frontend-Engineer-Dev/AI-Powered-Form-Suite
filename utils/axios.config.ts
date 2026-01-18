import axios, { AxiosRequestConfig } from "axios";

// Config
const config: AxiosRequestConfig = {
  baseURL: "",
};

const FormAPI = axios.create(config);

export default FormAPI;
