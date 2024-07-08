const path = require('path');
const express = require('express');// require express
const configViewEngine = (app) => {
    // app.set('views', path.join(__dirname, 'views')); // khai báo thư mục

    app.set('views', path.join('./src', 'views'));

    app.set('view engine', 'ejs') // định nghĩa thư viện ejs
    //config static file
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;