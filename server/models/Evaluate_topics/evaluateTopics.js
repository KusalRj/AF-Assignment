const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const evaluateTopicsSchema = new Schema({

    group_name:{
        type:String,
        require: true
    },
    topic_name :{
        type:String,
        require: true
    },
    evaluate_detail :{
        type:String,
        require:true
    },
    panel_member :{
        type:String,
        require:true
    }

})

const EvaluateTopic = mongoose.model("EvaluateTopic", evaluateTopicsSchema);

module.exports = EvaluateTopic;