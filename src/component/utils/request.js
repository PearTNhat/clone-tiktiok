import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
export const get = async (url, params) => {
    const response = await request.get(url, params);
    return response.data;
};

export default request;
