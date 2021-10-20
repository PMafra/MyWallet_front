import axios from "axios";

const API_URL = "";

const createHeaders = (token) => {
    return { headers: { Authorization: `Bearer ${token}` } };
}

const x = ({ token }) => axios.get(`${API_URL}/`, createHeaders(token));

export {
    x
}