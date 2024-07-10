const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDservice');
const getHomePage = async (req, res) => {


    let results = await getAllUsers();
    //   console.log(">>>check data: ", connection.query('select * from Users'));
    return res.render('home.ejs', { listUsers: results }) // x <-y

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