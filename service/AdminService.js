const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper');
const {PostCreate,PostChecking} = require('../database/AdminData')

const PostCreateService = (req,res)=>{
    let Query = req.body
    try {
        PostCreate(Query,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const PostcheckingService = (req,res)=>{
    try {
        const data = req.body //body string
        // console.log(data,"data")
        PostChecking(data,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}
module.exports={PostCreateService,PostcheckingService}