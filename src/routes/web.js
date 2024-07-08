const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! & nodemon')
})

router.get('/abc', (req, res) => {
    res.send('check abc')
})

router.get('/hoidanit', (req, res) => {
    //  res.send('<h1>HOi DAN IT</h1>')
    res.render('sample.ejs') //view động
})

module.exports = router; //export default