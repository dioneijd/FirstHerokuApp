const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//express()
//  .use(express.static(path.join(__dirname, 'public')))
//  .set('views', path.join(__dirname, 'views'))
//  .set('view engine', 'ejs')
//  .get('/', (req, res) => res.render('pages/index'))
//  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const app = express()

const route = express.Router()

route.get('/', (req, res) => {return res.send('Hello World')})


app.use(route)

app.listen(5000)


//import express from 'express';