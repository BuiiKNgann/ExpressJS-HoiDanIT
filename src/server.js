const express = require('express');// require express
const path = require('path');
require('dotenv').config();


const app = express();// khởi tạo express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views')); // khai báo thư mục
app.set('view engine', 'ejs') // định nghĩa thư viện ejs


//Khai báo route
app.get('/', (req, res) => {
    res.send('Hello World! & nodemon')
})

app.get('/abc', (req, res) => {
    res.send('check abc')
})

app.get('/hoidanit', (req, res) => {
    //  res.send('<h1>HOi DAN IT</h1>')
    res.render('sample.ejs') //view động
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})