import axios from 'axios';
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (url, params) => {
    const response = await request.get(url, params);
    return response.data;
};

export default request;
