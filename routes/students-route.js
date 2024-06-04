const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const router = express.Router();

router.get('/', StudentsController.index)

module.exports = router;