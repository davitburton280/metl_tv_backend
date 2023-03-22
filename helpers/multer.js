const { S3Client } = require('@aws-sdk/client-s3');
const fse = require('fs-extra');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { ALLOWED_VIDEO_EXTS } = require('../constants');

const fileLimit = 3 * 1024 * 1024;

let isVideoHasLimit = false;

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
        } else if (
            file.fieldname === 'image' || file.fieldname === 'image_channel_cover' 
            || file.fieldname === 'image_channel') {
            dir = path.join(__dirname, '../public/uploads/images');
            file.directory = '/public/uploads/images';
        } else if (file.fieldname === 'video') {
            dir = path.join(__dirname, '../public/uploads/videos');
            file.directory = '/public/uploads/videos';
            isVideoHasLimit = true;
        } else if (file.fieldname === 'message_files') {
            dir = path.join(__dirname, '../public/uploads/message_files');
            file.directory = '/public/uploads/message_files';
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

const s3 = new S3Client({
    forcePathStyle: false,
    endpoint: process.env.SPACES_ENDPOINT,
    region: process.env.SPACES_REGION,
    credentials: {
      accessKeyId: process.env.SPACES_KEY,
      secretAccessKey: process.env.SPACES_SECRET
    }
})

const uploadVideoToS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'metl-uploads',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        metadata: function(req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb) {
            const fileExtension = file.originalname.split('.').pop();
            const uniqueFileName = `${uuidv4()}.${fileExtension}`;
            console.log('fileName', uniqueFileName);
            cb(null, `videos/${uniqueFileName}`);
        },
    }),
    fileFilter: function (req, file, cb) {
        const fileExtension = file.originalname.split('.').pop().toLowerCase();

        if (ALLOWED_VIDEO_EXTS.includes(fileExtension)) {
          cb(null, true);
        } else {
          cb(new Error('Only ' + ALLOWED_VIDEO_EXTS.join(', ') + ' files are allowed!'));
        }
    },
      
})

let upload = multer(multerConfig());
global.uploadVideoStreamFile = uploadVideoToS3.single('video_stream_file');
global.uploadVideoThumbFile = upload.single('video_thumbnail_file');
global.uploadAvatar = upload.single('avatar_file');
global.uploadGroupAvatar = upload.single('group_avatar_file');
global.uploadUserAvatar = upload.single('user_avatar_file');
global.uploadCover = upload.single('cover_file');
global.uploadFile = upload.single('file');
global.uploadImageFile = upload.single('image');
global.uploadVideoFile = upload.single('video');
global.uploadMessageFiles = upload.any('message_files');
global.uploadChannelCover = upload.single('image_channel_cover');
global.uploadChannelImage = upload.single('image_channel');
