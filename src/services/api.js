import axios from "axios";

const API_URL = "http://localhost:4000";

const createHeaders = (token) => {
    return { 
        headers: { 
            Authorization: `Bearer ${token}` 
        } 
    };
}

const signUp = ( body ) => axios.post(`${API_URL}/sign-up`, body);
const signIn = ( body ) => axios.post(`${API_URL}/sign-in`, body);
const signOut = ( token ) => axios.post(`${API_URL}/sign-out`, {}, createHeaders(token));

const x = ( token, body ) => axios.post(`${API_URL}/sign-in`, body, createHeaders(token));

export {
    signUp,
    signIn,
    signOut,
}