const AdminSchema = require('../Modals/Admin');
const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper')

const  PostChecking = (queryObject,res)=>{
    try {
        AdminSchema.find(queryObject, (err, Admin) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,{bool:false},res)//check error
            } else {
                RequestAndResponseHandler(null,{bool:true},res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,{bool:false},res)
    }
}

const  PostCreate = (data,res)=>{
    try {
        AdminSchema.create(data, (err, Admin) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,Admin,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg2,null,res)
    }
}


module.exports={PostCreate,PostChecking}