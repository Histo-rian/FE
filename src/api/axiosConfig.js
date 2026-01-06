import axios from 'axios';
import { setupMockAdapter } from './mockAdapter';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim();

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Enable Mocking if VITE_USE_MOCK is true
if (import.meta.env.VITE_USE_MOCK === 'true') {
    setupMockAdapter(axiosInstance);
}

// Request Interceptor: Add JWT token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access (e.g., redirect to login or clear token)
            localStorage.removeItem('access_token');
            // window.location.href = '/login'; // Optional: auto redirect
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
