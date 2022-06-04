const mongoose= require("mongoose");
const Shema = mongoose.Schema;

const markSchema= new Shema({
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
        
    },
    marking_type1:{
        type:Number
    },
    marking_type2:{
        type:Number
    },
    marking_type3:{
        type:Number
    },
    total_marks:{
        type:Number
    },
    evaluation_rep:{
        type:String
    }

}) 

const stuMarks= mongoose.model('AssignmentMarking', markSchema) 

module.exports =stuMarks;