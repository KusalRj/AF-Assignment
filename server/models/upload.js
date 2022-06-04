const mongoose = require('mongoose');

const UploadSchema = mongoose.Schema(
    {
        groupName: {
            type: String,
            required: true,
            trim: true
        },
        submissionType: {
            type: String,
            required: true,
            trim: true
        },
        file_path: {
            type: String,
            required: true
        },
        file_type: {
            type: String,
            required: true
        },
        feedback: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Upload = mongoose.model('Upload', UploadSchema);

module.exports = Upload;