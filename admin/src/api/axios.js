import axios from 'axios';


const instance = axios.create({
    baseURL: '/api',
    timeout: 1000,
})

/**
 * 请求拦截器
 */
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.token = token;
    }
    return config;
}, (err) => {
    console.log(err);
})


/**
 * 响应拦截器
 */
instance.interceptors.response.use((response) => {
    const {status, data} = response;
    if (status && status === 200) {
        return data;
    }
    return Promise.reject(response);
}, err => {
    console.log(err);
    return Promise.reject(err);
})



export default instance;