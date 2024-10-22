const { Estudiante } = require('../models');

// Obtener todos los estudiantes
exports.getAllEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo estudiante
exports.createEstudiante = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const nuevoEstudiante = await Estudiante.create({ name, email, age });
    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un estudiante por ID
exports.getEstudianteById = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (estudiante) {
      res.status(200).json(estudiante);
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un estudiante por ID
exports.updateEstudiante = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (estudiante) {
      estudiante.name = name;
      estudiante.email = email;
      estudiante.age = age;
      await estudiante.save();
      res.status(200).json(estudiante);
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un estudiante por ID
exports.deleteEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (estudiante) {
      await estudiante.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
