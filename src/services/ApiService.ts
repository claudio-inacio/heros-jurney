import axios from 'axios';
import { getApiBaseUrl } from '@/utils';


const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: getApiBaseUrl(),
})

export default api;