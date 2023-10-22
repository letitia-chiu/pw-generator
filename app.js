// Express Router Setting
const express = require('express')
const app = express()
const port = 3000


// View Engine: Express-Handlebars
const {engine} = require('express-handlebars')

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')


// Router

app.get('/', (req, res) => {
  res.send('Express app for project')
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})