import axios from 'axios';

axios.defaults.withCredentials = true

const http = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'http://shuting.iijx.site' : ''
});

http.interceptors.response.use(res => {
    if (res && res.data && res.data.success) {
        return res.data;
    } else return Promise.reject(res.error)
}, error => Promise.reject(error))

export default http;