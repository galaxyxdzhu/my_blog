const {query} = require('../query');


/**
 * 是否存在用户名
 * @param {string} username 
 * @returns 
 */
async function hasUsername(username) {
    return results = await query(`select id from user where username='${username}'`);
}

/**
 * 获取用户信息
 * @param {string} username 
 * @returns 
 */
async function getUser(username) {
    const results = await query(`select * from user where username = ?`, [username]);
    return results;
}

/**
 * 检查用户密码是否正确
 * @param {string} username 
 * @param {string} passowrd 
 * @returns 
 */
async function checkUserPasswordByUsername(username, password) {
    return results = await query(`select id from user where username= ? and password= ?`, [username, password]);
}

async function registerUser({username, password}) {
    const results = await query(`INSERT INTO user (username, password) VALUES (?,  ?)`, [username, password]);
    return results;
}

module.exports = {
    getUser,
    hasUsername,
    checkUserPasswordByUsername,
    registerUser
}