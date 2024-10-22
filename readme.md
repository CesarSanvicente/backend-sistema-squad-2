# Sistema de Inscripciones API Backend

![Node.js](https://img.shields.io/badge/Node.js-v20.16.0-green)
![Express](https://img.shields.io/badge/Express-v4.18.2-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v14.0-yellow)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.6.5-orange)

## Descripción

Este proyecto es una API RESTful para un sistema de inscripciones, que gestiona estudiantes, mentores y usuarios de la plataforma. Utiliza Node.js, Express y PostgreSQL como base de datos, junto con Sequelize como ORM.

### Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución para JavaScript
- **Express.js** - Framework web para Node.js
- **PostgreSQL** - Sistema de gestión de bases de datos relacional
- **Sequelize** - ORM para Node.js y PostgreSQL
- **JWT** - Autenticación basada en tokens
- **bcryptjs** - Hashing de contraseñas

---

## Instalación y Configuración del Proyecto

### Requisitos

- Node.js v16.0 o superior
- PostgreSQL v12.0 o superior

### Pasos para la Instalación

1. **Clonar el repositorio:**

```bash
git clone https://github.com/usuario/sistema-inscripciones.git
cd sistema-inscripciones

2. **Instalar dependencias:**

npm install

3. **Configurar la base de datos (colocar lo siguiente en el .env):**

PORT=4000
DATABASE_URL=postgres://tuusuario:tucontraseña@localhost:5432/sistema_inscripciones


4. **Correr las migraciones:**

npx sequelize-cli db:migrate

5. **Correr el servidor:**

npm start


Endpoints de la API
Estudiantes
GET /students - Obtener todos los estudiantes
POST /students - Crear un nuevo estudiante
GET /students/:id - Obtener un estudiante por ID
PUT /students/:id - Actualizar un estudiante por ID
DELETE /students/:id - Eliminar un estudiante por ID
Mentores
GET /mentors - Obtener todos los mentores
POST /mentors - Crear un nuevo mentor
GET /mentors/:id - Obtener un mentor por ID
PUT /mentors/:id - Actualizar un mentor por ID
DELETE /mentors/:id - Eliminar un mentor por ID

src/
├── config/
│   └── config.js        # Configuración de Sequelize y la base de datos
├── controllers/
│   ├── studentController.js  # Lógica de los estudiantes
│   ├── mentorController.js   # Lógica de los mentores
│   └── userController.js     # Lógica de los usuarios
├── middlewares/
│   └── authMiddleware.js  # Middleware de autenticación
├── migrations/
│   └── xxxx-create-student.js
├── models/
│   ├── index.js       # Inicialización de modelos
│   ├── student.js     # Definición del modelo de Estudiantes
│   ├── mentor.js      # Definición del modelo de Mentores
│   └── user.js        # Definición del modelo de Usuarios
├── routes/
│   ├── studentRoutes.js    # Rutas para los estudiantes
│   ├── mentorRoutes.js     # Rutas para los mentores
│   └── userRoutes.js       # Rutas para los usuarios
└── app.js             # Configuración de la aplicación



## Pasos para la Instalación
Autenticación
El proyecto utiliza JWT (JSON Web Tokens) para manejar la autenticación de usuarios. Puedes generar un token de acceso al iniciar sesión con un usuario registrado.

Próximos pasos
Validación de datos: Añadir validaciones más estrictas para los datos de entrada en los endpoints.
Documentación: Crear una documentación interactiva con Swagger.
Testing: Añadir pruebas unitarias y de integración con Jest y Supertest.