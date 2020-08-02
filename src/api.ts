import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {ServerRoutes} from "@constants/routes";

enum ServerErrors {
  UNAUTHORIZED = 401,
}

export const createAPI = (onUnauthorized: () => void): AxiosInstance => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response: AxiosResponse) => {
    return response;
  };

  const onFail = (err: AxiosError) => {
    const {response} = err;

    if (response.status === ServerErrors.UNAUTHORIZED && (response.config.url !== ServerRoutes.LOGIN)) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
