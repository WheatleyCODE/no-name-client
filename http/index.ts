import axios from 'axios';
import { AuthResponse } from '@t';

export const API_URL_IP = 'http://192.168.0.100:5000';
export const API_URL = 'http://localhost:5000';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL_IP,
});

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (err) => {
    const originalRequest = err.config;
    if (err?.response?.status === 401 && err.config && !err.config.isRetry) {
      try {
        originalRequest._isRetry = true;
        const res = await axios.get<AuthResponse>(`${API_URL_IP}/api/auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', res.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e);
        console.log('НЕ авторизован');
      }
    }
    throw err;
  }
);

export default $api;
