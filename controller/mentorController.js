const Mentor = require("../models/mentor");

// Obtener todos los mentores
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.findAll();
    res.status(200).json(mentors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los mentores", error });
  }
};

// Crear un nuevo mentor
exports.createMentor = async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.status(201).json(mentor);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el mentor", error });
  }
};

// Actualizar un mentor existente
exports.updateMentor = async (req, res) => {
  try {
    const mentor = await Mentor.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el mentor", error });
  }
};

// Eliminar un mentor
exports.deleteMentor = async (req, res) => {
  try {
    await Mentor.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Mentor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el mentor", error });
  }
};
