import axios from './axios';

/**
 * 获取用户信息
 */
export const getUserinfo = async () => {
    const result = await axios.get('/userinfo');
    return result;
}


export default {
    getUserinfo
}