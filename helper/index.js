const RequestAndResponseHandler = (msg,data,HandelResponse)=>{
    if(msg){
        HandelResponse.sendStatus(404)
    }else{
        HandelResponse.json({data})
    }
}

module.exports=RequestAndResponseHandler