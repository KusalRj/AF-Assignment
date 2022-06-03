const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const panelSchema = new Schema ({
    group: {
        type: String,
        required: true,
    },

    topicName: {
        type: String,
        required: true,
    },

    member1: {
        type: String,
        required: true,
    },

    member2: {
        type: String,
        required: true,
    },

    member3: {
        type: String,
        required: true,
    }
})

const Panel = mongoose.model('Panel', panelSchema);

module.exports = Panel;