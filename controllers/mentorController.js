const { Mentor } = require('../models');

// Obtener todos los mentores
exports.getAllMentores = async (req, res) => {
  try {
    const mentores = await Mentor.findAll();
    res.status(200).json(mentores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo mentor
exports.createMentor = async (req, res) => {
  try {
    const { name, email, expertise, experienceYears, phone, linkedinProfile } = req.body;
    const nuevoMentor = await Mentor.create({ name, email, expertise, experienceYears, phone, linkedinProfile });
    res.status(201).json(nuevoMentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un mentor por ID
exports.getMentorById = async (req, res) => {
  try {
    const mentor = await Mentor.findByPk(req.params.id);
    if (mentor) {
      res.status(200).json(mentor);
    } else {
      res.status(404).json({ error: 'Mentor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un mentor por ID
exports.updateMentor = async (req, res) => {
  try {
    const { name, email, expertise, experienceYears, phone, linkedinProfile } = req.body;
    const mentor = await Mentor.findByPk(req.params.id);
    if (mentor) {
      mentor.name = name;
      mentor.email = email;
      mentor.expertise = expertise;
      mentor.experienceYears = experienceYears;
      mentor.phone = phone;
      mentor.linkedinProfile = linkedinProfile;
      await mentor.save();
      res.status(200).json(mentor);
    } else {
      res.status(404).json({ error: 'Mentor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un mentor por ID
exports.deleteMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findByPk(req.params.id);
    if (mentor) {
      await mentor.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Mentor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
