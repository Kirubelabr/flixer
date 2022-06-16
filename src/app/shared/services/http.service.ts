import axios from 'axios';

const axiosService = () => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        return Promise.reject(error.response);
      } else if (error.request) {
      } else {
        // Something happened in setting up the request that triggered an Error
      }
    }
  );
  return instance;
};
export const httpService = axiosService();
