const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // No puede ser nulo
      validate: {
        notEmpty: true, // Validación de que no esté vacío
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // El correo debe ser único
      validate: {
        isEmail: true, // Validación de que sea un email válido
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.ENUM("user", "admin"), // Se limita a dos valores: 'user' y 'admin'
      defaultValue: "user",
    },
  });

  // Hook para encriptar la contraseña antes de guardar
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  // Hook para encriptar la contraseña antes de actualizar (por si actualiza su password)
  User.beforeUpdate(async (user) => {
    if (user.changed("password")) { // Solo si la contraseña fue modificada
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  });

  return User;
};
