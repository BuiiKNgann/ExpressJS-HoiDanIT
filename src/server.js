const express = require('express');// require express
const path = require('path');
const app = express();// khởi tạo express
const port = 8081;

//config template engine
app.set('views', path.join(__dirname, 'views')); // khai báo thư mục
app.set('view engine', 'ejs') // định nghĩa thư viện ejs


//Khai báo route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('check abc')
})

app.get('/hoidanit', (req, res) => {
    //  res.send('<h1>HOi DAN IT</h1>')
    res.render('sample.ejs') //view động
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})