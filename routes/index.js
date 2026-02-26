const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getIndex);
router.get('/policy', mainController.getPolicy);
router.post('/contact', mainController.postContact);

module.exports = router;
