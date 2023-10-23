// Express Router Setting
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'))
const { generatePassword, showPassword } = require('./public/javascripts/function.js')

// View Engine: Express-Handlebars
const {engine} = require('express-handlebars')

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

// Router

app.get('/', (req, res) => {
  res.redirect('/generate')
})

app.get('/generate', (req, res) => {
  res.render('generate')  
})

app.get('/pw', (req, res) => {
  const order = {
    Length: Number(req.query.Length),
    lowercase: req.query.lowercase,
    uppercase: req.query.uppercase,
    numbers: req.query.numbers,
    symbols: req.query.symbols,
    excludedChars: req.query.excludedChars.trim()
  }
  const password = generatePassword(order)
  if (!password || password.length < 4) {
    const alert = `<script>alert('Error!')</script>`
    res.render('generate', { pw: alert })
  }
  res.render('generate', { pw: showPassword(password) })
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})