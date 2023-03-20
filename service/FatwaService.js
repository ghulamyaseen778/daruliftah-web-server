const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper');
const {GetFatwaData,GetSingleFatwaData,PostFatwaData,UpdateFatwaData,DeleteFatwaData} = require('../database/FatwaData')

const GetService = (req,res)=>{
    try {
        const { category,keyWord,id } = req.query //query strings

        const queryObject = {} //query object
        if (category) {
            queryObject.category = category
        }//check catagory in query object
        if (keyWord){
            queryObject.KeyWord = keyWord
        }
        if (id){
            queryObject._id =id
        }
        
        GetFatwaData(queryObject,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const GetSingleService = (req,res)=>{
    try {
        const { id } = req.params //params string
        GetSingleFatwaData(id,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const PostService = (req,res)=>{
    try {
        const data = req.body //body string
        PostFatwaData(data,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const UpdateService = (req,res)=>{
    try {
        const {id,data} = req.body //body string
        UpdateFatwaData(id,data,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const DeleteService = (req,res)=>{
    try {
        const {id} = req.body //body string
        console.log("ok",id)
        DeleteFatwaData(id,res)
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}
module.exports={GetService,GetSingleService,PostService,UpdateService,DeleteService}