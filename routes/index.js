const express = require('express');
const router = express.Router();
const multer = require('multer');
const mainController = require('../controllers/mainController');
const supportController = require('../controllers/supportController');

// ── Multer: almacenamiento en memoria (sin escribir en disco) ──
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
    fileFilter: (req, file, cb) => {
        const allowed = /\.(jpg|jpeg|png|gif|webp|pdf|doc|docx|xls|xlsx|txt|zip)$/i;
        if (allowed.test(file.originalname)) {
            cb(null, true);
        } else {
            cb(null, false); // rechaza silenciosamente; la validación real está en el controller
        }
    },
});

// ── Rutas principales ──────────────────────────────────────────
router.get('/', mainController.getIndex);
router.get('/policy', mainController.getPolicy);
router.get('/gracias', mainController.getGracias);
router.post('/contact', mainController.postContact);

// ── Rutas de Soporte al Cliente ────────────────────────────────
router.get('/soporte', supportController.getSoporte);
router.get('/soporte/exito', supportController.getSoporteExito);
router.post('/soporte', upload.single('adjunto'), supportController.postSoporte);

module.exports = router;
