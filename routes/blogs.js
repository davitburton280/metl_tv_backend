const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');
const isAuth = require('../helpers/isAuth');

router.post('/', isAuth, uploadImageFile, blogsController.create)
router.get('/', blogsController.list)
router.get('/:id', blogsController.read)
router.delete('/:id', blogsController.delete)
router.put('/:id', isAuth, uploadImageFile, blogsController.update)


module.exports = router;
