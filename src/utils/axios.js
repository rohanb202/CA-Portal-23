import axios from "axios";

const REACT_APP_BASE_BACKEND_URL =  process.env.REACT_APP_BASE_BACKEND_URL || "http://localhost:8000"

export default axios.create({
    baseURL: REACT_APP_BASE_BACKEND_URL,
});

export const axiosPrivate = axios.create({
    baseURL: REACT_APP_BASE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});