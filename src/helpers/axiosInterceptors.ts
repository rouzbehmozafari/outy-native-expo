import axios from 'axios'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import env from '../config/env'

let headers = {}

const axiosInstance = axios.create({
    baseURL: env.BACKEND_URL,
    headers: headers
})

axiosInstance.interceptors.request.use(
    async (config:any ) => {
      // const token = await AsyncStorage.getItem('token');
      const token = 'x'
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
  
      if (error.response.status === 403) {
        // navigate(LOGOUT, {tokenExpired: true});
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    },
  );
  
  export default axiosInstance