const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const evMarkingSchema = new Schema({

    group_name:{
        type:String,
        require:true
    },
    intro:{
        type:Number,
        require:true
    },
    body :{
        type:Number,
        require: true
    },
    conclusion :{
        type:Number,
        require:true
    },
    fluency :{
        type:Number,
        require:true
    },
    present :{
        type:Number,
        require:true
    },
    grammar :{
        type:Number,
        require:true
    },
    layout :{
        type:Number,
        require:true
    },

})

const EvMarking = mongoose.model("EvMarking", evMarkingSchema);

module.exports = EvMarking;