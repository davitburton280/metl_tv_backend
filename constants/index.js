const path = require("path");

const CLIPZ_DURATION = 30000;

const UPLOAD_MODULE_TYPES = {
    video: 'video',
    image: 'image',
    file: 'file',
    messageFile: 'message_files'
};

const ALLOWED_VIDEO_EXTS = ["mp4", "webm", "ogg", "mkv"];

const ALLOWED_MIME_TYPES = ["video/mp4", "video/webm", "video/ogg", "video/x-matroska"];

const FILE_PATHS = {
    VIDEO_PATH: path.join(__dirname, '../public/uploads/videos')
}

const USER_SUBSCRIPTION_PLANS = {
    bronze: 'bronze',
    silver: 'silver',
    gold: 'gold'
}

module.exports = {
    CLIPZ_DURATION,
    UPLOAD_MODULE_TYPES,
    ALLOWED_VIDEO_EXTS,
    ALLOWED_MIME_TYPES,
    FILE_PATHS,
    USER_SUBSCRIPTION_PLANS
};