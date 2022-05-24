const express = require('express');
const router = express.Router();
const isAuth = require('../helpers/isAuth');
const UploadController = require('../controllers/upload');
const { UPLOAD_MODULE_TYPES } = require('../constants/index');

async function uploadNestedMiddleware(req, res, next) {
    const type = req.params.type;

    if (type === UPLOAD_MODULE_TYPES.image) {
        uploadImageFile(req, res, next);
    } else if (type === UPLOAD_MODULE_TYPES.file) {
        uploadFile(req, res, next);
    } else if (type === UPLOAD_MODULE_TYPES.video) {
        uploadVideoFile(req, res, next);
    } else {
        res.status(404).send({ message: 'API no found' })
    };

} 

router.post('/upload/:type', isAuth, uploadNestedMiddleware, UploadController.upload);
router.delete('/file/:type', UploadController.delete);

module.exports = router;