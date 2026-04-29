const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getIndex);
router.get('/policy', mainController.getPolicy);
router.get('/gracias', mainController.getGracias);
router.post('/contact', mainController.postContact);

module.exports = router;
