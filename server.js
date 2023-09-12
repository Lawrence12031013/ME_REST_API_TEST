require('dotenv').config()

const express = require('express')
const app = express()
const router = express.Router()
const ejs = require('ejs')
const mongoose = require('mongoose')

mongoose.connect( process.env.DATABASE_URL, { useNewUrlParser:true })

const db = mongoose.connection
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('Connected to Database.')
})

app.use(express.json())
app.use(express.static('./public'))

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

// app.get('/', (req, res) => {
//     res.send('This is Homepage.')
// })

app.listen(3000, () => {
    console.log('Server is running.')
})

