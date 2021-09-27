const {query} = require('./query');

async function getUsers() {
    const results = await query('select * from user');
    return results;
}

async function hasUser(username) {
    const results = await query(`select id from user where username='${username}'`);
    return results;
}


module.exports = {
    getUsers,
    hasUser
}