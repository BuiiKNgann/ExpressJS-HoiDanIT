require('dotenv').config();
const express = require('express');// require express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express();// khởi tạo express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
//config static file
configViewEngine(app);


//Khai báo route
app.use('/', webRoutes)

//test connection

//simple query
connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>results= ", results);

    }
)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})