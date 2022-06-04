const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const topicSchema= new Schema({
    group_id:{
        type:String,
        required:true
    },
    group_name:{
        type:String
    },
    topic:{
        type:String,
        required:true
    },
    topic_status:{
        type:String,
        
        
    }

})


const topics= mongoose.model('topicaccept', topicSchema) 

module.exports =topics;