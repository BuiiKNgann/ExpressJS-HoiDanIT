const connection = require("../config/database");
const getAllUsers = async () => {
    let [results, fields] = await (await connection).execute('select * from Users');
    return results;
}
module.exports = {
    getAllUsers
}