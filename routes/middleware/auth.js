const jwt = require("jsonwebtoken");

// Middleware para verificar el token JWT
const auth = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Acceso denegado. No se proporcionó un token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Almacenar la info del token en req.user
    next();
  } catch (error) {
    res.status(400).json({ message: "Token no válido" });
  }
};

// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Acceso denegado. No eres administrador." });
  }
  next();
};

module.exports = { auth, isAdmin };
