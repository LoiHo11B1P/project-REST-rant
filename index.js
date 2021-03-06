require('dotenv').config()
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Middle Ware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Specific controller to handle routing and api call
app.use('/places', require('./controllers/places'))
//app.use('/comments', require('./controllers/comments'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('*', (req, res) => {
    res.status(404)
    .render('error404')
})

app.listen(process.env.PORT)