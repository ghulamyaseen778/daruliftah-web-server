require("dotenv").config()
const express = require('express') //import express
const { default: mongoose } = require('mongoose') //import mongoose
const routes = require('./routes') //import routes
const app = express() //intilaize express
const PORT = process.env.PORT || 5000 //define port 
const cors = require('cors') //import cors
const { Storage } = require('./config/firebase.config.js')
const {getDownloadURL, ref, uploadBytes,uploadBytesResumable } = require("firebase/storage")
const {upload} = require('./middleware') //import upload
const multer = require("multer")

//start connection
mongoose.connect(process.env.MONGO_DB_URI)
  .then((res) => console.log("Server connected"))
  .catch((err) => console.log("Server disconnected"))
//close connection
app.use(express.json()) //intilaize json
app.use(cors()) //intilaize cors
app.use('/daruliftah',routes)
app.use('/admin',routes)

app.post('/upload',upload, (req,res)=>{
  console.log(req.file)
  const metadata = {
    contentType: 'image/jpeg'
};
  const storageRef = ref(Storage,`uploads/${req.file.originalname}`)
      console.log(storageRef)
  //     const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
   uploadBytesResumable(storageRef,req.file,metadata).then((snap)=>{
        console.log("success")
        // getDownloadURL(storageRef).then((url)=>{
        //   console.log(url)
        // })
      })
})

  //listen request
  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
    console.log('Press Ctrl+C to quit.')
  })