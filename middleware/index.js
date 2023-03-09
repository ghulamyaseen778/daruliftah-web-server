const multer = require('multer') //import multers

const storage = multer.diskStorage({
    destination:"Uploads",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now()+".jpg")
    }
})

const upload = multer({
    storage : storage
}).single("img")

module.exports = {upload}