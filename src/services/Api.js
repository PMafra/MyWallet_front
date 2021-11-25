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
const sendNewRecord = ( token, body ) => axios.post(`${API_URL}/records`, body, createHeaders(token));
const getUserRecords = ( token ) => axios.get(`${API_URL}/records`, createHeaders(token));

export {
    signUp,
    signIn,
    signOut,
    sendNewRecord,
    getUserRecords
}