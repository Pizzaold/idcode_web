const express = require('express')
const app = express()

// use html view files
const path = require('path')
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// show form data in request
const parseUrl = require('body-parser');
let encodeUrl = parseUrl.urlencoded({ extended: true });

app.get('/', (req, res) => {
	res.render('validate_form')
})


const validId = require('./validate')

app.post('/validate', encodeUrl, (req, res) => {
	console.log('form data validation')
	console.log(req.body)
	console.log(req.body.id_code)
	res.send(validId.idInfo(req.body.id_code))
})

app.listen(3000, () => {
  console.log('Example app is started at http://localhost:3000')
})