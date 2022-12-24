const FatwaSchema = require('../Modals/Fatwa') //import modal of fatwaSchema
const MsgFunc = require('../helper/msg') //import Msg from helper
const RequestAndResponseHandler=require('../helper')

const  GetFatwaData = (queryObject,res)=>{
    try {
        FatwaSchema.find(queryObject, (err, fatwa) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,fatwa,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const  GetSingleFatwaData = (id,res)=>{
    try {
        FatwaSchema.findById(id, (err, fatwa) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,fatwa,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const  PostFatwaData = (data,res)=>{
    try {
        FatwaSchema.create(data, (err, fatwa) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,fatwa,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg2,null,res)
    }
}

const  UpdateFatwaData = (id,data,res)=>{
    try {
        FatwaSchema.findByIdAndUpdate(id,data,{new:true,upsert:true}, (err, fatwa) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,fatwa,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const  DeleteFatwaData = (id,res)=>{
    try {
        FatwaSchema.findByIdAndDelete(id, (err, fatwa) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,fatwa,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

module.exports={GetFatwaData,GetSingleFatwaData,PostFatwaData,UpdateFatwaData,DeleteFatwaData}