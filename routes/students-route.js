const express = require('express');
const StudentsController = require('../controllers/StudentsController');
const router = express.Router();

router.get('/', StudentsController.index);
router.get('/create', StudentsController.create);

router.get('/show/:student_id', StudentsController.show);

// POST
router.post('/create', StudentsController.store);

module.exports = router;