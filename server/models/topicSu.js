const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const topicSchema= new Schema({
    groupId:{
        type:String,
        required:true
    },
    groupName:{
        type:String
    },
    topic:{
        type:String,
        required:true
    },
    topicStatus:{
        type:String,
        required:true
        
    }

})


const topicsSu= mongoose.model('topic', topicSchema) 

module.exports =topicsSu;