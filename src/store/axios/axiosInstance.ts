// src/axios/axiosInstance.ts
import { BASE_API_URL } from '@/config/url';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
});



export default axiosInstance;