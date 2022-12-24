const RequestAndResponseHandler = (msg,data,HandelResponse)=>{
    if(msg){
        HandelResponse.json({data:msg})
    }else{
        HandelResponse.json({data})
    }
}

module.exports=RequestAndResponseHandler