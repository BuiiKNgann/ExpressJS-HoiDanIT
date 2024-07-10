const connection = require("../config/database");
const getAllUsers = async () => {
    let [results, fields] = await (await connection).execute('select * from Users');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await (await connection).execute('select * from Users where id = ? ', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
module.exports = {
    getAllUsers, getUserById
}