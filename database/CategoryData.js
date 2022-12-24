const CategorySchema = require('../Modals/Category');
const MsgFunc = require('../helper/msg');
const RequestAndResponseHandler = require('../helper')

const  GetCategory = (queryObject,res)=>{
    try {
        CategorySchema.find(queryObject, (err, Category) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,Category,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const  PostCategory = (data,res)=>{
    try {
        CategorySchema.create(data, (err, Category) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,Category,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg2,null,res)
    }
}

const  UpdateCategory = (id,data,res)=>{
    try {
        FatwaSchema.findByIdAndUpdate(id,data,{new:true,upsert:true}, (err, Category) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,Category,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

const  DeleteCategory = (id,res)=>{
    try {
        FatwaSchema.findByIdAndDelete(id, (err, Category) => {
            if (err) {
                RequestAndResponseHandler(MsgFunc.msg1,null,res)//check error
            } else {
                RequestAndResponseHandler(null,Category,res)//check data and send response
            }
        })
    } catch (error) {
        RequestAndResponseHandler(MsgFunc.msg1,null,res)
    }
}

module.exports={GetCategory,PostCategory,UpdateCategory,DeleteCategory}