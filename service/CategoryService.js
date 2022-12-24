const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper');
const {GetCategory,PostCategory,UpdateCategory,DeleteCategory} = require('../database/CategoryData')

const GetService = (req,res)=>{
    try {
        GetCategory({},res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const PostService = (req,res)=>{
    try {
        const data = req.body //body string
        // console.log(data,"data")
        PostCategory(data,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const UpdateService = (req,res)=>{
    try {
        const {id,data} = req.body //body string
        UpdateCategory(id,data,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const DeleteService = (req,res)=>{
    try {
        const {id} = req.body //body string
        DeleteCategory(id,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}
module.exports={GetService,PostService,UpdateService,DeleteService}