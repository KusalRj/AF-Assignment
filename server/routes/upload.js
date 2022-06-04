const path = require('path');
const multer = require('multer');
const Upload = require('../models/upload');
const Router = require('express').Router();
//const ObjectId = require('mongodb').ObjectID;

const upload = multer({
    storage: multer.diskStorage({
        destination(req, File, cb) {
            cb(null, './');
        },
        filename(req, file, cb) {
            cb(null, `${new Date().getTime()}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 10000000 // max file size 10MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls|ppt|pptx)$/)) {
            return cb(
                new Error(
                    'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
                )
            );
        }
        cb(undefined, true); // continue with upload
    }
});

Router.post("/add", upload.single('file'), async (req, res) => {
        try {
            const { submissionName, description } = req.body;
            const { path, type } = req.file;
            const file = new Upload({
                submissionType: submissionName,
                description: description,
                file_path: path,
                file_type: type
            });

            console.log(submissionName);
            console.log(description);
            console.log(path);
            console.log(type);

            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            res.status(400).send('Error while uploading file. Try again later.');
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(500).send(error.message);
        }
    }
);

module.exports = Router;