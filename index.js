require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000", // El origen de tu frontend
  credentials: true, // Si necesitas enviar cookies o credenciales
}));

// Middlewares
app.use(express.json());

// Importar rutas
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);
const estudianteRoutes = require('./routes/estudianteRoutes');
app.use('/estudiantes', estudianteRoutes);
const mentorRoutes = require('./routes/mentorRoutes');
app.use('/mentores', mentorRoutes);
// Ruta base
app.get("/", (req, res) => {
  res.send("Bienvenido al sistema de inscripciones!");
});

// Escuchar en el puerto configurado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
