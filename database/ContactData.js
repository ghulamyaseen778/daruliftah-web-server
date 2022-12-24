const ContactSchema = require('../Modals/Conatct');
const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper')

const  GetContact = (queryObject,res)=>{
    try {
        ContactSchema.find(queryObject, (err, contact) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,contact,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const  PostContact = (data,res)=>{
    try {
        ContactSchema.create(data, (err, contact) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,contact,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg2,null,res)
    }
}

const  UpdateContact = (id,data,res)=>{
    try {
        FatwaSchema.findByIdAndUpdate(id,data,{new:true,upsert:true}, (err, contact) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,contact,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const  DeleteContact = (id,res)=>{
    try {
        FatwaSchema.findByIdAndDelete(id, (err, contact) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,contact,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

module.exports={GetContact,PostContact,UpdateContact,DeleteContact}