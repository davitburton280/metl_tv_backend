const fse = require('fs-extra');
const multer = require('multer');
const path = require('path');
const UPLOAD_MAX_FILE_SIZE = 2 * 1024 * 1024;

let storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        const data = req.body;

        let dir;
        if (file.fieldname === 'video_thumbnail_file') {
            dir = path.join(__dirname, '../public/uploads/thumbnails');
        } else {
            dir = path.join(__dirname, '../public/uploads/videos');

        }

        const folder = data.folder;
        const edit = !!data.id;


        await fse.ensureDir(dir);

        cb(null, dir)
    },
    filename: function (req, file, cb) {
        let dir = path.join(__dirname, '../public/uploads/videos');
        // console.log(req)
        // console.log(file)
        cb(null, file.originalname) // already have got Date implemented in the name
    }
});


let upload = multer({
    storage: storage,
    limits: {fileSize: UPLOAD_MAX_FILE_SIZE},
    fileFilter: function (req, file, cb) {
        console.log('file filter!!!!')
        // let filetypes = /jpeg|jpg/;
        // let mimetype = filetypes.test(file.mimetype);
        // let extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // if (!mimetype && !extname) {
        //     req.fileTypeError = {message: "The file has an invalid type"};
        //     return cb(null, false, req.fileTypeError)
        // }
        cb(null, true);
    }
});
global.uploadVideoStreamFile = upload.single('video_stream_file');
global.uploadVideoThumbFile = upload.single('video_thumbnail_file');
