const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// const userRoutes = require('./routes/userRoutes')

const app = express()
require('dotenv').config()

// var app=express()
app.use(cors())

//middleware
app.use(express.json())

app.use('/api', require('./routes/userRoutes'))

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connectd successfully...')
  })
  .catch((err) => {
    console.log(err.message)
  })

const server = app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`)
})
