const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const viewPanelSchema = new Schema({

    group_name:{
        type:String,
        require:true
    },
    panel_name:{
        type:String,
        require:true
    }

})

const ViewPanel = mongoose.model("ViewPanel", viewPanelSchema);

module.exports = ViewPanel;