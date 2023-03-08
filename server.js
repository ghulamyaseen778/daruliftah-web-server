require("dotenv").config()
const express = require('express') //import express
const { default: mongoose } = require('mongoose') //import mongoose
const routes = require('./routes') //import routes
const app = express() //intilaize express
const PORT = process.env.PORT || 5000 //define port 
const cors = require('cors') //import cors
const { Storage } = require('./config/firebase.config.js')
const {getDownloadURL, ref, uploadBytes } = require("firebase/storage")

//start connection
mongoose.connect(process.env.MONGO_DB_URI)
  .then((res) => console.log("Server connected"))
  .catch((err) => console.log("Server disconnected"))
//close connection
app.use(express.json()) //intilaize json
app.use(cors()) //intilaize cors
app.use('/daruliftah',routes)
app.use('/admin',routes)

  //listen request
  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
    console.log('Press Ctrl+C to quit.')
  })