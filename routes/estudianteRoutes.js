const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController');

// Rutas para CRUD de estudiantes
router.get('/', estudianteController.getAllEstudiantes);
router.post('/', estudianteController.createEstudiante);
router.get('/:id', estudianteController.getEstudianteById);
router.put('/:id', estudianteController.updateEstudiante);
router.delete('/:id', estudianteController.deleteEstudiante);

module.exports = router;
