const connection = require('../config/database');

const getHomePage = (req, res) => {
    //process data
    //call model
    let users = [];

    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>>results= ", results);

            // console.log('check users: ', users);
            res.send(JSON.stringify(users))
        }
    );


}

const getABC = (req, res) => {
    res.send('check abc')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getABC, getHoiDanIT
}