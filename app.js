// Express Router Setting
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { generatePassword } = require('./public/javascripts/generator.js')

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

app.post('/result', (req, res) => {
  const option = req.body
  const result = generatePassword(option)
  res.render('generate', {result, option})
})

app.get('/history', (req, res) => {
  res.render('history')
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})