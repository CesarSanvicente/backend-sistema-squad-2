const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { auth, isAdmin } = require("../routes/middleware/auth");
// Registrar un usuario
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Error al registrar el usuario" });
  }
});


// Ruta de inicio de sesión
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Buscar al usuario por correo electrónico
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: "Usuario no encontrado" });
      }
  
      // Verificar la contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }
  
      // Generar un token JWT
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
  
      res.status(200).json({
        message: "Inicio de sesión exitoso",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      res.status(500).json({ message: "Error al iniciar sesión", error });
    }
  });
router.get("/admin", auth, isAdmin, (req, res) => {
    res.status(200).json({ message: "Bienvenido al panel de administración, admin!" });
  });
module.exports = router;
