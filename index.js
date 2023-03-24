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
const ClausorSchema = require("./Modals/Images")
const fs = require('fs')
const pdfParse = require('pdf-parse')



//start connection
mongoose.connect(process.env.MONGO_DB_URI)
  .then((res) => console.log("Server connected"))
  .catch((err) => console.log("Server disconnected"))
//close connection
app.use(express.json()) //intilaize json
app.use(cors()) //intilaize cors
app.use('/daruliftah',routes)
app.use('/admin',routes)

// app.get("/up",(req,res) =>{
//   const getPDF = async (file) => {
//     let readFileSync = fs.readFileSync(file)
//     try {
//       let pdfExtract = await pdfParse(readFileSync)
//       console.log('File content: ', pdfExtract.text)
//       console.log('Total pages: ', pdfExtract.numpages)
//       console.log('All content: ', pdfExtract.info)
//       res.json({
//         data:pdfExtract.text
//       })
//     } catch (error) {
//       throw new Error(error)
//     }
//   }
//   const pdfRead = './2.wirasat abdullah mukki.pdf'
//   getPDF(pdfRead)
// })

app.post('/upload',upload.single("img"), async (req,res)=>{
  console.log(req.file)
  return
  const metadata = {
    contentType: req.file.mimetype
};
  const storageRef = ref(Storage,`uploads/${req.file.fieldname+"_"+Date.now()}`)
      console.log(storageRef)
  //     const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
  await uploadBytesResumable(storageRef,req.file.buffer,metadata).then((snap)=>{
        console.log("success")
        getDownloadURL(storageRef).then((url)=>{
          // console.log(url)
          ClausorSchema.create({name:req.body.name,url},(err,data)=>{
            if (err) {
              res.status(500).json({
                data:"something went wrong"
              })
            }
            else{
              res.json({
                data
              })
            }
          })
        })
      })
})

  //listen request
  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
    console.log('Press Ctrl+C to quit.')
  })