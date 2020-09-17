import axios from 'axios';

const http = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://shuting.iijx.site' : '',
});

http.interceptors.response.use(res => {
    if (res && res.data && res.data.success) {
        return res.data;
    } else return Promise.reject(res.error)
}, error => Promise.reject(error))

export default http;