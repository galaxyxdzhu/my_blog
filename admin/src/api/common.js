import axios from './axios';

/**
 * 登录
 * @param {string} username 
 * @param {string} password 
 */
export const login = async (username, password) => {
    const result = await axios.post('/login', {username, password});
    return result;
}


export default {
    login
}