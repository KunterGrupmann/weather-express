const express = require('express')
const app = express()

const path = express('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(3000)