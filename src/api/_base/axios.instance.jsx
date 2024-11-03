import axios from "axios";
import { API_URL } from "../../constants/apiUrl";

export const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 60000,
    withCredentials: true,
})
