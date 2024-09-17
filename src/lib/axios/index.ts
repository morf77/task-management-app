import axios, { AxiosRequestConfig } from "axios";
import { config } from "../configs/env-values";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: config.baseUrl,
  headers: {
    // no default header for this test project
  },
};

const axiosInstance = axios.create(axiosRequestConfig);

axiosInstance.interceptors.request.use(
  async (requestConfig) => {
    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error?.response?.status) {
      case 400:
        console.log("something went wrong probably in front-end side");

        break;

      case 401:
        console.log("something went wrong probably in front-end side");

        break;

      case 403:
        console.log("something went wrong probably in front-end side");

        break;

      case 404:
        console.log("something went wrong probably in front-end side", config);
        break;

      case 422:
        console.log("something went wrong probably in front-end side");

        break;

      case 500:
        console.log("something went wrong probably in back-end side");

        break;
      case 502:
        console.log("something went wrong probably in back-end side");

        break;
      case 503:
        console.log("something went wrong probably in back-end side");

        break;
      case 504:
        console.log("something went wrong probably in back-end side");

        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
