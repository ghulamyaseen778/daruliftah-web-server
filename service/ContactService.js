const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper');
const {GetContact,PostContact,UpdateContact,DeleteContact} = require('../database/ContactData')

const GetService = (req,res)=>{
    try {
        GetContact({},res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const PostService = (req,res)=>{
    try {
        const data = req.body //body string
        // console.log(data,"data")
        PostContact(data,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const UpdateService = (req,res)=>{
    try {
        const {id,data} = req.body //body string
        UpdateContact(id,data,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const DeleteService = (req,res)=>{
    try {
        const {id} = req.body //body string
        DeleteContact(id,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}
module.exports={GetService,PostService,UpdateService,DeleteService}