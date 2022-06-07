const fse = require('fs-extra');
const multer = require('multer');
const path = require('path');

const fileLimit = 3 * 1024 * 1024;

let isVideoHasLimit = true;

let storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        const data = req.body;

        let dir;
        if (file.fieldname === 'video_thumbnail_file') {
            dir = path.join(__dirname, '../public/uploads/thumbnails');
            file.directory = '/public/uploads/thumbnails';
        } else if (file.fieldname === 'avatar_file') {
            dir = path.join(__dirname, '../public/uploads/avatars');
            file.directory = '/public/uploads/avatars';
        } else if (file.fieldname === 'cover_file') {
            dir = path.join(__dirname, '../public/uploads/covers');
            file.directory = '/public/uploads/covers';
        } else if (file.fieldname === 'user_avatar_file') {
            dir = path.join(__dirname, '../public/uploads/user_avatars');
            file.directory = '/public/uploads/user_avatars';
        } else if (file.fieldname === 'group_avatar_file') {
            dir = path.join(__dirname, '../public/uploads/group_avatars');
            file.directory = '/public/uploads/group_avatars';
        } else if (file.fieldname === 'file') {
            dir = path.join(__dirname, '../public/uploads/files');
            file.directory = '/public/uploads/files';
        } else if (file.fieldname === 'image') {
            dir = path.join(__dirname, '../public/uploads/images');
            file.directory = '/public/uploads/images';
        } else if (file.fieldname === 'video') {
            dir = path.join(__dirname, '../public/uploads/videos');
            file.directory = '/public/uploads/videos';
            isVideoHasLimit = true;
        } else {
            dir = path.join(__dirname, '../public/uploads/videos');
            file.directory = '/public/uploads/videos';
            isVideoHasLimit = true;
        }

        console.log(dir)

        const folder = data.folder;
        const edit = !!data.id;

        await fse.ensureDir(dir);

        cb(null, dir)
    },
    filename: (req, file, cb) => {
        let dir = path.join(__dirname, '../public/uploads/videos');
        const extention = file.originalname.slice(file.originalname.lastIndexOf('.') + 1, file.originalname.length);
        const date = new Date();
        file.extention = extention;
        const name = file.fieldname + '_' + date.getTime() + '.' + extention;
        cb(null, name) // already have got Date implemented in the name
    }
});

const multerConfig = () => {
    let config = {
        storage: storage,
        limits: { fileSize: fileLimit },
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
    }

    if (!isVideoHasLimit) {
        delete config.limits;
    }

    return config;
}

let upload = multer(multerConfig());
global.uploadVideoStreamFile = upload.single('video_stream_file');
global.uploadVideoThumbFile = upload.single('video_thumbnail_file');
global.uploadAvatar = upload.single('avatar_file');
global.uploadGroupAvatar = upload.single('group_avatar_file');
global.uploadUserAvatar = upload.single('user_avatar_file');
global.uploadCover = upload.single('cover_file');
global.uploadFile = upload.single('file');
global.uploadImageFile = upload.single('image');
global.uploadVideoFile = upload.single('video');
