const connection = require('../config/database');

const getHomePage = async (req, res) => {
    // let [results, fields] = await connection.query('select * from Users')
    // console.log("check rows: ", results);
    return res.render('home.ejs')

}

const getABC = (req, res) => {
    res.send('check abc')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log("email = ", email, 'name = ', name, 'city = ', city);
    //let {email, name, city} = req.body

    let [results, fields] = await (await connection).execute('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city])
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    // );

    res.send('Created user succeed !')

}


const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomePage, getABC, getHoiDanIT, postCreateUser, getCreatePage
}