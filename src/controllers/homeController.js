const getHomePage = (req, res) => {
    res.send('Hello World! & nodemon')

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