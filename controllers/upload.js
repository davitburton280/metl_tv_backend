require('dotenv').config();
const Busboy = require("busboy");
const path = require("path");
const sha1 = require("sha1");
const { UPLOAD_MODULE_TYPES, ALLOWED_MIME_TYPES, ALLOWED_VIDEO_EXTS, FILE_PATHS } = require('../constants/index');
const db = require('../models');
const Files = db.files;
let formidable = require('formidable');
let fs = require('fs');
const { castDurationToMiliseconds } = require('../helpers/index');


function getExtension(filename) {
    return filename.split(".").pop();
}

function isFileValid(filename, mimetype) {
    const extension = getExtension(filename);
    return ALLOWED_VIDEO_EXTS.indexOf(extension.toLowerCase()) != -1 &&
        ALLOWED_MIME_TYPES.indexOf(mimetype) != -1;
}

function parseFile(formData) {
    let object = {};
    Object.keys(formData).forEach(function (value, key) {
        object[key] = value;
    });
    return object;
}

exports.uploadVideo = async (req, res) => {
    // let form = new formidable.IncomingForm(req.body);
    // form.parse(req, function (error, fields, file) {
    //     console.log(fields);
    //     const isValidFileType = isFileValid(file.file.originalFilename, file.file.mimetype);
    //     if (isValidFileType) {
    //         let filepath = file.file.filepath;
    //         let newpath = FILE_PATHS.VIDEO_PATH;
    //         newpath += file.file.originalFilename;
    //         fs.rename(filepath, newpath, function () {
    //             res.send({ filepath, newpath })
    //         });
    //     } else {
    //         res.status(400).send({ message: 'Wrong video type', allowedTypes: ALLOWED_MIME_TYPES })
    //     }
    // });

    console.log('video uploaded 1');
    return res.send({ message: 'video uploaded' })
};

exports.uploadImage1 = async (req, res) => {
    console.log('image uploaded 1');
    return res.send({ message: 'image uploaded' })
};

exports.uploadFile1 = async (req, res) => {
    console.log('file uploaded');
    return res.send({ message: 'file uploaded' })
};

exports.upload = async (req, res) => {
    const type = req.params.type;
    const user = req.decoded;
    const file = req.file;
    const { duration, belonging } = req.body;

    const model = {
        user_id: user.id,
        type: type,
        name: file.filename,
        mimetype: file.mimetype,
        originalName: file.originalname,
        extension: file.extention,
        path: file.directory,
        size: file.size,
        duration,
        duration_miliseconds: castDurationToMiliseconds(duration).decoded,
        belonging
    };

    await Files.create(model);
    return res.send({ message: `${type} successfuly uploaded`, path: model.path + '/' + model.name });

};