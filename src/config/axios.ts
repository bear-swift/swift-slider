import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  // baseURL: `${process.env.NEXT_PUBLIC_BASE_API}`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
