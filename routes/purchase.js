const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validatePostDetails = require('../validators/validatePostDetails');
const isAuth = require('../helpers/isAuth');

